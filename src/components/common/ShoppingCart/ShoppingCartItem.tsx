import Image from "next/image";
import { MinusIcon, PlusIcon, XMarkIcon } from "@/components/icons";

const ShoppingCartItem = () => {
  return (
    <div className="flex flex-col gap-3 bg-white py-4 px-4 shadow-sm lg:px-6">
      <div className="flex gap-4">
        <Image
          src="/assets/example-image.png"
          alt="Product"
          width="80"
          height="80"
        />

        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <p className="font-medium">Гравче тавче</p>

            <button
              type="button"
              title="Избриши од кошничката"
              aria-label="Избриши од кошничката"
              className="text-gray-900 transition-colors hover:text-primary-600"
            >
              <span className="sr-only">Избриши од кошничката</span>
              <XMarkIcon className="h-3 w-3" />
            </button>
          </div>

          <p className="text-sm text-gray-700">Припремено од Александар</p>
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="flex items-center justify-between">
        <p className="font-medium">150 ден.</p>

        <div className="flex items-center justify-center gap-1 rounded-full bg-gray-100">
          <button
            aria-label="Избриши еден производ"
            title="Избриши еден производ"
            className="rounded-full py-2.5 px-3.5 text-center text-xl text-gray-600 transition-colors hover:text-primary-600"
          >
            <span className="sr-only">Избриши еден производ</span>
            <MinusIcon className="h-3 w-3" />
          </button>
          <p className="font-medium">1</p>
          <button
            aria-label="Избриши еден производ"
            title="Додади еден производ"
            className="rounded-full py-2.5 px-3.5 text-center text-xl text-gray-600 transition-colors hover:text-primary-600"
          >
            <span className="sr-only">Избриши еден производ</span>
            <PlusIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
