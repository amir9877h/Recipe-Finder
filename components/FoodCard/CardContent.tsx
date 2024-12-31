import Image from "next/image";
import styles from "./food-card.module.scss";
import { FoodCardProps } from ".";

const CartContent = (props: FoodCardProps) => {
  const { imageUrl, title, description } = props;
  return (
    <>
      <h3>{title}</h3>
      <Image src={imageUrl} alt={title} width={300} height={300} />
      <p>{description}</p>
      <button>More Detail...</button>
    </>
  );
};

export default CartContent;
