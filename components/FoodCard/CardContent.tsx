import Image from "next/image";
// import styles from "./food-card.module.scss";
import { FoodCardProps } from ".";

const CartContent = (props: FoodCardProps) => {
  const { imageUrl, title, description } = props;
  return (
    <>
      <h3 className=" font-bold text-2xl mb-3">{title}</h3>
      <Image src={imageUrl} alt={title} width={300} height={300} />
      <div className="flex justify-between w-full py-5">
        <p>{description}</p>
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded max-sm:text-sm">
          More Detail...
        </button>
      </div>
    </>
  );
};

export default CartContent;
