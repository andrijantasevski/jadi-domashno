import { IconProps } from ".";

const YouTubeIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.714 3.429H4.286A3.429 3.429 0 00.857 6.857v10.286a3.429 3.429 0 003.429 3.428h15.428a3.429 3.429 0 003.429-3.428V6.857a3.429 3.429 0 00-3.429-3.428z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.103 15.977v-7.2a.669.669 0 011.028-.583l6.172 3.6a.687.687 0 010 1.183l-6.172 3.6a.685.685 0 01-1.028-.6z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YouTubeIcon;
