import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Chatpage() {
  const [chats, setChat] = useState([]);
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
        return <h1 key={chat._id}>{chat.chatName}</h1>;
      })}
    </div>
  );
}

export default Chatpage;
