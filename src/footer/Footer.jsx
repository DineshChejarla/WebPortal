import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.section}>
          <h5>Company</h5>
          <ul>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h5>Support</h5>
          <ul>
            <li>
              <NavLink to="/help">Help Center</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h5>Contact</h5>
          <p>Email: contact@example.com</p>
          <p>Phone: +91 9000111222</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
