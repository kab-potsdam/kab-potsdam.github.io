import { HTMLAttributes } from "react";

import { ApplyBasicProps } from "../types";

export default interface CardProps extends ApplyBasicProps<HTMLAttributes<HTMLImageElement>> {
  src?: string;

  /** The topic of this card. */
  title?: string;

  /** The action that should be executed when card is clicked. */
  onClick?: () => void;

  /** The name of one of the button presets. */
  preset?: string;
}
