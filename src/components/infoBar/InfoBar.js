import React from "react";
import { Link } from "react-router-dom";
import "./InfoBar.css";

export default function InfoBar({ name }) {
  return (
    <div className="infobar">
      <h4>{name}</h4>
      <Link className="btn-exit" to="/">
        EXIT
      </Link>
    </div>
  );
}
