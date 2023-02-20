import { IconProps } from ".";

const MenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        clipPath="url(#prefix__clip0_3213_23778)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M.857.857v3.857a4.286 4.286 0 008.572 0V.857M5.143.857v22.286M23.143 23.143a11.143 11.143 0 010-22.286M23.143 18a6 6 0 110-12"
          strokeWidth={1.714}
        />
        <path d="M20.473 10.572c-.813.473-1.12 1.472-.686 2.23.35.613 1.44 1.917 4.82 1.91a.35.35 0 00.301-.176c1.696-2.946 1.121-4.55.77-5.162-.434-.759-1.446-.99-2.26-.517-.813.474-.995 1.69-.995 1.69s-1.137-.449-1.95.025z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3213_23778">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
