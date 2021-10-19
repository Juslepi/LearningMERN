import React from "react";

const GuestMessage = ({ author, message, date }) => {
  return (
    <div className="message-container">
      <div className="message-header">
        <p> {author}</p>
        <p>{date}</p>
      </div>
      <div className="message-content">
        {message}
      </div>
    </div>
  );
};

export default GuestMessage;
