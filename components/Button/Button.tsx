import { Builder } from "@builder.io/react";
import React from "react";
import styled, { css } from "styled-components";

type Props = {
  text: string;
  bgColor?: string;
  textColor?: string;
  fontStyle?: string;
  size: "sm" | "lg";
};

const sizeVariant = {
  sm: css`
    height: 40px;
    font-size: 16px;
    padding-inline: 34px;
  `,
  lg: css`
    height: 64px;
    font-size: 18px;
    padding-inline: 48px;
  `,
};

const StyledButton = styled("button")<Omit<Props, "text">>`
  font-family: "Arial";
  font-weight: 700;
  ${({ size }) => sizeVariant[size]}
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  background-color: ${({ bgColor }) => bgColor || "#2C816E"};
  color: ${({ textColor }) => textColor || "#fff"};
  border: none;
  border-radius: 8px;
`;

const Button: React.FC<Props> = ({
  bgColor,
  textColor,
  text,
  fontStyle,
  size = "lg",
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      fontStyle={fontStyle}
      size={size}
    >
      {text || "Button"}
    </StyledButton>
  );
};

export default Button;

Builder.registerComponent(Button, {
  name: "Custom Button",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Custom Button",
    },
    {
      name: "bgColor",
      type: "color",
      defaultValue: "#2C816E",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "white",
    },
    {
      name: "fontStyle",
      type: "text",
      defaultValue: "normal",
      enum: ["normal", "italic", "bold"],
    },
    {
      name: "size",
      type: "text",
      defaultValue: "lg",
      enum: ["sm", "lg"],
    },
  ],
});
