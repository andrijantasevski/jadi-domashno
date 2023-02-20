import { IconProps } from ".";

const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3273_23739)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.68 1.653V23.94M1.536 12.728h22.286" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3273_23739">
          <path
            fill="currentColor"
            transform="translate(.68 .728)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
