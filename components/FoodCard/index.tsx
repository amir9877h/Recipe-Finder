import RouteToDetail from "./RouteToDetail";
import CartContent from "./CardContent";

export type FoodCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
};

const FoodCard = (props: FoodCardProps) => {
  return (
    <RouteToDetail id={props.id}>
      <CartContent {...props} />
    </RouteToDetail>
  );
};

export default FoodCard;
