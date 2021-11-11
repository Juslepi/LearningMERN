import Login from "./Login";
import UserPanel from "./UserPanel";

import "./Modal.css";

function User() {
  return <div>{localStorage.getItem("user") ? <UserPanel /> : <Login />}</div>;
}

export default User;
