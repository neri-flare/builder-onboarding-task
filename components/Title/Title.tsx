import { Builder } from "@builder.io/react";
import React from "react";

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return <h1>{text}</h1>;
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
