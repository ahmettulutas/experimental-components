import { HTMLAttributes } from "react";

export function DividerVerticalIcon(props: HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1"
      height="40"
      viewBox="0 0 1 40"
      fill="none"
    >
      <rect width="1" height="40" fill="#E6E5E9" />
      <rect opacity="0.3" width="1" height="40" fill="#E6E5E9" />
    </svg>
  );
}
