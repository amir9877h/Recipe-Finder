import FoodCard from "../FoodCard";
import styles from "./food-list.module.scss";
import { FoodListProps } from "./types";

const FoodList = ({ list = [] }: FoodListProps) => {
  return (
    <section className={styles.container}>
      {list.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            imageUrl={food.image}
            title={food.title}
            description={food.title}
          />
        );
      })}
    </section>
  );
};

export default FoodList;
