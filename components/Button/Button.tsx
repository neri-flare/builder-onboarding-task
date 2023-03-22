import { Builder } from "@builder.io/react";
import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  bgColor?: string;
  textColor?: string;
  fontStyle?: string;
  size?: "sm" | "lg";
};

const sizeMap = {
  sm: {
    height: "40px",
    fontSize: "16px",
    paddingInline: "34px",
  },
  lg: {
    height: "64px",
    fontSize: "18px",
    paddingInline: "48px",
  },
};

const StyledButton = styled("button")<Omit<Props, "text">>`
  font-family: "Arial";
  font-weight: 700;
  font-size: ${({ size }) => (size ? sizeMap[size]?.fontSize : "18px")};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  background-color: ${({ bgColor }) => bgColor || "#2C816E"};
  color: ${({ textColor }) => textColor || "#fff"};
  height: ${({ size }) => (size ? sizeMap[size]?.height : "64px")};
  padding-inline: ${({ size }) =>
    size ? sizeMap[size]?.paddingInline : "47px"};
  border: none;
  border-radius: 8px;
`;

const Button: React.FC<Props> = ({
  bgColor,
  textColor,
  text,
  fontStyle,
  size,
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
      defaultValue: "whtie",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "black",
    },
  ],
});
