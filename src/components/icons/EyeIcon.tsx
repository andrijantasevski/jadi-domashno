import { IconProps } from ".";

const EyeIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.68 10.851a1.714 1.714 0 010 2.298c-1.8 1.937-5.897 5.708-10.68 5.708-4.783 0-8.88-3.771-10.68-5.708a1.714 1.714 0 010-2.298C3.12 8.914 7.217 5.143 12 5.143c4.783 0 8.88 3.771 10.68 5.708z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.429a3.429 3.429 0 100-6.858 3.429 3.429 0 000 6.858z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
