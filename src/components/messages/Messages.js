import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import "./Messages.css";

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="chat-content">
      {messages.map((message, index) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
