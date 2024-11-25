import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 492px;
  height: 70px;
  padding: 16px 24px;
  border-radius: 6px;
  border: 1px solid #e1e1e1;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.p`
  width: 110px;
  height: 26px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 25.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #E1E1E6;
`;

const Button = styled.button`
  width: 113px;
  height: 38px;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 6px;
  background-color: transparent;
  border: 2px solid #00875F;
  color: #00875F;

  &:hover {
    background-color: #1c86e3;
  }

  &:active {
    background-color: #1a70c1;
  }
`;

interface InputBoxProps {
  onClick: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onClick }) => {
  return (
    <Container>
      <Label>Google Agenda</Label>
      <Button onClick={onClick}>Conectar</Button>
    </Container>
  );
};

export default InputBox;
