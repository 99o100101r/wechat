import React from "react";
import cam from "../images/cam.png";
import more from "../images/more.png";
import add from "../images/one.png";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>jane</span>
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
