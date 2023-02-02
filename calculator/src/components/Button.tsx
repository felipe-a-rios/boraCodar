import { CSSProperties } from "react";
import "./buttonstyle.css";
interface ButtonProps {
  num?: number;
  operator?: React.ReactNode;
  bg?: string;
  textStyle?: CSSProperties;
}

export function Button(props: ButtonProps) {
  return (
    <div
      id="button"
      className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
      style={{ background: props.bg, ...props.textStyle }}
    >
      {props.num} {props.operator}
    </div>
  );
}
