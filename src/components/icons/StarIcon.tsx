import { IconProps } from ".";

const StarIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.84 1.869l2.726 5.502a.874.874 0 00.703.515l6.017.891a.926.926 0 01.514 1.594l-4.337 4.303a.909.909 0 00-.274.823l1.045 6.052a.943.943 0 01-1.371.994l-5.417-2.863a1.011 1.011 0 00-.892 0l-5.417 2.863a.944.944 0 01-1.371-.994l1.045-6.12a.908.908 0 00-.274-.823L1.15 10.37a.925.925 0 01.565-1.594l6.017-.891a.874.874 0 00.703-.515L11.16 1.87a.926.926 0 011.68 0z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
