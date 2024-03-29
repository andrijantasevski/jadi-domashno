import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingBasketIcon, XMarkIcon } from "../../icons";
import ShoppingCartItem from "./ShoppingCartItem";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { useShoppingCart } from "@/utils/useShoppingCart";

interface Props {
  isShoppingCartOpen: boolean;
  closeShoppingCart: () => void;
}

const ShoppingCart = ({ isShoppingCartOpen, closeShoppingCart }: Props) => {
  const shoppingCart = useShoppingCart();

  const numberOfItemsInShoppingCart =
    shoppingCart.length === 1
      ? "1 производ"
      : `${shoppingCart.length} производи`;
  const areItemsInCart = shoppingCart.length > 0;

  const totalWithoutDelivery = shoppingCart.reduce(
    (sum, shoppingCartItem) =>
      shoppingCartItem.price * shoppingCartItem.quantity + sum,
    0
  );

  const delivery = 100;

  const totalWithDelivery = totalWithoutDelivery + delivery;

  return (
    <Transition.Root appear show={isShoppingCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeShoppingCart}>
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
                  <div className="relative flex h-full flex-col gap-4 overflow-y-auto bg-gray-100 pt-4 shadow-xl lg:pt-6">
                    <div className="flex items-center justify-between px-4 lg:px-6">
                      <Dialog.Title as="h3" className="text-xl">
                        Моја кошничка
                      </Dialog.Title>

                      <IconButton
                        onClick={closeShoppingCart}
                        title="Затвори кошничка"
                        ariaLabel="Затвори кошничка"
                      >
                        <span className="sr-only">Затвори кошничка</span>
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>

                    {areItemsInCart ? (
                      <div className="flex h-full flex-col justify-between gap-4">
                        <div className="grid grid-cols-1 gap-4">
                          {shoppingCart.map((shoppingCartItem) => (
                            <ShoppingCartItem
                              key={shoppingCartItem.id}
                              shoppingCartItem={shoppingCartItem}
                            />
                          ))}
                        </div>

                        <div className="grid grid-cols-1 gap-2 bg-white py-4 px-4 text-sm font-medium shadow-sm lg:px-6">
                          <div className="flex items-center justify-between">
                            <p>{numberOfItemsInShoppingCart}</p>

                            <p>{totalWithoutDelivery} ден.</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <p>Достава</p>

                            <p>{delivery} ден.</p>
                          </div>

                          <hr className="border border-gray-200" />

                          <div className="flex items-center justify-between text-base">
                            <p>Вкупно</p>

                            <p>{totalWithDelivery} ден.</p>
                          </div>

                          <Button
                            href="/checkout"
                            title="Оди на каса"
                            aria-label="Оди на каса"
                          >
                            Продолжете кон наплата
                          </Button>
                        </div>
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

export default ShoppingCart;
