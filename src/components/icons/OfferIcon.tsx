import { IconProps } from ".";

const OfferIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5.143a11.143 11.143 0 0111.143 11.143A1.714 1.714 0 0121.428 18H2.572a1.714 1.714 0 01-1.714-1.714A11.143 11.143 0 0112 5.143zM12 5.143V2.57M.857 21.429h22.286"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OfferIcon;
