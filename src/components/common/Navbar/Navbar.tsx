import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChefIcon,
  ForumIcon,
  HowItFunctionsIcon,
  MenuIcon,
  OfferIcon,
} from "@components/icons";
import NavbarLink from "@components/common/Navbar/NavbarLink";

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <nav className="bg-gray-1 py-3">
      <div className="mx-auto w-11/12">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/assets/logo-jadi-domashno.svg"
              alt="Јади домашно"
              width="128"
              height="70"
            />
          </Link>

          <div className="flex items-center gap-5">
            <NavbarLink
              intent={asPath === "/about" ? "active" : "primary"}
              href="/about"
            >
              <HowItFunctionsIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Како функционира</p>
            </NavbarLink>

            <NavbarLink
              intent={asPath === "/cooks" ? "active" : "primary"}
              href="/cooks"
            >
              <ChefIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Готвачи</p>
            </NavbarLink>

            <NavbarLink
              intent={asPath === "/offers" ? "active" : "primary"}
              href="/offers"
            >
              <OfferIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Побарај понуда</p>
            </NavbarLink>

            <NavbarLink
              intent={asPath === "/menu" ? "active" : "primary"}
              href="/menu"
            >
              <MenuIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Мени</p>
            </NavbarLink>

            <NavbarLink
              intent={asPath === "/forum" ? "active" : "primary"}
              href="/forum"
            >
              <ForumIcon className="h-6 w-6 text-inherit hover:text-inherit" />
              <p>Форум</p>
            </NavbarLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
