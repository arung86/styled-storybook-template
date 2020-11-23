import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(255, 0, 0, 0.5);
`;

export default function Button({ text }) {
  return (
    <>
      <StyledButton>{text}</StyledButton>
    </>
  );
}
