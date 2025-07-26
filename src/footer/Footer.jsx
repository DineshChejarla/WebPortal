import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer__section">
          <h5>Company</h5>
          <ul>
            <li>
              <NavLink to="void(0)">About Us</NavLink>
            </li>
            <li>
              <NavLink href="void(0)">Careers</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h5>Support</h5>
          <ul>
            <li>
              <NavLink href="void(0)">Help Center</NavLink>
            </li>
            <li>
              <NavLink href="void(0)">FAQ</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h5>Contact</h5>
          <p>Email: contact@example.com</p>
          <p>Phone: +91 9000111222</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
