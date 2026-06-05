// types/product.ts
import { api } from "./api";

export async function getProducts() {
  const { data } = await api.get("/products");
  return data;
}

export async function getProduct(slug: string) {
  const { data } = await api.get(`/products/${slug}`);
  return data;
}