import EmptyState from "@/components/EmptyState";
import styles from "./search-page.module.scss";
import FoodList from "@/components/FoodList";
import Pagination from "@/components/Pagination";

const getFoodResults = async (query: string, page: number = 1) => {
  try {
    const offset = (page - 1) * 10; // Assuming pageSize is 10
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SEARCH_BASE_URL
      }/recipes/complexSearch?query=${query}&offset=${offset}&number=${10}&apiKey=${
        process.env.NEXT_PUBLIC_API_KEY
      }`,
      {
        next: {
          revalidate: 1020,
        },
      }
    );
    if (!response.ok)
      return {
        results: [],
        offset: 0,
        number: 10,
        totalResults: 0,
      };
    const data = await response.json();
    //   {
    //     "results": [
    //         {
    //             "id": 642583,
    //             "title": "Farfalle with Peas, Ham and Cream",
    //             "image": "https://img.spoonacular.com/recipes/642583-312x231.jpg",
    //             "imageType": "jpg"
    //         }
    //     ],
    //     "offset": 0,
    //     "number": 10,
    //     "totalResults": 285
    // }
    return data;
  } catch (error) {
    console.log(error);
    return {
      results: [],
      offset: 0,
      number: 10,
      totalResults: 0,
    };
  }
};

const Query = async ({
  params,
  searchParams,
}: {
  params: Promise<{ query: string }>;
  searchParams: Promise<{ page?: string }>;
}) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const pageSize = 10;
  const data = await getFoodResults(resolvedParams.query, currentPage);
  const safeData = {
    results: data?.results || [],
    offset: data?.offset || 0,
    number: data?.number || pageSize,
    totalResults: data?.totalResults || 0,
  };

  return safeData.results.length > 0 ? (
    <>
      <h1 className="text-center font-bold text-4xl max-md:text-2xl my-3">
        Search Results for &quot;
        <span className="text-orange-500">{resolvedParams.query}</span>&quot;
        <span className={styles.count}>({safeData.totalResults} results)</span>
      </h1>
      <FoodList
        list={safeData.results}
        offset={safeData.offset}
        number={safeData.number}
        totalResults={safeData.totalResults}
      />
      <Pagination
        totalResults={safeData.totalResults}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </>
  ) : (
    <EmptyState
      title="No Recipes Found"
      message={`No Results for ${resolvedParams.query}.\nTry adjusting your search criteria or create a new recipe.`}
    />
  );
};

export default Query;
