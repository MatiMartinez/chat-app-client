import React from "react";

import ReactEmoji from "react-emoji";

export default function Message({ message: { user, text }, name }) {
  let currentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) currentUser = true;

  return currentUser ? (
    <div className="message margin-r">
      <h2 className="message-user message-current-user">
        {trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1)}
      </h2>
      <div className="message-box message-box-current-user">
        <p className="message-text">{ReactEmoji.emojify(text)}</p>
        <p className="message-time"></p>
      </div>
    </div>
  ) : (
    <div className="message margin-l">
      <h2 className="message-user">
        {user.charAt(0).toUpperCase() + user.slice(1)}
      </h2>
      <div className="message-box">
        <p className="message-text">{ReactEmoji.emojify(text)}</p>
        <p className="message-time"></p>
      </div>
    </div>
  );
}
