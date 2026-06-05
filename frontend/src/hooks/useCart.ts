// hooks/useCart.ts

import { useCartStore } from "@/store/cartStore";

export function useCart() {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);

  return {
    items,
    addToCart,
  };
}