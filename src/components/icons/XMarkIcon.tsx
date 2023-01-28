import { IconProps } from ".";

const XMarkIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3238_23744)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23.143.857L.857 23.143M.857.857l22.286 22.286" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3238_23744">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XMarkIcon;
