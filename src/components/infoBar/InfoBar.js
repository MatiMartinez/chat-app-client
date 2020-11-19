import React from "react";
import { Link } from "react-router-dom";
import "./InfoBar.css";

export default function InfoBar({ name, users }) {
  return (
    <div className="infobar">
      <div className="infobar-users">
        {users.map((user, index) => (
          <p key={index}>{user.name.toUpperCase()}</p>
        ))}
      </div>
      <Link className="btn-exit" to="/">
        EXIT
      </Link>
    </div>
  );
}
