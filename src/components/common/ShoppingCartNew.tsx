import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, ShoppingBasketIcon, XMarkIcon, PlusIcon } from "../icons";

interface Props {
  isShoppingCartOpen: boolean;
  closeShoppingCart: () => void;
}

const ShoppingCartItem = () => {
  return (
    <div className="flex flex-col gap-3 bg-white py-4 px-6">
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
          <button className="rounded-full py-2.5 px-3.5 text-center text-xl text-gray-600 hover:text-gray-900">
            <MinusIcon className="h-3 w-3" />
          </button>
          <p className="font-medium">1</p>
          <button className="rounded-full py-2.5 px-3.5 text-center text-xl text-gray-600 transition-colors hover:text-gray-900">
            <PlusIcon className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ShoppingCartNew = ({ isShoppingCartOpen, closeShoppingCart }: Props) => {
  const isCartFull = true;

  return (
    <Transition.Root appear show={isShoppingCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeShoppingCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="relative flex h-full flex-col gap-4 overflow-y-scroll bg-gray-100 py-4 shadow-xl lg:py-6">
                    <div className="flex items-center justify-between px-4 lg:px-6">
                      <Dialog.Title as="h3" className="text-xl">
                        Моја кошничка
                      </Dialog.Title>

                      <button
                        type="button"
                        onClick={closeShoppingCart}
                        title="Затвори кошничка"
                        aria-label="Затвори кошничка"
                      >
                        <span className="sr-only">Затвори кошничка</span>
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>

                    {isCartFull ? (
                      <div className="grid grid-cols-1 gap-4">
                        <ShoppingCartItem />

                        <ShoppingCartItem />
                      </div>
                    ) : (
                      <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 p-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 p-2">
                          <ShoppingBasketIcon className="h-8 w-8 text-primary-50" />
                        </div>
                        <p className="text-center text-xl font-semibold">
                          Вашата кошничка е празна
                        </p>
                        <p className="text-center">
                          Додадете производи во кошничката за да продолжите со
                          нарачката.
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCartNew;
