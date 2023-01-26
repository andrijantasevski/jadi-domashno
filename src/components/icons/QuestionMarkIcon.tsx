import { IconProps } from ".";

const QuestionMarkIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 6.5a4.5 4.5 0 114.5 4.5v3"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 18.5a2.25 2.25 0 102.25 2.25 2.28 2.28 0 00-2.25-2.25z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QuestionMarkIcon;
