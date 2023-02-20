import { IconProps } from ".";

const TwitterIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.857 16.114a11.606 11.606 0 01-4.131 2.075.857.857 0 000 1.611c11.863 4.869 19.405-2.657 18.257-11.006l1.92-3.977h-2.229c-2.777-3.411-10.148-3.24-8.931 4.029 0 0-3.943.703-8.983-4.252a.857.857 0 00-1.457.549 9.463 9.463 0 005.554 10.971z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TwitterIcon;
