import { getItem, postItem, Server_URL } from "../Constans";
import { Image, Product, ProductDrugStore } from "../types";
export type createProductDto = {
  name: string;
  ingredient: string;
  howPack: string;
  typeUse: string;
  stored: number;
  unit: string;
  price: number;
  dosage: string;
  destination: string;
  typeProductId: number;
};
const reshapeImages = (images: Image[], productTitle: string) => {
  if (images.length <= 0) return [];
  return images.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)?.[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    };
  });
};
const reshapeProduct = (product: ProductDrugStore): Product | undefined => {
  if (!product) return undefined;
  const { images, ...rest } = product;

  return {
    ...rest,
    handle: product.name.replaceAll(" ", "-"),
    images: reshapeImages(images, product.name),
  };
};
const reshapedProducts = (products: ProductDrugStore[]) => {
  const reshapedProducts = [];
  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};
export async function getProducts(): Promise<Product[] | undefined> {
  const endpoint = `${Server_URL}/product`;
  const result = await getItem({ endpoint });
  return reshapedProducts(result);
}
export async function getProduct(handle: string): Promise<Product | undefined> {
  const endpoint = `${Server_URL}/product/${handle}`;
  const result = await getItem({ endpoint });
  return reshapeProduct(result);
}
export async function createProduct(
  data: createProductDto,
): Promise<ProductDrugStore | undefined> {
  const endpoint = `${Server_URL}/product`;
  const result = await postItem({ endpoint, data: JSON.stringify(data) });
  return reshapeProduct(result);
}
export async function updateProduct(
  id: number,
  data: createProductDto,
): Promise<ProductDrugStore | undefined> {
  const endpoint = `${Server_URL}/product/${id}`;
  const result = await postItem({ endpoint, data: JSON.stringify(data) });
  return reshapeProduct(result);
}
