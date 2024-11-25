import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  width: 492px;
  height: 46px;
  padding: 12px 191px;
  gap: 8px;
  border-radius: 6px 0px 0px 0px; 
  background-color: #04d361;
  color: #ffffff; 
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #03a14a;
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
