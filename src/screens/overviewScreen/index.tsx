import React, { useState } from "react";

import { StyleSheet } from "../../lib";
import { OverviewScreenProps } from "./overviewScreen.props";
import presets from "./overviewScreen.module.scss";
import { InfoCard, ContentCard, View } from "../../components";
import { hospitals, pediatricians  } from "../../data/data"

const OverviewScreen: React.FC<OverviewScreenProps> = (props) => {
  const { children, className, preset="default", style, item, ...rest } = props;

  const [ topic ] = useState(() => item === "hospitals" ? hospitals : pediatricians);


  return (
    <View
      {...rest}
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      <main>
        <ContentCard title={topic.title}>
          {topic.list.map((object) => {
            return <InfoCard object={object} preset="small" />
          })}
        </ContentCard>
        <View className={StyleSheet.className(presets.placeholder)} />
      </main>
    </View>
  );
};

export default OverviewScreen;
