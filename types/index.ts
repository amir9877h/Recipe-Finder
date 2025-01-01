export type Params = {
  params: Promise<{ id: string }>;
};

export type FoodIngredients = {
  id: string;
  name?: string;
  original?: string;
  metric?: { amount?: string; unitLong?: string };
};

export type Food = {
  id: string;
  title: string;
  image: string;
  imageType?: string;
  summary?: string;
  extendedIngredients?: FoodIngredients[];
  sourceUrl?: string;
  spoonacularSourceUrl?: string;
};

export type FoodResponse = {
  results?: Food[] | [];
  offset?: string;
  number?: string;
  totalResults?: string;
};
