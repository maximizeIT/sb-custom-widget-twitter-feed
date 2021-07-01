import React from "react";
import CSS from "csstype";

export const Error = () => {
  
  const errorMessageStyle: CSS.Properties = {
    padding: "5px 0px",
  };

  return <h2 style={errorMessageStyle}>Could not load timeline.<br/>Please check your settings or contact the developer of the widget.</h2>;
};