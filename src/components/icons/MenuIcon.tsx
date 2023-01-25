import { IconProps } from ".";

const MenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.714"
          d="M.857.857v3.857a4.286 4.286 0 0 0 8.572 0V.857m-4.286 0v22.286m18 0a11.143 11.143 0 0 1 0-22.286"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.714"
          d="M23.143 18a6 6 0 1 1 0-12"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.473 10.572c-.813.473-1.12 1.472-.686 2.23.35.613 1.44 1.917 4.82 1.91a.35.35 0 0 0 .301-.176c1.696-2.946 1.121-4.55.77-5.162-.434-.759-1.446-.99-2.26-.517-.813.474-.995 1.69-.995 1.69s-1.137-.449-1.95.025Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
