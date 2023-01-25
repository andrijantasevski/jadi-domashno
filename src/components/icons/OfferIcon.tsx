import { IconProps } from ".";

const OfferIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.714"
        d="M12 5.143a11.143 11.143 0 0 1 11.143 11.143A1.714 1.714 0 0 1 21.428 18H2.572a1.714 1.714 0 0 1-1.714-1.714A11.143 11.143 0 0 1 12 5.143Zm0 0V2.57M.857 21.429h22.286"
      />
    </svg>
  );
};

export default OfferIcon;
