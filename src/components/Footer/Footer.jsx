import React from "react";
import styles from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <a href="/">Audio Description</a>
            <a href="/">Investor Relations</a>
            <a href="/">Legal Notices</a>
          </div>

          <div className={styles.column}>
            <a href="/">Help Centre</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
          </div>

          <div className={styles.column}>
            <a href="/">Gift Cards</a>
            <a href="/">Terms of Use</a>
            <a href="/">Corporate Information</a>
          </div>

          <div className={styles.column}>
            <a href="/">Media Centre</a>
            <a href="/">Privacy</a>
            <a href="/">Contact Us</a>
          </div>
        </div>

        {/* Copyright */}
        <p className={styles.copyRight}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
