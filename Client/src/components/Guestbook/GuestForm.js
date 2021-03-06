import { useState } from "react";

export const GuestForm = ({ setMessages }) => {
  const [state, setState] = useState({
    author: "",
    message: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const newMessage = {
      author: state.author,
      message: state.message,
      date: date,
      time: time,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    };

    fetch("/api/messages/", requestOptions)
      .then((res) => res.json())
    
    // Fetch updated messages
    fetch("/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))

    setState({
      author: "",
      message: "",
    });
  };

  return (
    <div>
      <form className="guest-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="author"
          value={state.author}
          onChange={onChange}
          placeholder="Author"
          required
        />
        <textarea
          type="textarea"
          name="message"
          value={state.message}
          onChange={onChange}
          placeholder="Message"
          required
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default GuestForm;
