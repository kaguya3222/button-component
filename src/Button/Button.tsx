import React from "react";
import { styled } from "@stitches/react";

type Variant = "default" | "outline" | "text";
type Color = "default" | "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  disableShadow?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const defaultVariantHover = {
  background: "#AEAEAE",
  color: "#3F3F3F",
};

const StyledButton = styled("button", {
  display: "flex",
  alignItems: "center",
  transition: "all 0.3s",
  fontSize: "14px",
  lineHeight: "20px",
  fontFamily: "Noto Sans JP",
  fontWeight: "500",
  borderRadius: "6px",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
  "&:disabled": {
    cursor: "default",
  },
  variants: {
    size: {
      sm: {
        padding: "6px 12px",
      },
      md: {
        padding: "8px 16px",
      },
      lg: {
        padding: "11px 22px",
      },
    },
    color: {
      default: {
        background: "#E0E0E0",
        color: "#3F3F3F",
        "&:hover": defaultVariantHover,
        "&:focus": defaultVariantHover,
      },
      primary: {
        background: "#2962FF",
        color: "#FFF",
        "&:hover": {
          background: "#0039CB",
        },
        "&:focus": {
          background: "#0039CB",
        },
      },
      secondary: {
        background: "#455A64",
        color: "#FFF",
        "&:hover": {
          background: "#1C313A",
        },
        "&:focus": {
          background: "#1C313A",
        },
      },
      danger: {
        background: "#D32F2F",
        color: "#FFF",
        "&:hover": {
          background: "#9A0007",
        },
        "&:focus": {
          background: "#9A0007",
        },
      },
    },
    variant: {
      default: {
        boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
        border: "none",
        "&:disabled": {
          background: "#E0E0E0",
          color: "#9E9E9E",
        },
      },
      outline: {
        border: "1px solid #3D5AFE",
        background: "#fff",
        color: "#3D5AFE",
        "&:hover": {
          background: "rgba(41, 98, 255, 0.1)",
          color: "#3D5AFE",
        },
      },
      text: {
        border: "none",
        color: "#3D5AFE",
        background: "#fff",
        "&:hover": {
          background: "rgba(41, 98, 255, 0.1)",
          color: "#3D5AFE",
        },
        "&:focus": {
          background: "rgba(41, 98, 255, 0.1)",
          color: "#3D5AFE",
        },
        "&:disabled": {
          background: "none",
          color: "#9E9E9E",
        },
      },
    },
  },
});

const StyledButtonIcon = styled("div", {
  display: "flex",
  variants: {
    placement: {
      start: {
        marginRight: "8px",
      },
      end: {
        marginLeft: "8px",
      },
    },
  },
});

export const Button = ({
  children,
  variant = "default",
  color = "default",
  size = "md",
  disableShadow = false,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      css={{
        boxShadow: disableShadow ? "none" : undefined,
      }}
      {...props}
    >
      {startIcon && (
        <StyledButtonIcon placement="start">{startIcon}</StyledButtonIcon>
      )}
      {children}
      {endIcon && (
        <StyledButtonIcon placement="end">{endIcon}</StyledButtonIcon>
      )}
    </StyledButton>
  );
};
