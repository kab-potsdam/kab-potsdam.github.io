import React from "react";

import { StyleSheet } from "../../lib";
import { OverviewScreenProps } from "../overviewScreen/overviewScreen.props";
import presets from "./detailScreen.module.scss";
import { View } from "../../components";

const DetailScreen: React.FC<OverviewScreenProps> = (props) => {
  const { children, className, preset="default", item, style, ...rest } = props;


  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      <main>
      </main>
    </View>
  );
};

export default DetailScreen;
