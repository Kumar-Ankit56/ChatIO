import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Chatpage() {
  const [chats, setChat] = useState("");
  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chats");
    setChat(data);
  };

  console.log(chats);
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => {
        return <div>{chat.chatName}</div>;
      })}
    </div>
  );
}

export default Chatpage;
