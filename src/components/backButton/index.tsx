import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { StyleSheet } from "../../lib";
import { Button, Icon, Text } from "..";
import presets from "./backButton.module.scss";
import backArrow from "./back.svg";

import ButtonProps from "../button/button.props";

/** A button that navigates you back to the last visited site of the app. */
const BackButton: React.FC<ButtonProps> = (props) => {
  const { className, preset = "default", style, text } = props;

  const history = useHistory();

  const navigateBack = useCallback(() => {
    console.log(history);
    history.goBack();
  }, [history]);

  return (
    <Button
      onClick={navigateBack}
      icon={<Icon src={backArrow} />}
      preset="flat"
      className={StyleSheet.className(presets[preset], className)}
      style={StyleSheet.style(style)}
    >
      <Text
        text={text}
        preset="subheader"
        className={StyleSheet.className(presets.text)}
      />
    </Button>
  );
};

export default BackButton;
