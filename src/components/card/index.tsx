import React from "react";

import { StyleSheet } from "../../lib";
import { View, Text } from "..";
import presets from "./card.module.scss";
import CardProps from "./card.props";

const Card: React.FC<CardProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    title,
    src,
    onClick,
    ...rest
  } = props;

  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
      onClick={onClick}
    >
      <img
        alt={`${title} card`}
        className={presets.image}
        src={src}
        title={title}
      />
      <View className={presets.text}>
        <Text className={presets.title} text={title} preset="subheader" />
      </View>
    </ View>
  );
};

export default Card;
