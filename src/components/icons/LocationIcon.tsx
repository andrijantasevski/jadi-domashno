import { IconProps } from ".";

const LocationIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.714 8.571C19.714 12.84 12 23.143 12 23.143S4.286 12.84 4.286 8.57a7.714 7.714 0 1115.428 0z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.143A2.571 2.571 0 1012 6a2.571 2.571 0 000 5.143z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LocationIcon;
