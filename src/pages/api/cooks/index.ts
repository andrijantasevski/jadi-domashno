// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

// DUPLICATE INTERFACE
export interface Cook {
  id: string;
  dateCreated: Date;
  first_name: "Самуил";
  last_name: "Стефановска";
  cuisines: string[];
  city: string;
  image_url: string;
  rating: number;
}

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

  const { city, rating, cuisines, sortBy } = req.query;

  const cuisinesArray = cuisines?.toString().split(",");

  const cooksFiltered = cooks.filter((cook: any) => {
    const cityCondition = city ? cook.city === city : true;
    const ratingCondition = rating ? cook.rating === Number(rating) : true;
    const cuisinesCondition = cuisinesArray
      ? cuisinesArray?.every((cuisine) => cook.cuisines.includes(cuisine))
      : true;

    const areAllConditionsMet =
      cityCondition && ratingCondition && cuisinesCondition;

    return areAllConditionsMet;
  });

  const cooksSorted =
    typeof sortBy === "string"
      ? [...cooksFiltered].sort((a, b) => {
          if (sortBy === "highestRating") {
            return b.rating - a.rating;
          }

          if (sortBy === "lowestRating") {
            return a.rating - b.rating;
          }

          if (sortBy === "newest") {
            return (
              new Date(b.dateCreated).valueOf() -
              new Date(a.dateCreated).valueOf()
            );
          }

          return 0;
        })
      : cooksFiltered;

  res.status(200).json(cooksSorted);
}
