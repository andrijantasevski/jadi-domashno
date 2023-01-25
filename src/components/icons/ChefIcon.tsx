import { IconProps } from ".";

const ChefIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.714"
          d="M4.286 23.143h15.428m3.309-17.314a4.268 4.268 0 0 0-7.012-2.16 4.269 4.269 0 0 0-8.022 0 4.269 4.269 0 0 0-7.012 2.16 4.303 4.303 0 0 0 3.309 5.228v6.086A1.714 1.714 0 0 0 6 18.857h12a1.714 1.714 0 0 0 1.714-1.714v-6.086a4.302 4.302 0 0 0 3.309-5.228ZM4.286 14.571h15.428"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChefIcon;
