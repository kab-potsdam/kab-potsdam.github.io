import React from "react";

import presets from "./about.module.scss";
import AboutProps from "./about.props";
import { Button, Text, View } from "..";

const About: React.FC<AboutProps> = (props) => {
  const { children, preset="default", ...rest } = props;

  return (
    <View {...rest} className={presets[preset]}>
      <Text text="&copy; Mark Bader 2021" className={presets.element} />|<Button text="Impressum" preset="flat" className={presets.element} />
    </View>
  );
};

export default About;
