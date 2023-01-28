import { IconProps } from ".";

const EmailIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.857 3h22.286v18H.857V3z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M.857 5.169l10.037 8.47a1.715 1.715 0 002.212 0l10.037-8.47"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
