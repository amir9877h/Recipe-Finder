import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "../../assets/images/Logo.png";
import NavLink from "../NavLink";

const NavBar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Image src={Logo} width={64} height={64} alt="Recipe Finder Logo" />
        <h1>Recipe Finder</h1>
      </div>
      <div className={styles.navbarLinks}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
