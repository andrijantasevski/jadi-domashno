import { IconProps } from ".";

const UserAccountIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3262_23752)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12A5.571 5.571 0 1012 .857 5.571 5.571 0 0012 12zM22.594 23.143a11.125 11.125 0 00-21.188 0h21.188z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3262_23752">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserAccountIcon;
