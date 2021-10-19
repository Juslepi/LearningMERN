import React from "react";

import Message from "./GuestMessage";

const GuestList = ({ messages }) => {
  return (
    <div>
      {messages.map(({ author, message, date }, index) => {
        return (
          <Message key={index} author={author} message={message} date={date} />
        );
      })}
    </div>
  );
};

export default GuestList;
