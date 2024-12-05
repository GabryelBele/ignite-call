import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}


const InputContainer = styled.div`
  width: 492px;
  height: 76px;
  display: flex;
  flex-direction: column;
  gap: 8px; 
`;


const StyledLabel = styled.label`
  width: 107px;
  height: 22px;
  font-size: 14px;
  color: #e1e1e6;
`;


const StyledInput = styled.input`
  width: 492px; 
  height: 46px;
  padding: 12px 16px;
  gap: 8px;
  border: 1px solid #29292e;
  border-radius: 6px 0px 0px 0px;
  background-color: #121214;
  color: #e1e1e6;
  font-size: 16px;

  &:focus {
    border-color: #04d361;
    outline: none;
  }
`;

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputContainer>
  );
};

export default InputField;
