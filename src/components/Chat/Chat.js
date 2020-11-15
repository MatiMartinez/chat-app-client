import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const endpoint = "localhost:4000";

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    setName(name);

    socket = io(endpoint);
    socket.emit("join", { name }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endpoint, location.search]);

  return <div>{name}</div>;
}
