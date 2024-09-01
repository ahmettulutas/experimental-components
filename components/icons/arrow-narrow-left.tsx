import { SvgProps } from ".";

export function ArrowNarrowLeft(props: SvgProps) {
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
        d="M20 12H4M4 12L10 18M4 12L10 6"
        stroke="#3D3D3D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
