import Image from "next/image";
import styles from "./food-card.module.scss";
// import styles from "./food-card.module.scss";
import { FoodCardProps } from ".";

const CartContent = (props: FoodCardProps) => {
  const { imageUrl, title, description } = props;
  return (
    <>
      <h3 className=" font-bold text-2xl mb-3">{title}</h3>
      <Image src={imageUrl} alt={title} width={300} height={300} />
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
        <button className={styles.button}>More Detail...</button>
      </div>
    </>
  );
};

export default CartContent;
