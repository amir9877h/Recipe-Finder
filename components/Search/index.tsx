"use client";
import Image from "next/image";
import styles from "./search.module.scss";
import SearchBackgroundImage from "../../assets/images/search background.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    try {
      router.push(`/search/${searchKey}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className={styles.container}>
      <Image
        src={SearchBackgroundImage}
        alt="Food Table"
        className={styles.searchBackgroundImage}
      />
      <div className={styles.content}>
        <input
          type="search"
          placeholder="Enter Food Name"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SearchIcon className={styles.searchIcon} onClick={handleSearch} />
      </div>
    </section>
  );
};

export default Search;
