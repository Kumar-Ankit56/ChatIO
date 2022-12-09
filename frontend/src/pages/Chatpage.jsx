import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Chatpage() {
  const [datas, setData] = useState("");
  const fetchChats = async () => {
    await axios.get("http://localhost:5000/api/chats").then((response) => {
      // console.log(response.data);
      const mydata = response.data;
      // console.log(mydata);
      setData(mydata);
      console.log(mydata);
    });
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>Mein</div>;
}

export default Chatpage;
