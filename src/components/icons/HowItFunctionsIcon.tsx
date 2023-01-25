import { IconProps } from ".";

const HowItFunctionsIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 24 24"
    >
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.714"
          d="M11.594 12.143a5.571 5.571 0 1 0 0-11.143 5.571 5.571 0 0 0 0 11.143Zm10.595 11.143a11.126 11.126 0 0 0-21.189 0h21.189Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.81 3.206a1.303 1.303 0 1 1 .712 1.7l-.329.804"
        />
        <path
          fill="currentColor"
          d="M20.7 6.916a.652.652 0 1 0 .356.85.66.66 0 0 0-.356-.85Z"
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

export default HowItFunctionsIcon;
