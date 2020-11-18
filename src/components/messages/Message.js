import React from "react";

export default function Message({ message: { user, text }, name }) {
  console.log(text);
  let currentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) currentUser = true;

  return currentUser ? (
    <div className="message margin-r">
      <h2 className="message-user message-current-user">Me</h2>
      <div className="message-box message-box-current-user">
        <p className="message-text">{text}</p>
        <p className="message-time"></p>
      </div>
    </div>
  ) : (
    <div className="message margin-l">
      <h2 className="message-user">{user.toUpperCase()}</h2>
      <div className="message-box">
        <p className="message-text">{text}</p>
        <p className="message-time"></p>
      </div>
    </div>
  );
}
