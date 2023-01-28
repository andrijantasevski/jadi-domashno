import { IconProps } from ".";

const CheckMarkIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0_3257_23748)">
        <path
          d="M1.603 15.394l4.68 6.017a1.714 1.714 0 002.674.052L23.888 3.394"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3257_23748">
          <path
            fill="currentColor"
            transform="translate(.746 .737)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckMarkIcon;
