import { useState } from "react";
import "./Modal.css";

const ContentHello = () => {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

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
          setError("Logged in");
          window.location.reload(false);
        } else {
          setError("Invalid Credentials");
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
        <input type="text" name="username" placeholder="username" onChange={onChange} />
        <input type="password" name="password" placeholder="password" onChange={onChange} />
        <input type="submit" value="LOGIN" />
      </form>
      <button onClick={test}>response</button>
      <div
        className="error-message"
        style={{ textAlign: "center", color: "red", marginTop: "1em" }}
      >
        {error}
      </div>
    </div>
  );
};

export default ContentHello;
