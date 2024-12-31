"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./favorite-button.module.scss";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/lib/features/favorites/favoritesSlice";

const FavoriteButton = ({ food, className }) => {
  const favorites = useAppSelector((state) => state.favorites.value);
  const dispatch = useAppDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (favorites.some((f) => f.id === food.id)) {
      dispatch(removeFromFavorites(food.id));
    } else {
      dispatch(addToFavorites(food));
    }
  };
  return (
    <button
      onClick={handleClick}
      className={[styles.style, className].join(" ")}
    >
      {favorites.some((f) => f.id === food.id)
        ? "Remove from favorites"
        : "Add to favorites"}
    </button>
  );
};

export default FavoriteButton;
