import React from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import {
  DonutLarge,
  MoreVert,
  Chat,
  SearchOutlined,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat /> <SidebarChat /> <SidebarChat />{" "}
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
