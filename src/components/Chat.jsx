import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/one.png";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log("daata ", data);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        {/* <span>hii there</span> */}
        <div className="chatIcons">
          <img src={cam} alt="camera icon" />
          <img src={add} alt="add icon" />
          <img src={more} alt="more icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
