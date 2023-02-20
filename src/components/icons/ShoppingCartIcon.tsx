import { IconProps } from ".";

const ShoppingCartIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        clipPath="url(#prefix__clip0_3213_23819)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23.143.857h-4.286l-1.491 14.829a1.715 1.715 0 01-1.715 1.457h-10.8a1.714 1.714 0 01-1.714-1.166L.857 9.12a1.714 1.714 0 01.24-1.543 1.714 1.714 0 011.474-.72h15.686M5.143 23.143a.857.857 0 100-1.714.857.857 0 000 1.714zM16.286 23.143a.857.857 0 100-1.715.857.857 0 000 1.715z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3213_23819">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShoppingCartIcon;
