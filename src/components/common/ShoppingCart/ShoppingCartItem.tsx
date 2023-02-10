import Image from "next/image";
import { MinusIcon, PlusIcon, XMarkIcon } from "@/components/icons";
import IconButton from "@/components/ui/IconButton";
import { ShoppingCartItem } from "@/utils/useShoppingCart";
import { useShoppingCartActions } from "@/utils/useShoppingCart";

interface Props {
  shoppingCartItem: ShoppingCartItem;
}

const ShoppingCartItem = ({ shoppingCartItem }: Props) => {
  const { image_url, title, price, quantity, id } = shoppingCartItem;
  const { removeFromShoppingCart } = useShoppingCartActions();

  const calculatedPrice = price * quantity;
  return (
    <div className="flex flex-col gap-3 bg-white py-4 px-4 shadow-sm lg:px-6">
      <div className="flex gap-4">
        <Image
          src={image_url}
          alt="Product"
          width="120"
          height="120"
          className="rounded-lg"
        />

        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <p className="font-medium">{title}</p>

            <IconButton
              title="Избриши од кошничката"
              ariaLabel="Избриши од кошничката"
              onClick={() => removeFromShoppingCart(id)}
            >
              <span className="sr-only">Избриши од кошничката</span>
              <XMarkIcon className="h-3 w-3" />
            </IconButton>
          </div>

          <p className="text-sm text-gray-700">Припремено од Александар</p>
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="flex items-center justify-between">
        <p className="font-medium">{calculatedPrice} ден.</p>

        <div className="flex items-center justify-center gap-1 rounded-full bg-gray-100">
          <IconButton
            ariaLabel="Избриши еден производ"
            title="Избриши еден производ"
            className="rounded-full py-2.5 px-3.5 text-center text-xl"
          >
            <span className="sr-only">Избриши еден производ</span>
            <MinusIcon className="h-3 w-3" />
          </IconButton>
          <p className="font-medium">1</p>
          <IconButton
            ariaLabel="Додади еден производ"
            title="Додади еден производ"
            className="rounded-full py-2.5 px-3.5 text-center text-xl"
          >
            <span className="sr-only">Додади еден производ</span>
            <PlusIcon className="h-3 w-3" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
