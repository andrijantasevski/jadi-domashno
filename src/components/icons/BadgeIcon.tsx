import { IconProps } from ".";

const BadgeIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3332_23746)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.777 16.286a7.714 7.714 0 100-15.429 7.714 7.714 0 000 15.429z" />
        <path d="M11.777 12a3.429 3.429 0 100-6.857 3.429 3.429 0 000 6.857zM10.286 16.149L8.777 22.49a.874.874 0 01-.446.566.926.926 0 01-.737 0l-5.691-2.486a.874.874 0 01-.309-1.337L6 13.714M13.714 16.063l1.543 6.428a.858.858 0 00.463.566.873.873 0 00.72 0l5.657-2.486a.856.856 0 00.48-.6.823.823 0 00-.171-.737L17.81 13.39" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3332_23746">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BadgeIcon;
