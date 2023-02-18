import { IconProps } from ".";

const ShareIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 8.571h1.714a.857.857 0 01.857.858v12.857a.857.857 0 01-.857.857H4.286a.857.857 0 01-.857-.857V9.429a.857.857 0 01.857-.858H6M12 12.857v-12M8.571 4.286L12 .857l3.429 3.429"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
