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

  const { cookId } = req.query;

  const cook = cooks.find((cook) => cook.id === cookId);

  if (!cook) {
    res.status(404).json({ message: "Cook not found" });
    return;
  }

  res.status(200).json(cook);
}
