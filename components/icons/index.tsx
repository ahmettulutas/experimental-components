import { HTMLAttributes } from "react";

export type SvgProps = HTMLAttributes<HTMLOrSVGElement> & {
  width?: number;
  height?: number;
  pathStroke?: string;
};
