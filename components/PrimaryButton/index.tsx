"use client";
import styles from "./primary-button.module.scss";

const PrimaryButton = ({ children }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <button onClick={handleClick} className={styles.style}>{children}</button>;
};

export default PrimaryButton;
