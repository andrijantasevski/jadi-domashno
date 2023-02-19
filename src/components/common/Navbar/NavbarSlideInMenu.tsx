import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FacebookIcon,
  TwitterIcon,
  XMarkIcon,
  YouTubeIcon,
} from "@/components/icons";
import Link from "next/link";
import IconButton from "@/components/ui/IconButton";

interface Props {
  isSlideInMenuOpen: boolean;
  closeSlideInMenu: () => void;
}

interface NavbarSlideInMenuItemProps {
  children: React.ReactNode;
  href: string;
  closeSlideInMenu: () => void;
}

const NavbarSlideInMenuItem = ({
  children,
  href,
  closeSlideInMenu,
}: NavbarSlideInMenuItemProps) => {
  return (
    <li>
      <Link
        onClick={closeSlideInMenu}
        className="flex items-center gap-2 px-6 py-2 transition-colors hover:bg-primary-600 hover:text-primary-50"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const NavbarSlideInMenu = ({ isSlideInMenuOpen, closeSlideInMenu }: Props) => {
  return (
    <Transition.Root appear show={isSlideInMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeSlideInMenu}>
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
                    <div className="flex justify-end px-4 lg:px-6">
                      <IconButton
                        onClick={closeSlideInMenu}
                        title="Затвори мени"
                        ariaLabel="Затвори мени"
                      >
                        <span className="sr-only">Затвори мени</span>
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>

                    <ul className="grid grid-cols-1">
                      <NavbarSlideInMenuItem
                        closeSlideInMenu={closeSlideInMenu}
                        href="/how-it-functions/foodies"
                      >
                        Како функционира Јади домашно?
                      </NavbarSlideInMenuItem>

                      <NavbarSlideInMenuItem
                        closeSlideInMenu={closeSlideInMenu}
                        href="/cooks"
                      >
                        Готвачи
                      </NavbarSlideInMenuItem>

                      <NavbarSlideInMenuItem
                        closeSlideInMenu={closeSlideInMenu}
                        href="/offers"
                      >
                        Побарајте понуда
                      </NavbarSlideInMenuItem>

                      <NavbarSlideInMenuItem
                        closeSlideInMenu={closeSlideInMenu}
                        href="/menu"
                      >
                        Мени
                      </NavbarSlideInMenuItem>

                      <NavbarSlideInMenuItem
                        closeSlideInMenu={closeSlideInMenu}
                        href="/forum"
                      >
                        Форум
                      </NavbarSlideInMenuItem>
                    </ul>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-center gap-4 p-4">
                    <Link href="/">
                      <YouTubeIcon className="h-6 w-6 text-gray-900 transition-colors hover:text-primary-600" />
                    </Link>

                    <Link href="/">
                      <TwitterIcon className="h-6 w-6 text-gray-900 transition-colors hover:text-primary-600" />
                    </Link>

                    <Link href="/">
                      <FacebookIcon className="h-6 w-6 text-gray-900 transition-colors hover:text-primary-600" />
                    </Link>
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

export default NavbarSlideInMenu;
