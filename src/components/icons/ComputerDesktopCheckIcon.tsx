import { IconProps } from ".";

const ComputerDesktopCheckIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.286 3.429H1.714a.857.857 0 00-.857.857V18c0 .473.384.857.857.857h20.572a.857.857 0 00.857-.857V4.286a.857.857 0 00-.857-.857zM10.286 18.857L8.57 23.143M13.714 18.857l1.714 4.286M6.857 23.143h10.286"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.714 12l3.429 2.571 6-6.857"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ComputerDesktopCheckIcon;
