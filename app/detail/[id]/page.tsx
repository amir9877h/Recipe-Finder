import Image from "next/image";
import styles from "./food-detail.module.scss";
import DOMPurify from "isomorphic-dompurify";
import FavoriteButton from "@/components/FavoriteButton";
import { FoodIngredients, Params } from "@/types";

const getFoodDetail = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_BASE_URL}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        next: {
          revalidate: 1020,
        },
      }
    );
    if (!res.ok) {
      return {};
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

const FoodDetail = async ({ params }: Params) => {
  const foodId = await params;
  const food = await getFoodDetail(foodId.id);

  const cleanContent = DOMPurify.sanitize(food?.summary);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.blur}></div>
        <Image
          src={food.image}
          alt={food.title}
          width={1080}
          height={720}
          className={styles.image}
        />
        <article className={styles.content}>
          <div className="flex justify-between max-sm:flex-col">
            <h1 className="py-3 font-bold text-4xl">{food.title}</h1>
            <FavoriteButton
              food={food}
              className="!flex !items-center max-sm:!justify-center"
            />
          </div>
          <h3 className="py-3 font-bold text-xl">Summary:</h3>
          <div
            className={[styles.summary, "text-justify"].join(" ")}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
          <div className={styles.ingredients}>
            <h3 className="py-3 font-bold text-xl">Ingredients:</h3>
            {food.extendedIngredients.map((item: FoodIngredients) => {
              return (
                <div key={item.id} className="py-1 flex gap-2">
                  <h3 className="text-xl indent-6 font-bold">{item.name}: </h3>
                  <p>{item.original}</p>
                  {item.metric && (
                    <p>
                      amount: {item?.metric?.amount} {item?.metric?.unitLong}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex gap-5 border border-s-orange-400 py-2 px-4">
            Links:
            <a href={food.sourceUrl} target="_blank" rel="nofollow noreferrer">
              Source Link
            </a>
            <a
              href={food.spoonacularSourceUrl}
              target="_blank"
              rel="nofollow noreferrer"
            >
              Spoonacular Link
            </a>
          </div>
        </article>
      </section>
    </>
  );
};

export default FoodDetail;
