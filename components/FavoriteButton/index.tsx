"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./favorite-button.module.scss";
import { addToFavorites } from "@/lib/features/favorites/favoritesSlice";

const FavoriteButton = ({ food, className }) => {
  const favorites = useAppSelector((state) => state.favorites.value);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addToFavorites(food));
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
