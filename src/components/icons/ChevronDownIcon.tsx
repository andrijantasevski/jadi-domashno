import { IconProps } from ".";

const ChevronDownIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.857 6.6L11.4 17.143a.824.824 0 001.2 0L23.143 6.6"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
