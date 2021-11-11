const UserPanel = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };

  return (
    <div>
      <p>Username: {user.username}</p>
      <br />
      <p>User ID: {user.user_id}</p>
      <br />
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default UserPanel;
