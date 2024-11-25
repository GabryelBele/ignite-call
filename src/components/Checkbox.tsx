import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #121214;
  cursor: pointer;
  appearance: none;
  position: relative;


  &:checked::after {
    content: '✔';
    font-size: 16px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
  }


  &:checked {
    background-color: #00b37e;
  }


  &:focus {
    outline: none;
  }

  &:checked:focus {
    outline: none;
  }
`;

const Checkbox: React.FC = () => {
  return <StyledCheckbox />;
};

export default Checkbox;
