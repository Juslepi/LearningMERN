import Login from "./Login";
import UserPanel from "./UserPanel";

function User() {
  return <div>{localStorage.getItem("user") ? <UserPanel /> : <Login />}</div>;
}

export default User;
