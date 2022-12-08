import React from "react";
import { styled } from "@stitches/react";

export interface ButtonProps {}

const StyledButton = styled("button", {
  backgroundColor: "#E0E0E0",
  color: "#3F3F3F",
  fontSize: "14px",
  lineHeight: "20px",
  fontFamily: "Noto Sans JP",
  fontWeight: "500",
  boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
  borderRadius: "6px",
  padding: "8px 16px",
  border: "none",
});

export const Button = ({}: ButtonProps) => {
  return <StyledButton>Button component</StyledButton>;
};
