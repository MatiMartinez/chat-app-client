import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endpoint = "localhost:4000";

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setName(name);

    socket = io(endpoint);
    socket.emit("join", { name }, () => {});

    /*return () => {
      socket.emit("disconnect");
      socket.off();
    };*/
  }, [endpoint, location.search]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages([...messages], msg);
    });
  }, [messages]);

  return (
    <div className="main-container">
      <div className="chat-container">
        <div className="chat-content">
          <div className="message"></div>
        </div>
        <div className="form-send">
          <input type="text" onChange={(e) => setMessage(e.target.value)} />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
}
