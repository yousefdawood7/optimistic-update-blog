"use server";

import products from "@/data/products.json";
import { writeFile } from "fs/promises";

export type ActionType = {
  status?: "success" | "error" | null;
  message?: string;
  data: typeof products;
};

export async function createProduct(
  prevState: ActionType,
  formObject: (typeof products)[number],
): Promise<ActionType> {
  if (!formObject.title || !formObject.description || !formObject.status)
    return {
      ...prevState,
      status: "error",
      message: "there is missing fields",
    };

  // artificial delay
  await new Promise((resolve) => setTimeout(resolve, 2 * 1000));

  products.unshift({ ...formObject });

  await writeFile(
    "./src/data/products.json",
    JSON.stringify(products, null, 2),
  );

  return {
    ...prevState,
    status: "success",
    message: "product created successfully",
    data: [{ ...formObject }, ...prevState.data],
  };
}
