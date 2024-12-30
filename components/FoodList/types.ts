export type FoodListProps = {
  list: {
    id: string;
    title: string;
    image: string;
    imageType: string;
  }[];
  offset: string;
  number: string;
  totalResults: string;
};
