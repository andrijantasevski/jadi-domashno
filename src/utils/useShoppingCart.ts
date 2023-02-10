import { create } from "zustand";
import { Meal } from "@/components/common/MenuCard";

export interface ShoppingCartItem extends Meal {
  quantity: number;
  date: string;
  time: string;
}

interface ShoppingCartState {
  shoppingCart: ShoppingCartItem[];
  actions: {
    addToShoppingCart: (newShoppingCartItem: ShoppingCartItem) => void;
    removeFromShoppingCart: (mealId: string) => void;
    updateShoppingCartItem: (meal: string, operation: string) => void;
  };
}

const useShoppingCartStore = create<ShoppingCartState>((set) => ({
  shoppingCart: [],
  actions: {
    addToShoppingCart: (newShoppingCartItem) =>
      set((state) => ({
        shoppingCart: [...state.shoppingCart, newShoppingCartItem],
      })),
    removeFromShoppingCart: (mealId) =>
      set((state) => ({
        shoppingCart: state.shoppingCart.filter(
          (shoppingCartItem) => shoppingCartItem.id !== mealId
        ),
      })),
    updateShoppingCartItem: (mealId, operation) =>
      set((state) => ({
        shoppingCart: state.shoppingCart.map((shoppingCartItem) => {
          if (shoppingCartItem.id === mealId) {
            return operation === "increment"
              ? { ...shoppingCartItem, quantity: shoppingCartItem.quantity + 1 }
              : {
                  ...shoppingCartItem,
                  quantity: shoppingCartItem.quantity - 1,
                };
          }
          return shoppingCartItem;
        }),
      })),
  },
}));

export const useShoppingCart = () =>
  useShoppingCartStore((state) => state.shoppingCart);

export const useShoppingCartActions = () =>
  useShoppingCartStore((state) => state.actions);
