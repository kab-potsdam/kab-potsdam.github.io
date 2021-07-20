import React from "react";

import { StyleSheet } from "../../lib";
import presets from "./icon.module.scss";
import IconProps from "./icon.props";

const Icon: React.FC<IconProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    src,
    ...rest
  } = props;

  return (
    <img
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
      alt="Icon"
      src={src}
    />
  );
};

export default Icon;
