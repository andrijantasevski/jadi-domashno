import { IconProps } from ".";

const QuestionMarkCircleIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0_3263_23756)">
        <path
          d="M12 23.143c6.154 0 11.143-4.989 11.143-11.143C23.143 5.846 18.154.857 12 .857 5.846.857.857 5.846.857 12c0 6.154 4.989 11.143 11.143 11.143z"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.429 9.429A2.571 2.571 0 1112 12v1.714"
          stroke="currentColor"
          strokeWidth={1.714}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.286a1.286 1.286 0 101.286 1.285A1.303 1.303 0 0012 16.286z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3263_23756">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QuestionMarkCircleIcon;
