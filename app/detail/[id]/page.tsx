import Image from "next/image";
import styles from "./food-detail.module.scss";
import DOMPurify from "isomorphic-dompurify";
import FavoriteButton from "@/components/FavoriteButton";

type FoodDetailProps = {
  id: string;
};

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

const FoodDetail = async ({ params }) => {
  const foodId = await params;
  const food = await getFoodDetail(foodId.id);

  const cleanContent = DOMPurify.sanitize(food?.summary);

  return (
    <>
      <div className={styles.blur}></div>
      <section className={styles.container}>
        <Image
          src={food.image}
          alt={food.title}
          width={1080}
          height={720}
          className={styles.image}
        />
        <article className={styles.content}>
          <div className="flex justify-between">
            <h1 className="py-3 font-bold text-4xl">{food.title}</h1>
            <FavoriteButton food={food} />
          </div>
          <h3 className="py-3 font-bold text-xl">Summary:</h3>
          <div
            className={[styles.summary, "text-justify"].join(" ")}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
          <div className={styles.ingredients}>
            <h3 className="py-3 font-bold text-xl">Ingredients:</h3>
            {food.extendedIngredients.map((item) => {
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
        </article>
      </section>
    </>
  );
};

export default FoodDetail;
