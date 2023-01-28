import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cva, VariantProps } from "class-variance-authority";

const linkStyles = cva(["transition-colors"], {
  variants: {
    intent: {
      primary: ["text-gray-900", "hover:text-primary-600"],
      light: ["text-gray-50", "hover:text-primary-600"],
    },
    underlined: {
      true: "underline",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface Props extends NextLinkProps, VariantProps<typeof linkStyles> {
  children: React.ReactNode;
}

const Link = ({ href, children, intent, underlined, ...props }: Props) => {
  return (
    <NextLink
      className={linkStyles({ intent, underlined })}
      {...props}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
