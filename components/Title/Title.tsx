import { Builder } from "@builder.io/react";
import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Arial";
  color: #192348;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

Builder.registerComponent(Title, {
  name: "Custom Title",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Custom Title",
    },
  ],
});
