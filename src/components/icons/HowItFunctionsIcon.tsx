import { IconProps } from ".";

const HowItFunctionsIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#prefix__clip0_3213_23774)">
        <path
          d="M11.594 12.143a5.571 5.571 0 100-11.143 5.571 5.571 0 000 11.143zM22.189 23.286a11.126 11.126 0 00-21.189 0h21.189z"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.81 3.206a1.303 1.303 0 11.712 1.7l-.329.804"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7 6.916a.652.652 0 10.356.85.66.66 0 00-.356-.85z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3213_23774">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HowItFunctionsIcon;
