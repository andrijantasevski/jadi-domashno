import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const navbarLinkStyles = cva(
  ["flex", "flex-col", "items-center", "gap-1", "transform-colors"],
  {
    variants: {
      intent: {
        primary: ["text-gray-700", "hover:text-gray-900"],
        active: ["text-primary-2", "hover:text-primary-1"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        className: "",
      },
    ],
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface NavbarLinkProps extends VariantProps<typeof navbarLinkStyles> {
  href: string;
  children: React.ReactNode;
}

const NavbarLink = ({ intent, href, children }: NavbarLinkProps) => {
  return (
    <Link href={href} className={navbarLinkStyles({ intent })}>
      {children}
    </Link>
  );
};

export default NavbarLink;
