import { Meal } from "@/components/common/MenuCard";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const MealPage: NextPage = () => {
  return <div>Hi!</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const responseMenu = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/menu?limit=100`
  );
  const menu: Meal[] = await responseMenu.json();

  const paths = menu.map((meal) => ({ params: { mealId: meal.id } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.mealId) {
    const responseMeal = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/menu/${params.mealId}`
    );
    const meal: Meal = await responseMeal.json();
    return {
      props: { meal },
      revalidate: 60,
    };
  }

  return {
    notFound: true,
  };
};

export default MealPage;
