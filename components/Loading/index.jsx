import styles from "./loading.module.scss";

const LoadingOverlay = ({ message = "Please Wait..." }) => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingGlassContainer}>
        <div className={styles.loadingSpinner}>
          <div className={styles.spinnerRing}></div>
        </div>
        <h3>{message}</h3>
        <button className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
};

export default LoadingOverlay;
