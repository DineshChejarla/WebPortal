import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink>Logo</NavLink>
      </div>
      <div className="header__nav">
        <NavLink to="/" className="header__link">
          Home
        </NavLink>
        <NavLink to="/weather" className="header__link">
          Weather
        </NavLink>
        <NavLink to="/user" className="header__link">
          User
        </NavLink>
        <NavLink to="/posts" className="header__link">
          Post
        </NavLink>

        <NavLink className="header__link">Contact</NavLink>
        <NavLink className="header__link">Gallery</NavLink>
        <NavLink className="header__link">Privacy</NavLink>
      </div>
    </header>
  );
};

export default Header;
