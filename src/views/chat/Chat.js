import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../../components/infoBar/InfoBar";
import Messages from "../../components/messages/Messages";

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
    socket.emit("join", { name }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [endpoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  function sendMessage(event) {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  }

  return (
    <div className="main-container">
      <div className="chat-container">
        <InfoBar name={name} socket={socket} />
        <Messages messages={messages} name={name} />
        <div className="form-send">
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button onClick={(event) => sendMessage(event)}>SEND</button>
        </div>
      </div>
    </div>
  );
}
