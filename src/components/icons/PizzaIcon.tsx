import { IconProps } from ".";

const PizzaIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_3348_23739)"
        stroke="currentColor"
        strokeWidth={1.714}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.714.857l-3 9.429 9.429-3A6.429 6.429 0 0016.714.857z" />
        <path d="M12.857.891L12 .857A11.143 11.143 0 1023.143 12v-.857" />
        <path d="M9.429 17.143a.857.857 0 100-1.714.857.857 0 000 1.714zM6.857 9.429a.857.857 0 100-1.715.857.857 0 000 1.715zM18 14.571a.857.857 0 100-1.714.857.857 0 000 1.714z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_3348_23739">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PizzaIcon;
