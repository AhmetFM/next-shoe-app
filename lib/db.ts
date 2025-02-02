 export type SingleProductType = {
  name: string;
  description: string;
  price: string;
  rating: number;
};
/*
export async function getAllProducts() {
  const products = await fetch("http://localhost:8800/products").then((res) =>
    res.json()
  );
  return products;
}
 */