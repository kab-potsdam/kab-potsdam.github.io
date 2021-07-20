import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface ButtonProps
  extends ApplyBasicProps<HTMLAttributes<HTMLButtonElement>> {
  /**
   * The text to display if not using `tx` or nested components.
   * It takes precedence over children, but not `tx`.
   */
  text?: string;

  /** The icon to show on the button */
  icon?: React.ReactNode;

  /** The name of one of the button presets. */
  preset?: string;
}
