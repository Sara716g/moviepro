import React from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/ImagesForInitialUse/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown, Import } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  //for blur

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
   window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener on component unmount
  }, []);


  return (
    <header className={ `${styles.header} ${isScrolled ? styles.scrolled : ''}` }>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Logo" />

        {/* navigation links */}

        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv shows">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my list">
            My List
          </Link>
          <Link className={styles.navLink} to="/browse by language">
            Browse by Language
          </Link>
        </nav>

        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            )}
          </div>

          {/*  Notification */}
          <button className={styles.iconButton}>
            {/* Notification button */}
            <Bell size={20} />
            <span className={styles.notificationbadge}> 4 </span>
          </button>

          {/* Profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user icon*/}
              <div className={styles.profileAvater}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />
              {/*  dropdown icon */}
            </button>

            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem} to="/account">
                  Account
                </Link>
                <Link className={styles.profileMenuItem} to="/settings">
                  Settings
                </Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem} to="/logout">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
