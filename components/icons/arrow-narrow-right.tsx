import { SvgProps } from ".";

export function ArrowNarrowRight(props: SvgProps) {
  const { width, height, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={width ?? "24"}
      height={height ?? "24"}
      {...rest}
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="#3D3D3D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
