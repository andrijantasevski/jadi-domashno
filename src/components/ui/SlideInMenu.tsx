import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isSlideInMenuOpen: boolean;
  closeSlideInMenu: () => void;
  children: React.ReactNode;
}

const SlideInMenu = ({
  isSlideInMenuOpen,
  closeSlideInMenu,
  children,
}: Props) => {
  return (
    <Transition.Root appear show={isSlideInMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeSlideInMenu}>
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
                  <div className="relative flex h-full flex-col gap-4 overflow-y-scroll bg-white p-4 shadow-xl lg:p-6">
                    {children}
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

export default SlideInMenu;
