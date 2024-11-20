import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

// Estilização do contêiner
const InputContainer = styled.div`
  width: 492px; /* Largura especificada */
  height: 76px; /* Altura especificada */
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espaçamento entre o label e o input */
`;

// Estilização do label
const StyledLabel = styled.label`
  width: 107px;
  height: 22px;
  font-size: 14px; /* Tamanho da fonte */
  color: #e1e1e6; /* Cor do texto (exemplo: cinza claro) */
`;

// Estilização do input
const StyledInput = styled.input`
  width: 492px; /* Largura especificada */
  height: 46px; /* Altura ajustável */
  padding: 12px 16px; /* Espaçamento interno: topo, direita, baixo, esquerda */
  gap: 8px; /* Espaçamento entre os elementos internos (para manter consistência) */
  border: 1px solid #29292e; /* Borda */
  border-radius: 6px 0px 0px 0px; /* Cantos arredondados apenas no topo esquerdo */
  background-color: #121214; /* Cor de fundo */
  color: #e1e1e6; /* Cor do texto */
  font-size: 16px; /* Tamanho da fonte */

  &:focus {
    border-color: #04d361; /* Cor da borda ao focar */
    outline: none; /* Remove o contorno padrão */
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
