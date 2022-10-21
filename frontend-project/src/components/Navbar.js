import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <h2>Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/recent">Recent</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
