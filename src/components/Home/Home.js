import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="main-container">
      <div className="home-container">
        <h2>Join Chat Room</h2>
        <div className="form-join">
          <input
            type="text"
            className="input-name"
            placeholder="Nickname"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="btn-join">
            <Link
              onClick={(e) => (!name ? e.preventDefault() : null)}
              to={`/chat?name=${name}`}
            >
              JOIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
