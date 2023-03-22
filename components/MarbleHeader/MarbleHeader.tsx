import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledMarbleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdfbf8;
  width: 100%;
  padding: 20px 56px;
`;

type Props = {};

const MarbleHeader = (props: Props) => {
  return (
    <StyledMarbleHeader>
      <Image
        src="/marble_logo.png"
        alt="marble law firm logo"
        width="97"
        height="24"
      />
      <Button
        bgColor="#2C816E"
        text="Let's talk"
        textColor="#fff"
        size="sm"
        fontStyle="italic"
      />
    </StyledMarbleHeader>
  );
};

export default MarbleHeader;
