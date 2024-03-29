import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const iconButtonStyles = cva(["transition-colors"], {
  variants: {
    intent: {
      primary: ["text-gray-900", "hover:text-primary-600"],
      secondary: ["text-primary-50", "hover:text-primary-400"],
    },
  },
  compoundVariants: [{ intent: "primary", className: "" }],
  defaultVariants: {
    intent: "primary",
  },
});

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonStyles> {
  children: React.ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({
  href,
  children,
  ariaLabel,
  title,
  onClick,
  intent,
  className,
  ...props
}: Props) => {
  if (href) {
    return (
      <Link href={href} className={iconButtonStyles({ intent, className })}>
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      type="button"
      aria-label={ariaLabel}
      title={title}
      className={iconButtonStyles({ intent, className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
