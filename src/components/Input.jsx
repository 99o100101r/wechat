import React, { useContext, useState } from "react";
import img from "../images/img.png";
import attach from "../images/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  Timestamp,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";

const Input = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (image) {
      const storgeRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storgeRef, image);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
          console.log("error in image", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setImage(null);
    setText("");
  };

  return (
    <div className="input">
      <input
        value={text}
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <img src={attach} alt="attch" />
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button onClick={handleSend} style={{ cursor: "pointer" }}>
          send
        </button>
      </div>
    </div>
  );
};

export default Input;
