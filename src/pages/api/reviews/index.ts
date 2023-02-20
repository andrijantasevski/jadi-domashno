import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { Review } from "@/pages/cooks/[cookId]";

const REVIEWS_FILE_PATH = path.join(process.cwd(), "data", "reviews.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let reviews: Review[] = [];

  try {
    const reviewsJSON = await fs.readFile(REVIEWS_FILE_PATH, "utf-8");

    reviews = JSON.parse(reviewsJSON);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not find file or parse JSON data." });
    return;
  }

  const { byUser, sortBy, limit, page } = req.query;

  const reviewsFiltered = reviews.filter((review) => {
    const byUserCondition = byUser
      ? review.cook_id === byUser.toString()
      : true;

    const areAllConditionsMet = byUserCondition;

    return areAllConditionsMet;
  });

  const reviewsSorted =
    typeof sortBy === "string"
      ? [...reviewsFiltered].sort((a, b) => {
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
      : reviewsFiltered;

  const reviewsLimited =
    limit && !page ? reviewsSorted.slice(0, Number(limit)) : reviewsSorted;

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);

  const paginatedCooks =
    page && limit ? reviewsSorted.slice(startIndex, endIndex) : reviewsLimited;

  res.status(200).json(paginatedCooks);
}
