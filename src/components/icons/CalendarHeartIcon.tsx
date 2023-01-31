import { IconProps } from ".";

const CalendarHeartIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3348_23752)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.571 4.286A1.714 1.714 0 00.857 6v15.429a1.714 1.714 0 001.714 1.714h18.857a1.714 1.714 0 001.715-1.714V6a1.714 1.714 0 00-1.715-1.714H18M6 .857v6.857M18 .857v6.857M6 4.286h8.571" />
        <path d="M12 12.857c1.714-3.428 5.143-1.714 5.143.857 0 3.429-5.143 5.143-5.143 5.143s-5.143-1.714-5.143-5.143c0-2.571 3.429-4.285 5.143-.857z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3348_23752">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarHeartIcon;
