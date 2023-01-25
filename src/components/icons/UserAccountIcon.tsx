import { IconProps } from ".";

const UserAccountIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3227_23743)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M11.594 12.143a5.571 5.571 0 100-11.143 5.571 5.571 0 000 11.143zM22.189 23.286a11.126 11.126 0 00-21.189 0h21.189z"
          strokeWidth={1.714}
        />
        <path d="M21.176 3.432c-.394-.238-.894-.137-1.119.227-.18.294-.486 1.067.306 2.516a.172.172 0 00.146.089c1.662.04 2.216-.582 2.398-.876.224-.363.087-.852-.306-1.09-.394-.24-.959-.034-.959-.034s-.073-.593-.466-.832z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3227_23743">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserAccountIcon;
