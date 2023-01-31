import { IconProps } from ".";

const HeartIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 25 25"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3338_23749)">
        <path
          d="M12.11 22.138l-9.463-8.572C-2.496 8.423 5.064-1.45 12.11 6.538c7.046-7.989 14.571 1.92 9.463 7.028l-9.463 8.572z"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3338_23749">
          <path
            fill="currentColor"
            transform="translate(.11 .795)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartIcon;
