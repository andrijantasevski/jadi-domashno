import { IconProps } from ".";

const ForumIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        clipPath="url(#prefix__clip0_3213_23788)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.286 12a.857.857 0 100-1.714.857.857 0 000 1.714zM12.857 12a.857.857 0 100-1.714.857.857 0 000 1.714zM18.429 12a.857.857 0 100-1.714.857.857 0 000 1.714z" />
        <path d="M7.714 21.429L.857 23.143 2.571 18V2.571A1.714 1.714 0 014.286.857h17.143a1.714 1.714 0 011.714 1.714v17.143a1.714 1.714 0 01-1.715 1.715H7.714z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3213_23788">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ForumIcon;
