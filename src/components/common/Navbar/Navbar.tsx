import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Bars3Icon,
  ChefIcon,
  ForumIcon,
  HowItFunctionsIcon,
  MenuIcon,
  OfferIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserAccountIcon,
} from "@components/icons";
import NavbarLinkButton from "@components/common/Navbar/NavbarLinkButton";
import ShoppingCart from "@components/common/ShoppingCart";

export default function Navbar() {
  const { asPath } = useRouter();
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  const openShoppingCart = () => setIsShoppingCartOpen(true);

  const closeShoppingCart = () => setIsShoppingCartOpen(false);

  return (
    <nav className="bg-gray-1 py-3">
      <div className="mx-auto flex w-11/12 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              className="hidden xl:block"
              src="/assets/logo-jadi-domashno.svg"
              alt="Јади домашно"
              width="128"
              height="70"
            />

            <Image
              className="xl:hidden"
              src="/assets/logo-jadi-domashno-bez-tekst.png"
              alt="Јади домашно"
              width="50"
              height="50"
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            <NavbarLinkButton
              intent={asPath === "/about" ? "active" : "primary"}
              href="/about"
            >
              <HowItFunctionsIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Како функционира</p>
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={asPath === "/cooks" ? "active" : "primary"}
              href="/cooks"
            >
              <ChefIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Готвачи</p>
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={asPath === "/offers" ? "active" : "primary"}
              href="/offers"
            >
              <OfferIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Побарај понуда</p>
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={asPath === "/menu" ? "active" : "primary"}
              href="/menu"
            >
              <MenuIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Мени</p>
            </NavbarLinkButton>

            <NavbarLinkButton
              intent={asPath === "/forum" ? "active" : "primary"}
              href="/forum"
            >
              <ForumIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Форум</p>
            </NavbarLinkButton>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <label
            htmlFor="search-navbar"
            className="hidden items-center gap-2 rounded-full border border-gray-400 bg-background-main py-2 px-3 xl:flex"
          >
            <SearchIcon className="h-4 w-4" />
            <input
              id="search-navbar"
              className="bg-transparent focus:outline-none"
              type="search"
              placeholder="Пребарај"
            />
          </label>

          <NavbarLinkButton
            intent="primary"
            ariaLabel="Пребарај"
            title="Пребарај"
            className="xl:hidden"
          >
            <SearchIcon className="h-6 w-6 text-inherit hover:text-inherit" />
          </NavbarLinkButton>

          <NavbarLinkButton
            intent={asPath === "/account" ? "active" : "primary"}
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
            <ShoppingCartIcon className="h-6 w-6 text-inherit hover:text-inherit" />
            <p className="hidden xl:block">Кошничка</p>
            <p className="bg-primary absolute -top-3 left-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary-1 p-1 text-xs text-white">
              1
            </p>
          </NavbarLinkButton>

          <NavbarLinkButton
            className="xl:hidden"
            ariaLabel="Мени"
            title="Отвори мени"
          >
            <Bars3Icon className="h-6 w-6 text-inherit hover:text-inherit" />
          </NavbarLinkButton>
        </div>
      </div>

      <ShoppingCart
        isShoppingCartOpen={isShoppingCartOpen}
        closeShoppingCart={closeShoppingCart}
      />
    </nav>
  );
}
