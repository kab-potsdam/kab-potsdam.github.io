import React from "react";

import { StyleSheet } from "../../lib";
import ViewProps from "./view.props";

/**
 * A basic container.
 */
const View: React.FC<ViewProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <div {...rest} style={StyleSheet.style(style)}>
      {children}
    </div>
  );
};

export default View;
