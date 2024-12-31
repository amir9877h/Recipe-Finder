"use client";
import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "../../assets/images/Logo.png";
import NavLink from "../NavLink";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Image src={Logo} width={64} height={64} alt="Recipe Finder Logo" />
        <h1>Recipe Finder</h1>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ""}`}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
