import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CheckMarkIcon, ShoppingBasketIcon, XMarkIcon } from "../icons";

interface Props {
  isShoppingCartOpen: boolean;
  closeShoppingCart: () => void;
}

const ShoppingCartItem = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <Image
          src="/assets/example-image.png"
          alt="Product"
          width="100"
          height="100"
        />

        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-medium">Гравче тавче</p>

            <p>150 ден.</p>
          </div>

          <div className="flex w-full items-center justify-between">
            <p>Достава</p>

            {false ? (
              <div className="bg-primary-1 flex h-7 w-7 items-center justify-center rounded-full p-2">
                <CheckMarkIcon className="h-4 w-4 text-white" />
              </div>
            ) : (
              <div className="bg-primary-1 flex h-7 w-7 items-center justify-center rounded-full p-2">
                <XMarkIcon className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingCartNew = ({ isShoppingCartOpen, closeShoppingCart }: Props) => {
  const isCartFull = false;

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
                  <div className="relative flex h-full flex-col gap-4 overflow-y-scroll bg-gray-50 p-4 shadow-xl lg:p-6">
                    <div className="flex items-center justify-between">
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
                      <div>
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
