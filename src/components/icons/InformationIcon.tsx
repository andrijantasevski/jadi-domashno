import { IconProps } from ".";

const InformationIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3620_23739)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 23.143c6.154 0 11.143-4.989 11.143-11.143C23.143 5.846 18.154.857 12 .857 5.846.857.857 5.846.857 12c0 6.154 4.989 11.143 11.143 11.143zM12 12v6" />
        <path d="M12 8.571a.857.857 0 100-1.714.857.857 0 000 1.714z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3620_23739">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InformationIcon;
