import React from "react";

import { StyleSheet } from "../../lib";
import Text from "../text";
import presets from "./button.module.scss";
import ButtonProps from "./button.props";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    text,
    icon,
    ...rest
  } = props;

  const content = text ? <Text text={text} /> : children;

  return (
    <button
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      {icon}
      {content}
    </button>
  );
};

export default Button;
