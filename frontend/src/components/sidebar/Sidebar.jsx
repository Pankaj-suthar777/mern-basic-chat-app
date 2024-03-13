import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ selectedConversation, setSelectedConversation }) => {
  return (
    <div
      className={`r border-slate-500 p-4 flex flex-col sm:block ${
        selectedConversation ? "hidden" : ""
      } `}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="absolute bottom-0">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
