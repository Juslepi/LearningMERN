import { useState, useEffect } from "react";
import "./Guestbook.css";

import Form from "./GuestForm";
import GuestList from "./GuestList";

const Guestbook = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/messages/")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="guestbook-container">
      <h3>Guestbook</h3>
      <Form messageList={messages} setMessages={setMessages}/>
      <GuestList messages={messages} />
    </div>
  );
};

export default Guestbook;
