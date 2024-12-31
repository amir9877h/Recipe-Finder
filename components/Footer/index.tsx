// Footer.tsx
import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            We are passionate about bringing you the best recipes from around
            the world.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact Info</h3>
          <ul>
            <li>Email: info@recipefinder.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Cooking Street</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Newsletter</h3>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
