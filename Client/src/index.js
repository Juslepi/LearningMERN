import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// TODO - Animated navbar expand
// TODO - Context and Dark theme
// TODO - Link component
// TODO - Guestbook
// TODO - MongoDB CRUD
// TODO - REFACTOR SERVER CODE!!! :--D
// TODO - Authentication


// Read more
// Async await
// Promise .then

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
