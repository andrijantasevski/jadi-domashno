import Image from "next/image";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const navbarLinkStyles = cva(["font-semibold", "border", "rounded"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      class: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface NavbarLinkProps extends VariantProps<typeof navbarLinkStyles> {
  href: string;
  children: React.ReactNode;
}

function NavbarLink({ href, children }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 text-gray-500"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
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

          <div className="flex items-baseline gap-5">
            <NavbarLink href="/about">
              {/* <Image
                src="/assets/icons/kako-funkcionira.svg"
                alt="Како функционира"
                width="32"
                height="32"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#000"
                  d="M16.08 17.545a6.085 6.085 0 1 0 0-12.17 6.085 6.085 0 0 0 0 12.17Zm4.057-6.085a4.056 4.056 0 1 1-8.113 0 4.056 4.056 0 0 1 8.113 0Zm8.113 16.226c0 2.028-2.028 2.028-2.028 2.028H5.939s-2.029 0-2.029-2.028 2.029-8.113 12.17-8.113c10.142 0 12.17 6.085 12.17 8.113Zm-2.028-.008c-.002-.5-.313-2-1.688-3.375-1.322-1.323-3.811-2.702-8.454-2.702-4.645 0-7.131 1.38-8.454 2.702-1.375 1.375-1.683 2.876-1.687 3.375h20.283Z"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width=".933"
                  d="M1.52 14.951c-.84.396-1.223 1.347-.857 2.123.296.627 1.264 1.99 4.592 2.26a.35.35 0 0 0 .311-.148c1.909-2.74 1.473-4.353 1.177-4.98-.367-.776-1.344-1.085-2.183-.689-.84.396-1.118 1.57-1.118 1.57s-1.083-.532-1.922-.136Z"
                />
                <path
                  fill="#000"
                  d="M26.873 6.981c.574-.572 1.423-.766 2.02-1.248.63-.504.71-1.755-.572-2.117-.84-.237-1.428.273-1.749.743l-1.136-.896c.647-.944 1.859-1.569 3.255-1.175 1.167.33 1.82 1.08 2.042 1.85.188.661.095 1.771-.663 2.403-.84.699-1.486.802-1.952 1.273-.188.19-.279.323-.483 1.047l-1.436-.405c.103-.383.219-1.022.674-1.475Zm.467 3.912a1.028 1.028 0 0 1-1.27.698 1.028 1.028 0 0 1-.717-1.26 1.028 1.028 0 0 1 1.27-.698c.546.154.87.721.717 1.26Z"
                />
              </svg>
              <p>Како функционира</p>
            </NavbarLink>

            <NavbarLink href="/about">
              {/* <Image
                src="/assets/icons/gotvachi.svg"
                alt="Готвачи"
                width="32"
                height="32"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  stroke="#000"
                  stroke-width="2"
                  d="M25.36 23.8H6.623m9.368 0V16m4.014 7.8v-5.2m-8.029 5.2v-5.2M25.359 29V15.129a4.04 4.04 0 0 0 1.343-.793c.389-.348.704-.767.926-1.233a3.812 3.812 0 0 0-.7-4.292 4.015 4.015 0 0 0-1.272-.895 4.114 4.114 0 0 0-3.08-.106C22.08 5.436 19.284 3 15.992 3s-6.09 2.436-6.584 4.81a4.125 4.125 0 0 0-3.072.116 3.948 3.948 0 0 0-2.087 2.191 3.794 3.794 0 0 0 .12 2.984 3.973 3.973 0 0 0 2.255 2.028V29H25.36Z"
                />
              </svg>
              <p>Готвачи</p>
            </NavbarLink>

            <NavbarLink href="/about">
              <Image
                src="/assets/icons/pobaraj-ponuda.svg"
                alt="Побарај понуда"
                width="32"
                height="32"
              />
              <p>Побарај понуда</p>
            </NavbarLink>

            <NavbarLink href="/about">
              <Image
                src="/assets/icons/meni.svg"
                alt="Мени"
                width="32"
                height="32"
              />
              <p>Мени</p>
            </NavbarLink>

            <NavbarLink href="/about">
              <Image
                src="/assets/icons/forum.svg"
                alt="Форум"
                width="32"
                height="32"
              />
              <p>Форум</p>
            </NavbarLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
