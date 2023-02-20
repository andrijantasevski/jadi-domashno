import { IconProps } from ".";

const FoodBowlIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3338_23751)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 23.143A11.143 11.143 0 0023.143 12H.857A11.143 11.143 0 0012 23.143zM12.857 8.571L18 .857M15.429 9.429l6-5.143" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3338_23751">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FoodBowlIcon;
