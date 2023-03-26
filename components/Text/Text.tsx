import { Builder } from "@builder.io/react";
import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: #192348;
  font-style: italic;
  font-family: "Arial";
  font-weight: 700;
  line-height: 26px;
`;

type Props = {
  text: string;
};

const Text: React.FC<Props> = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default Text;

Builder.registerComponent(Text, {
  name: "Custom Text",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Custom Text",
    },
  ],
});
