import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "../../assets/images/Logo.png";

const NavBar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Image src={Logo} width={64} height={64} alt="Recipe Finder Logo" />
        <h1>Recipe Finder</h1>
      </div>
      <div className={styles.navbarLinks}>
        <a href="#">Home</a>
        <a href="#">Favorites</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
