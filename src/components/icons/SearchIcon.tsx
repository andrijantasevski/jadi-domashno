import { IconProps } from ".";

const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        clipPath="url(#prefix__clip0_3224_23739)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.149 19.44a9.291 9.291 0 100-18.583 9.291 9.291 0 000 18.583zM23.143 23.143l-6.429-6.429" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3224_23739">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
