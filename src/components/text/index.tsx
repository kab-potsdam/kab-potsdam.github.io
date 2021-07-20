import React from "react";

import { StyleSheet } from "../../lib";
import presets from "./text.module.scss";
import TextProps from "./text.props";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    text,
    ...rest
  } = props;

  return (
    <span
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      {text}
    </span>
  );
};

export default Text;
