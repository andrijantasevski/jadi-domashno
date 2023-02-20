import { IconProps } from ".";

const ChevronUpDownIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0_3309_23743)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.857 8.571l7.697-7.525a.617.617 0 01.892 0l7.697 7.525M3.857 15.429l7.697 7.525a.618.618 0 00.892 0l7.697-7.525" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3309_23743">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronUpDownIcon;
