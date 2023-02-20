import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { Cook } from "@/components/common/CookCard";

const COOKS_FILE_PATH = path.join(process.cwd(), "data", "cooks.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let cooks: Cook[] = [];

  try {
    const cooksJSON = await fs.readFile(COOKS_FILE_PATH, "utf-8");

    cooks = JSON.parse(cooksJSON);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not find file or parse JSON data." });
    return;
  }

  const { city, rating, cuisines, sortBy, limit, page } = req.query;

  const cuisinesArray = cuisines?.toString().split(",");

  const cooksFiltered = cooks.filter((cook) => {
    const cityCondition = city
      ? cook.city.value.toLowerCase() === city.toString().toLowerCase()
      : true;
    const ratingCondition = rating ? cook.rating === Number(rating) : true;
    const cuisinesCondition = cuisinesArray
      ? cuisinesArray?.every((cuisine) => {
          const cuisineValues = cook.cuisines.map((cuisine) => cuisine.value);

          return cuisineValues.includes(cuisine);
        })
      : true;

    const areAllConditionsMet =
      cityCondition && ratingCondition && cuisinesCondition;

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

          return 0;
        })
      : cooksFiltered;

  const cooksLimited =
    limit && !page ? cooksSorted.slice(0, Number(limit)) : cooksSorted;

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);

  const paginatedCooks =
    page && limit ? cooksSorted.slice(startIndex, endIndex) : cooksLimited;

  res.status(200).json(paginatedCooks);
}
