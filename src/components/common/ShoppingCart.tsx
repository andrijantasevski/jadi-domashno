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
                <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-1 p-6 text-left align-middle shadow-xl transition-all xl:p-8">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center gap-1 font-bad-script text-lg text-black xl:text-xl"
                  >
                    <ShoppingCartIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                    Кошничка
                  </Dialog.Title>

                  <table className="w-full table-auto border-collapse border-b border-gray-400">
                    <thead>
                      <tr className="border-b border-gray-400 text-primary-1">
                        <th className="py-4">Производ</th>
                        <th className="py-4">Количина</th>
                        <th className="border-l border-r border-gray-400 px-4">
                          Достава
                        </th>
                        <th className="py-4 px-4">Цена</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="[&>*:nth-child(3)]:border-l [&>*:nth-child(3)]:border-r [&>*:nth-child(3)]:border-gray-400">
                        <td className="py-4">Производ 1</td>
                        <td className="py-4">1</td>
                        <td className="py-4 px-4">Достава 1</td>
                        <td className="py-4 px-4">Цена 1</td>
                      </tr>
                    </tbody>
                  </table>

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
