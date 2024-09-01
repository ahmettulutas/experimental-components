import { HTMLAttributes } from "react";

export function SearchIcon(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M10.565 20 12 21.435 7.435 26 6 24.565 10.565 20zM18 6a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
        fill="currentColor"
      />
    </svg>
  );
}
