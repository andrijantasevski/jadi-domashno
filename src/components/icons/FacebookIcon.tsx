import { IconProps } from ".";

const FacebookIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.714 6.857c0-1.714.857-1.714 1.715-1.714h1.028A1.286 1.286 0 0017.76 3.84V2.229A1.302 1.302 0 0016.44.926L14.006.89a4.903 4.903 0 00-5.057 5.486v2.486H7.594a1.303 1.303 0 00-1.303 1.303v1.611a1.303 1.303 0 001.303 1.303H8.95v9.206a.857.857 0 00.857.857h3.103a.857.857 0 00.805-.857V13.08h1.509a1.303 1.303 0 001.303-1.303v-1.611a1.303 1.303 0 00-1.303-1.303h-1.509V6.857z"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FacebookIcon;
