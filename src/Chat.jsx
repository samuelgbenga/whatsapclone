import React, { useState, useEffect } from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";

function Chat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          Hello oh <span className="chat_name">Samuel G J</span>
          <span className="chat_timestamp">2:30pm</span>
        </p>
      </div>
      <div
        className="chat_footer
      "
      >
        <IconButton>
          <InsertEmoticon />
        </IconButton>

        <form>
          <input type="text" />
          <button>Send a message</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
