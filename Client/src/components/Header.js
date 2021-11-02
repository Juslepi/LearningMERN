import "./Header.css";

import Hamburger from "hamburger-react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = ({ title, toggleNav }) => {
  return (
    <header className="header">
      <div className="left">
        <div onClick={() => toggleNav()}>
          <Hamburger style={{ cursor: "pointer" }} />
        </div>
        <h1>{title}</h1>
      </div>
      <div className="right">
        <AiOutlineSearch />
        <CgProfile className="button" />
      </div>
    </header>
  );
};

export default Header;
