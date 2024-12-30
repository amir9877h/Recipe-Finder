import Image from "next/image";
import styles from "./search.module.scss";
import SearchBackgroundImage from "../../assets/images/search background.jpg";

const Search = () => {
  return (
    <section className={styles.container}>
      <Image
        src={SearchBackgroundImage}
        alt="Food Table"
        className={styles.searchBackgroundImage}
      />
      <div className={styles.content}>
        <input type="search" placeholder="Enter Food Name" />
      </div>
    </section>
  );
};

export default Search;
