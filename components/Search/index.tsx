"use client";
import Image from "next/image";
import styles from "./search.module.scss";
import SearchBackgroundImage from "../../assets/images/search background.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Food, FoodResponse } from "@/types";

const handleSearch = (
  router: AppRouterInstance | string[],
  searchKey: string
) => {
  try {
    router.push(`/search/${searchKey}`);
  } catch (error) {
    console.log(error);
  }
};

const Search = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const router = useRouter();

  // const handleSearch = () => {
  //   try {
  //     router.push(`/search/${searchKey}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(router, searchKey);
    }
  };

  return (
    <section className={styles.container}>
      <Image
        src={SearchBackgroundImage}
        alt="Food Table"
        className={styles.searchBackgroundImage}
        priority={true}
      />
      <div className={styles.content}>
        <input
          className={[styles.searchInput, searchKey != "" && styles.focus].join(
            " "
          )}
          type="search"
          placeholder="Enter Food Name"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <SearchIcon
          className={styles.searchIcon}
          onClick={() => handleSearch(router, searchKey)}
        />
        {searchKey && <SearchResultBox search={searchKey} />}
      </div>
    </section>
  );
};

export default Search;

const SearchResultBox = ({ search }: { search: string }) => {
  const [result, setResult] = useState<FoodResponse>({ results: [] });
  const [activateClass, setActivateClass] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getData = async (key: string) => {
      if (key === "") return {};
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_SEARCH_BASE_URL
          }/recipes/complexSearch?query=${key}&offset=${1}&number=${5}&apiKey=${
            process.env.NEXT_PUBLIC_API_KEY
          }`,
          {
            next: {
              revalidate: 1020,
            },
          }
        );
        if (!response.ok) return {};
        const data = await response.json();

        return data;
      } catch (error) {
        console.log(error);
        return {};
      }
    };

    // Add debounce to prevent too many requests
    const timeoutId = setTimeout(async () => {
      const data = await getData(search);
      setResult(data);
      setActivateClass(
        data?.results?.length > 0 || search != "" ? true : false
      );
    }, 500); // Wait 500ms after last keystroke before fetching

    // Cleanup timeout on component unmount or when search changes
    return () => clearTimeout(timeoutId);
  }, [search]); // Only run effect when search term changes

  // console.log(activateClass);
  return (
    <div className={[styles.searchResultBox, styles.active].join(" ")}>
      {"results" in result &&
      Array.isArray(result.results) &&
      result?.results?.length > 0 ? (
        <>
          {" "}
          <div className={styles.searchResultBoxContent}>
            {activateClass &&
              result?.results?.map((item: Food) => (
                <SearchResultCard key={item.id} food={item} />
              ))}
          </div>
          <button
            className={styles.seeAll}
            onClick={() => handleSearch(router, search)}
          >
            see all
          </button>
        </>
      ) : (
        <div className={[styles.searchResultBoxContent, "h-100"].join(" ")}>
          <p className="">
            Loading data please wait{" "}
            <span className={styles.simpleLoading}>...</span>
          </p>
        </div>
      )}
    </div>
  );
};

const SearchResultCard = ({ food }: { food: Food }) => {
  const router = useRouter();
  return (
    <div
      className={styles.searchResultCard}
      onClick={() => {
        router.push(`/detail/${food.id}`);
        // console.log("clicked");

        // console.log(food.id);
      }}
    >
      <div className={styles.searchResultBoxContentImage}>
        <Image
          src={food.image}
          alt={food.title}
          width={64}
          height={64}
          // objectFit="cover"
        />
      </div>
      <div className={styles.searchResultBoxContentText}>
        <p>{food.title}</p>
      </div>
    </div>
  );
};
