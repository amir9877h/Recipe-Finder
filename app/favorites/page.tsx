"use client";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import styles from "./favorites.module.scss";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../lib/features/favorites/favoritesSlice";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FavoriteFoodCard = ({ favorite }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(favorite));
  };
  const handleClick = () => {
    router.push(`/detail/${favorite.id}`);
  };
  return (
    <div
      className="cursor-pointer flex flex-col items-center justify-center card w-96 bg-base-100 shadow-xl"
      onClick={handleClick}
    >
      <figure className="!w-full">
        <Image
          src={favorite.image}
          alt={favorite.title}
          width={500}
          height={300}
          className="w-full object-cover h-full"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title py-3 px-3">{favorite.title}</h2>
        <div className="card-actions justify-end w-full">
          {/* <button
            className="btn btn-primary"
            onClick={handleRemoveFromFavorites}
          >
            Remove
          </button> */}
          <FavoriteButton
            food={favorite}
            className="!w-full !px-0 !rounded-t-none !flex !justify-center !items-center"
          />
        </div>
      </div>
    </div>
  );
};

const FavoritePage = () => {
  // The `state` arg is correctly typed as `RootState` already
  const favorites = useAppSelector((state) => state.favorites.value);

  const dispatch = useAppDispatch();
  return (
    <section className={styles.container}>
      <h1 className="text-3xl font-bold">Favorites</h1>
      <div className="flex flex-wrap justify-center my-5 gap-4 w-full">
        {favorites.map((favorite) => (
          <FavoriteFoodCard key={favorite.id} favorite={favorite} />
        ))}
      </div>
    </section>
  );
};

export default FavoritePage;
