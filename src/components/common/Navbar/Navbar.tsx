import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  ChefIcon,
  ForumIcon,
  MenuIcon,
  OfferIcon,
  SearchIcon,
  UserAccountIcon,
  ShoppingBasketIcon,
} from "@components/icons";
import NavbarLinkButton from "@components/common/Navbar/NavbarLinkButton";
import BannerTop from "./BannerTop";
const ShoppingCart = dynamic(() => import("../ShoppingCart/ShoppingCart"));
const NavbarSlideInMenu = dynamic(() => import("./NavbarSlideInMenu"));
const SearchModal = dynamic(
  () => import("@components/common/Navbar/SearchModal")
);
import { useShoppingCart } from "@/utils/useShoppingCart";

export default function Navbar() {
  const { pathname } = useRouter();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [isSlideInMenuOpen, setIsSlideInMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const shoppingCart = useShoppingCart();
  const numberOfItemsInShoppingCart = shoppingCart.length;
  const areItemsInCart = numberOfItemsInShoppingCart > 0;

  const openShoppingCart = () => setIsShoppingCartOpen(true);

  const closeShoppingCart = () => setIsShoppingCartOpen(false);

  const openSlideInMenu = () => setIsSlideInMenuOpen(true);

  const closeSlideInMenu = () => setIsSlideInMenuOpen(false);

  const openSearch = () => setIsSearchOpen(true);

  const closeSearch = () => setIsSearchOpen(false);

  return (
    <header className="z-20">
      <BannerTop />
      <nav className="bg-gray-50 py-3 shadow-md">
        <div className="mx-auto flex w-11/12 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/">
              <div className="flex items-center gap-2 xl:flex-col xl:gap-0">
                <Image
                  priority
                  src="/assets/logo-jadi-domashno-bez-tekst.svg"
                  alt="Јади домашно"
                  width="40"
                  height="40"
                />
                <p className="text-lg font-bold text-primary-600">
                  Јади домашно
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-5 xl:flex">
              <NavbarLinkButton
                intent={pathname === "/cooks" ? "active" : "primary"}
                href="/cooks"
              >
                <ChefIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                <p>Готвачи</p>
              </NavbarLinkButton>

              <NavbarLinkButton
                intent={pathname === "/offers" ? "active" : "primary"}
                href="/offers"
              >
                <OfferIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                <p>Побарај понуда</p>
              </NavbarLinkButton>

              <NavbarLinkButton
                intent={pathname === "/menu" ? "active" : "primary"}
                href="/menu"
              >
                <MenuIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                <p>Мени</p>
              </NavbarLinkButton>

              <NavbarLinkButton
                intent={pathname === "/forum" ? "active" : "primary"}
                href="/forum"
              >
                <ForumIcon className="h-6 w-6 text-inherit hover:text-inherit" />
                <p>Форум</p>
              </NavbarLinkButton>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={openSearch}
              className="hidden w-60 items-center gap-2 rounded-lg border border-gray-400 py-2 px-3 transition-colors hover:border-primary-600 xl:flex"
            >
              <SearchIcon className="h-4 w-4" />
              <span className="text-gray-500">Пребарајте</span>
            </button>

            <NavbarLinkButton
              intent="primary"
              ariaLabel="Пребарајте"
              title="Пребарајте"
              className="xl:hidden"
              onClick={openSearch}
            >
              <SearchIcon className="h-6 w-6 text-inherit hover:text-inherit" />
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={pathname === "/account" ? "active" : "primary"}
              href="/account"
              className="hidden xl:flex"
            >
              <UserAccountIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p className="hidden xl:block">Мој профил</p>
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={isShoppingCartOpen ? "active" : "primary"}
              ariaLabel="Кошничка"
              title="Кошничка"
              onClick={openShoppingCart}
              className="relative"
            >
              <ShoppingBasketIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p className="hidden xl:block">Кошничка</p>
              {areItemsInCart && (
                <div className="absolute left-4 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-600 text-xs text-primary-50 xl:left-10">
                  {numberOfItemsInShoppingCart}
                </div>
              )}
            </NavbarLinkButton>

            <NavbarLinkButton
              className="xl:hidden"
              ariaLabel="Мени"
              title={isSlideInMenuOpen ? "Затвори мени" : "Отвори мени"}
              onClick={openSlideInMenu}
              intent={isSlideInMenuOpen ? "active" : "primary"}
            >
              <Bars3Icon className="h-6 w-6 text-inherit hover:text-inherit" />
            </NavbarLinkButton>
          </div>
        </div>

        <SearchModal isModalOpen={isSearchOpen} closeModal={closeSearch} />

        <ShoppingCart
          isShoppingCartOpen={isShoppingCartOpen}
          closeShoppingCart={closeShoppingCart}
        />

        <NavbarSlideInMenu
          closeSlideInMenu={closeSlideInMenu}
          isSlideInMenuOpen={isSlideInMenuOpen}
        />
      </nav>
    </header>
  );
}
