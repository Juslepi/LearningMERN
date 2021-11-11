import { useState } from "react";
import "./Modal.css";

const ContentHello = () => {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
    loggedInAs: "",
    token: "none",
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
      .then((data) => {
        if (data.token) {
          localStorage.setItem("user", JSON.stringify(data));
          setLoggedIn({
            loggedIn: true,
            loggedInAs: data.username,
            token: data.token,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      return { "x-access-token": user.token };
    } else return {};
  };

  const test = () => {
    const requestOptions = {
      method: "POST",
      headers: authHeader(),
    };
    fetch("/api/users/testing", requestOptions)
      .then((res) => res.json())
      .then((json) => console.log(json));
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
      <div className="logged-in">
        {loggedIn.loggedIn
          ? "Logged in as " + loggedIn.loggedInAs
          : "Not logged in"}
      </div>
    </div>
  );
};

export default ContentHello;
