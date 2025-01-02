// components/FilterSearchResult/index.tsx
"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styles from "./filter-search-result.module.scss";

const FilterSearchResult = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { query } = useParams();

  const foodTypes = [
    "All",
    "main course",
    "side dish",
    "appetizer",
    "dessert",
    "breakfast",
    "snack",
    "salad",
    "bread",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "drink",
  ];
  const dietTypes = [
    "All",
    "Ketogenic",
    "Vegetarian",
    "Ovo-Vegetarian",
    "Lacto-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Gluten Free",
    "Keto",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ];
  const sortOptions = [
    "popularity",
    "healthiness",
    "Time",
    "price",
    "alcohol",
    "caffeine",
    "energy",
    "calories",
    "calcium",
  ];

  const currentType = searchParams.get("type") || "";
  const currentDiet = searchParams.get("diet") || "";
  const currentSort = searchParams.get("sort") || "";
  const currentQuery = query || "";

  //   console.log(currentType, currentDiet, currentSort, currentQuery);

  const handleFilterClick = (filterType: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "All") {
      params.delete(filterType.toLowerCase());
    } else {
      params.set(filterType.toLowerCase(), value);
    }

    const query = params.get("query") || currentQuery;

    router.push(`/search/${query}?${params.toString()}`);
  };

  return (
    <div className={styles.filterContainer}>
      <h3 className="font-bold text-3xl mb-2">Filter By:</h3>
      <div className={styles.filterSection}>
        <h4>Type:</h4>
        <FilterOptions
          options={foodTypes}
          currentOption={currentType}
          handleClick={handleFilterClick}
          optionsType="type"
        />
      </div>

      <div className={styles.filterSection}>
        <h4>Diet:</h4>
        <FilterOptions
          options={dietTypes}
          currentOption={currentDiet}
          handleClick={handleFilterClick}
          optionsType="diet"
        />
      </div>

      <div className={styles.filterSection}>
        <h4>Sort By:</h4>
        <FilterOptions
          options={sortOptions}
          currentOption={currentSort}
          handleClick={handleFilterClick}
          optionsType="sort"
        />
      </div>
    </div>
  );
};

export default FilterSearchResult;

const FilterOptions = ({
  options,
  currentOption,
  handleClick,
  optionsType,
}: {
  options: string[];
  currentOption: string;
  handleClick: (filterType: string, value: string) => void;
  optionsType: string;
}) => {
  return (
    <div className={styles.filterOptions}>
      {options.map((type) => (
        <button
          key={type}
          className={`${styles.filterButton} ${
            currentOption === (type === "All" ? "" : type) ? styles.active : ""
          }`}
          onClick={() => handleClick(optionsType, type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};
