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
    incrementItemQuantity: (mealId: string) => void;
    decrementItemQuantity: (mealId: string) => void;
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
    incrementItemQuantity: (mealId) =>
      set((state) => ({
        shoppingCart: state.shoppingCart.map((shoppingCartItem) => {
          if (shoppingCartItem.id === mealId) {
            return {
              ...shoppingCartItem,
              quantity: shoppingCartItem.quantity + 1,
            };
          }
          return shoppingCartItem;
        }),
      })),
    decrementItemQuantity: (mealId) =>
      set((state) => {
        const shoppingCartWithDecrementedItem = state.shoppingCart.map(
          (shoppingCartItem) => {
            if (shoppingCartItem.id === mealId) {
              return {
                ...shoppingCartItem,
                quantity: shoppingCartItem.quantity - 1,
              };
            }
            return shoppingCartItem;
          }
        );

        const shoppingCartWithoutZeroQuantityItems =
          shoppingCartWithDecrementedItem.filter(
            (shoppingCartItem) => shoppingCartItem.quantity > 0
          );

        return {
          shoppingCart: shoppingCartWithoutZeroQuantityItems,
        };
      }),
  },
}));

export const useShoppingCart = () =>
  useShoppingCartStore((state) => state.shoppingCart);

export const useShoppingCartActions = () =>
  useShoppingCartStore((state) => state.actions);
