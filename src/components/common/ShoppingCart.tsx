import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon, ShoppingCartIcon } from "../icons";

interface Props {
  isShoppingCartOpen: boolean;
  closeShoppingCart: () => void;
}

const ShoppingCart = ({ isShoppingCartOpen, closeShoppingCart }: Props) => {
  return (
    <>
      <Transition appear show={isShoppingCartOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeShoppingCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center gap-1 font-bad-script text-lg text-black"
                  >
                    <ShoppingCartIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                    Кошничка
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Got it, thanks!
                    </button>
                  </div>

                  <button
                    onClick={closeShoppingCart}
                    className="absolute top-4 right-4"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-4 w-4 text-gray-1 hover:text-gray-500" />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShoppingCart;
