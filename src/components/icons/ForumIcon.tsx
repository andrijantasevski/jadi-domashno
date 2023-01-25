import { IconProps } from ".";

const ForumIcon = ({ className }: IconProps) => {
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
        d="M7.286 12a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714Zm5.571 0a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714Zm5.572 0a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.714"
        d="M7.714 21.429.857 23.143 2.571 18V2.571A1.714 1.714 0 0 1 4.286.857h17.143a1.714 1.714 0 0 1 1.714 1.714v17.143a1.714 1.714 0 0 1-1.715 1.715H7.714Z"
      />
    </svg>
  );
};

export default ForumIcon;
