import { IconProps } from ".";

const BurgerMenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.143 3.429H.857M23.143 12H.857M23.143 20.571H.857"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerMenuIcon;
