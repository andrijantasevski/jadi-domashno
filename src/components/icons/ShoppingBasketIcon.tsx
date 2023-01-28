import { IconProps } from ".";

const ShoppingBasketIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3247_23739)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.189 10.286H2.81a1.715 1.715 0 00-1.714 1.937L2.35 21.65a1.714 1.714 0 001.714 1.492h15.84a1.715 1.715 0 001.714-1.492l1.252-9.428a1.715 1.715 0 00-1.68-1.937zM7.714 14.571v4.286M12 14.571v4.286M16.286 14.571v4.286" />
        <path d="M16.251 2.64a4.783 4.783 0 013.943 4.217l.377 3.429M3.429 10.286l.377-3.429a4.783 4.783 0 013.943-4.183" />
        <path d="M16.286 3a2.143 2.143 0 01-2.143 2.143H9.857a2.143 2.143 0 010-4.286h4.286A2.143 2.143 0 0116.286 3z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3247_23739">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShoppingBasketIcon;
