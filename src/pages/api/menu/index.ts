// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

interface LabelValue {
  label: string;
  value: string;
}

interface Meal {
  id: string;
  date_created: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
  cuisine: LabelValue;
  availability: LabelValue;
  price: number;
  delivery_type: LabelValue;
  day_available: number;
  allergens: LabelValue[];
  cook_id: string;
  cook_avatar: string;
  city: LabelValue;
}

const MEALS_FILE_PATH = path.join(process.cwd(), "data", "meals.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let meals: Meal[] = [];

  try {
    const mealsJSON = await fs.readFile(MEALS_FILE_PATH, "utf-8");

    meals = JSON.parse(mealsJSON);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not find file or parse JSON data." });
    return;
  }

  const {
    city,
    rating,
    cuisines,
    sortBy,
    availability,
    delivery,
    price,
    allergens,
    currentDay,
  } = req.query;

  const cuisinesArray = cuisines?.toString().split(",");
  const allergensArray = allergens?.toString().split(",");

  const cooksFiltered = meals.filter((meal) => {
    const currentDayCondition = currentDay
      ? Number(currentDay) === meal.day_available
      : true;
    const cuisinesCondition = cuisinesArray
      ? cuisinesArray?.every((cuisine) => {
          return meal.cuisine.value === cuisine;
        })
      : true;
    const cityCondition = city ? meal.city.value === city : true;
    const availabilityCondition = availability
      ? meal.availability.value === availability
      : true;
    const priceCondition = price ? meal.price <= Number(price) : true;
    const allergensCondition = allergens
      ? allergensArray?.every((allergen) => {
          const allergenValues = meal.allergens.map(
            (allergen) => allergen.value
          );

          return allergenValues.includes(allergen);
        })
      : true;
    const ratingCondition = rating ? meal.rating === Number(rating) : true;
    const deliveryCondition = delivery
      ? meal.delivery_type.value === delivery
      : true;

    const areAllConditionsMet =
      cityCondition &&
      ratingCondition &&
      availabilityCondition &&
      deliveryCondition &&
      priceCondition &&
      allergensCondition &&
      currentDayCondition &&
      cuisinesCondition;

    return areAllConditionsMet;
  });

  const cooksSorted =
    typeof sortBy === "string"
      ? [...cooksFiltered].sort((a, b) => {
          if (sortBy === "highestRated") {
            return b.rating - a.rating;
          }

          if (sortBy === "lowestRated") {
            return a.rating - b.rating;
          }

          if (sortBy === "newest") {
            return (
              new Date(b.date_created).valueOf() -
              new Date(a.date_created).valueOf()
            );
          }

          if (sortBy === "oldest") {
            return (
              new Date(a.date_created).valueOf() -
              new Date(b.date_created).valueOf()
            );
          }

          if (sortBy === "highestPrice") {
            return b.price - a.price;
          }

          if (sortBy === "lowestPrice") {
            return a.price - b.price;
          }

          return 0;
        })
      : cooksFiltered;

  res.status(200).json(cooksSorted);
}
