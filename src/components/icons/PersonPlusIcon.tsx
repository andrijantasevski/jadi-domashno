import { IconProps } from ".";

const PersonPlusIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3348_23746)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.571 8.571a3.857 3.857 0 100-7.714 3.857 3.857 0 000 7.714zM7.714 21.429H.857v-2.572A7.731 7.731 0 0112 12M18 12.857v10.286M12.857 18h10.286" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3348_23746">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PersonPlusIcon;
