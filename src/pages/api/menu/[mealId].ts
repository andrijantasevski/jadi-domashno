import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { Meal } from "@/components/common/MenuCard";

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

  const { mealId } = req.query;

  const meal = meals.find((meal) => meal.id === mealId);

  if (!meal) {
    res.status(404).json({ message: "Meal not found" });
    return;
  }

  res.status(200).json(meal);
}
