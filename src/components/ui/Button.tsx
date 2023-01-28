import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "gap-1",
    "transition-colors",
    "rounded-lg",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary-600", "text-primary-50", "hover:bg-primary-700"],
        secondary: [
          "bg-primary-500",
          "text-primary-50",
          "hover:bg-primary-700",
        ],
      },
      size: {
        small: ["text-sm", "py-1.5", "px-3"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [{ intent: "primary", size: "medium", className: "" }],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  href?: string;
  children: React.ReactNode;
  title?: string;
  ariaLabel?: string;
}

const Button = ({
  href,
  children,
  title,
  ariaLabel,
  className,
  intent,
  size,
}: Props) => {
  if (href) {
    return (
      <Link className={buttonStyles({ className, intent, size })} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonStyles({ className, intent, size })}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
