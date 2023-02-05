import { IconProps } from ".";

const HomeIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3415_23743)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M.857 12L12 .857 23.143 12M4.286 14.571v8.572h15.428V14.57" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3415_23743">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
