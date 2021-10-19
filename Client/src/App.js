import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AnimalFacts from "./components/AnimalFacts";
import ContentHello from "./components/ContentHello";
import Guestbook from "./components/Guestbook/Guestbook";

import "./App.css";

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <div className="menu">
        <Header title="Title here" toggleNav={toggleNav} />
        {expanded && <Navbar />}
      </div>
      <div className="content">
        <Switch>
          <Route path="/facts">
            <AnimalFacts />
          </Route>
          <Route path="/hello">
            <ContentHello />
          </Route>
          <Route path="/guestbook">
            <Guestbook />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
