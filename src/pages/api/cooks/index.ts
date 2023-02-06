// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { city, rating, cuisines } = req.query;

  const cuisinesArray = cuisines?.toString().split(",");

  const cooksFilePath = path.join(process.cwd(), "data", "cooks.json");

  const cooks = await fs.readFile(cooksFilePath, "utf-8");

  const cooksParsed = JSON.parse(cooks);

  const cooksFiltered = cooksParsed.filter((cook: any) => {
    if (city && rating && cuisines) {
      return (
        cook.city.toLowerCase() === city.toString().toLowerCase() &&
        cook.rating === parseInt(rating as string) &&
        cuisinesArray?.every((cuisine: any) => {
          return cook.cuisines.includes(cuisine);
        })
      );
    }

    if (city) {
      return cook.city.toLowerCase() === city.toString().toLowerCase();
    }

    if (rating) {
      return cook.rating === parseInt(rating as string);
    }

    return true;
  });

  res.status(200).json(cooksFiltered);
}
