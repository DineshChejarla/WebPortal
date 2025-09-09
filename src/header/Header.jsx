import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link} end>
          Home
        </NavLink>
        <NavLink to="/weather" className={styles.link}>
          Weather
        </NavLink>
        <NavLink to="/user" className={styles.link}>
          User
        </NavLink>
        <NavLink to="/post" className={styles.link}>
          Post
        </NavLink>
        <NavLink to="/contact" className={styles.link}>
          Contact
        </NavLink>
        <NavLink to="/album" className={styles.link}>
          Album
        </NavLink>

        <div className={styles.dropdown}>
          <span className={styles.dropdownToggle}>Practices ▾</span>
          <div className={styles.dropdownContent}>
            <NavLink to="/counter" className={styles.link}>
              Counter
            </NavLink>
          </div>
        </div>

        <NavLink to="/privacy" className={styles.link}>
          Privacy
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
