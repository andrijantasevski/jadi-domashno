import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const navbarLinkStyles = cva(
  ["flex", "flex-col", "items-center", "gap-1", "transition-colors"],
  {
    variants: {
      intent: {
        primary: ["text-gray-700", "hover:text-primary-600"],
        active: ["text-primary-600", "hover:text-primary-600"],
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

interface NavbarLinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navbarLinkStyles> {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
  ariaLabel?: string;
}

const NavbarLinkButton = ({
  intent,
  href,
  children,
  onClick,
  title,
  ariaLabel,
  className,
}: NavbarLinkButtonProps) => {
  if (!href)
    return (
      <button
        title={title}
        aria-label={ariaLabel}
        onClick={onClick}
        className={navbarLinkStyles({ intent, className })}
      >
        {children}
      </button>
    );

  return (
    <Link
      onClick={onClick}
      href={href}
      className={navbarLinkStyles({ intent, className })}
    >
      {children}
    </Link>
  );
};

export default NavbarLinkButton;
