import Image from "next/image";
import styles from "./food-card.module.scss";

type FoodCardType = {
  imageUrl: string;
  title: string;
  description: string;
};

const FoodCard = ({ imageUrl, title, description }: FoodCardType) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <Image src={imageUrl} alt={title} width={300} height={300} />
      <p>{description}</p>
      <button>More Detail...</button>
    </div>
  );
};

export default FoodCard;
