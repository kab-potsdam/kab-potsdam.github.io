import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface TextProps
  extends ApplyBasicProps<HTMLAttributes<HTMLSpanElement>> {

  /** The text to display. */
  text?: string;

  /** The name of one of the text presets. */
  preset?: string;
}
