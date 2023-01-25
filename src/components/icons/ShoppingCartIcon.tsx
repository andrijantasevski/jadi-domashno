import { IconProps } from ".";

const ShoppingCartIcon = ({ className }: IconProps) => {
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
          d="M23.143.857h-4.286l-1.491 14.829a1.715 1.715 0 0 1-1.715 1.457h-10.8a1.714 1.714 0 0 1-1.714-1.166L.857 9.12a1.714 1.714 0 0 1 .24-1.543 1.714 1.714 0 0 1 1.474-.72h15.686M5.143 23.143a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714Zm11.143 0a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715Z"
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

export default ShoppingCartIcon;
