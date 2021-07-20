import React from "react";

import { StyleSheet } from "../../lib";
import { View, Text, BackButton } from "..";
import presets from "./contentCard.module.scss";
import ContentCardProps from "./contentCard.props";

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const {
    children,
    className,
    preset = "default",
    style,
    title,
    ...rest
  } = props;


  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      {title && <View className={presets.title}>
        <BackButton />
        <Text text={title} preset="header" />
        <hr className={presets.line} />
      </View>}
      {children}
    </ View>
  );
};

export default ContentCard;
