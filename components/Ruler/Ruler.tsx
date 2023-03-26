import React from "react";
import { Builder } from "@builder.io/react";
import styled from "styled-components";

const StyledRuler = styled.hr`
  border: 0;
  height: 1px;
  background-color: #f7f1e8;
`;

const Ruler = () => {
  return <StyledRuler></StyledRuler>;
};

export default Ruler;

Builder.registerComponent(Ruler, {
  name: "Custom Ruler",
  inputs: [],
});
