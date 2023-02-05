import { IconProps } from ".";

const FilterIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_3412_23739)">
        <path
          d="M23.143.857H.857A11.16 11.16 0 009.43 11.71v11.434l5.143-3.429V11.71A11.16 11.16 0 0023.142.857z"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3412_23739">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FilterIcon;
