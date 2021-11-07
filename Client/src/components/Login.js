import { useState } from "react";
import "./Modal.css";

const ContentHello = () => {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    setloginCredentials({
      ...loginCredentials,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    };
    fetch("/api/users/login", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const test = () => {
    fetch("/api/users/testing")
      .then((res) => console.log(res))
      .then((data) => console.log(data));
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3>Login</h3>
      </div>
      <form className="modal-form" onSubmit={onSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={onChange} />
        <label>password</label>
        <input type="password" name="password" onChange={onChange} />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={test}>response</button>
    </div>
  );
};

export default ContentHello;
