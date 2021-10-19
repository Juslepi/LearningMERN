import "./Navbar.css";
import { Link } from "react-router-dom";

import { FaBezierCurve } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/facts">
            <div className="link">
              <FaBezierCurve />
              <p>Facts</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/hello">
            <div className="link">
              <FaBezierCurve />
              <p>Hello</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/guestbook">
            <div className="link">
              <FaBezierCurve />
              <p>Guestbook</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
