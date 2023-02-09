import { IconProps } from ".";

const BurgerIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3462_23745)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.857.857h10.286a6 6 0 016 6 1.714 1.714 0 01-1.714 1.714H2.57A1.714 1.714 0 01.857 6.857a6 6 0 016-6zM.857 12.857h22.286M22.286 17.143H12l-2.571 2.571-5.143-2.571H1.714A.857.857 0 00.857 18 5.143 5.143 0 006 23.143h12A5.143 5.143 0 0023.143 18a.857.857 0 00-.857-.857z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3462_23745">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BurgerIcon;
