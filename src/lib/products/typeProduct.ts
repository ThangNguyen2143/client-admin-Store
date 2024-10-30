import { getItem, Server_URL } from "../Constans";
import { TypeProduct } from "../types";

export async function getTypeProducts(): Promise<TypeProduct[] | undefined> {
  const endpoint = `${Server_URL}/type-product`;
  const result = await getItem({ endpoint });
  return result;
}
