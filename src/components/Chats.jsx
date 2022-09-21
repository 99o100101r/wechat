import { onSnapshot, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
    // getChats();
  }, [currentUser.uid]);

  // console.log("chats", Object.entries(chats));
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => {
        return (
          <div className="userChat" key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt="userproflie" />
            <div className="userChatInfo">
              <span> {chat[1].userInfo.dispalyName} </span>
              {/* <p>{chat[1].uesrInfo.lastMessage?.text} </p> */}
              <p>hello </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
