import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Progress from '../components/Progress';
import Button from '../components/Button';
import Header from '../components/Header';
import InputField from '../components/InputField';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121214;
  padding: 20px;
  box-sizing: border-box;
`;

const Modal = styled.div`
  width: 540px;
  height: auto;
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #29292e;
  background-color: #1f1f1f;
`;

const RegistrationStep1: React.FC = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate();

  const handleNextStep = () => {

    if (username.trim() && fullName.trim()) {
      navigate('/registration-step2');
    } else {
      console.error('Preencha todos os campos');
    }
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  return (
    <Container>
      <Header
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil. Você pode editar essas informações depois."
      />

      <Progress currentStep={1} totalSteps={4} />

      <Modal>
        <InputField
          label="Nome de usuário"
          placeholder="Ex.: joseph"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputField
          label="Nome completo"
          placeholder="Ex.: Joseph Oliveira"
          value={fullName}
          onChange={handleFullNameChange} 
        />
        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default RegistrationStep1;
