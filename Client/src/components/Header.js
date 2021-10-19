import "./Header.css";

import Hamburger from "hamburger-react";
import ReactDropdown from "react-dropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = ({ title, toggleNav }) => {
  const options = ["one", "two", "three"];

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
        <input type="text" name="" id="" />
        <ReactDropdown options={options} value="Dropdown menu" />
        <CgProfile />
      </div>
    </header>
  );
};

export default Header;
