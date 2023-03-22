import { Builder } from "@builder.io/react";
import React from "react";

type Props = {
  text: string;
};

const Text: React.FC<Props> = ({ text }) => {
  return <p>{text}</p>;
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
