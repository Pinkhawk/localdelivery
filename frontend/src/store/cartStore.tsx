import { create } from "zustand";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addToCart: (
    productId: number
  ) => void;
}

export const useCartStore =
  create<CartStore>((set) => ({
    items: [],

    addToCart: (productId) =>
      set((state) => ({
        items: [
          ...state.items,
          {
            productId,
            quantity: 1,
          },
        ],
      })),
  }));