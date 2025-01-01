"use client";
import EmptyState from "@/components/EmptyState";
import { useAppSelector } from "../../lib/hooks";
import styles from "./favorites.module.scss";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Favorite {
  id: string;
  image: string;
  title: string;
  // Add any other properties that your favorite object has
}

const FavoriteFoodCard = ({ favorite }: { favorite: Favorite }) => {
  const router = useRouter();
  const handleClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    router.push(`/detail/${favorite.id}`);
  };
  return (
    <div
      className="cursor-pointer flex flex-col items-center justify-between card w-96 bg-base-100 shadow-xl"
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
  return (
    <section className={styles.container}>
      {favorites.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold">Favorites</h1>
          <div className="flex flex-wrap justify-center my-5 gap-4 w-full">
            {favorites.map((favorite) => (
              <FavoriteFoodCard key={favorite.id} favorite={favorite} />
            ))}
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default FavoritePage;
