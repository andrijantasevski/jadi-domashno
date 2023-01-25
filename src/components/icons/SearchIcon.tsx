import { IconProps } from ".";

const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 25 25"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.714"
        d="M10.291 19.583a9.292 9.292 0 1 0 0-18.583 9.292 9.292 0 0 0 0 18.583Zm12.995 3.703-6.429-6.429"
      />
    </svg>
  );
};

export default SearchIcon;
