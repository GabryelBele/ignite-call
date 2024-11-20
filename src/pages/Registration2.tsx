import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import styled from 'styled-components';
import Progress from '../components/Progress';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Header from '../components/Header'; // Importando o Header reutilizável

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

const RegistrationStep2: React.FC = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate(); // Hook para navegação

  const handleNextStep = () => {
    // Verificar se ambos os campos têm valores
    if (username.trim() && fullName.trim()) {
      navigate('/registration-step2'); // Navegação para a próxima página
    } else {
      console.error('Preencha todos os campos');
    }
  };

  // Passando o valor diretamente
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

      <Progress currentStep={2} totalSteps={4} />

      <Modal>
        <InputField
          label="Nome de usuário"
          placeholder="Ex.: joseph"
          value={username}
          onChange={handleUsernameChange} // Passando o valor diretamente
        />
        <InputField
          label="Nome completo"
          placeholder="Ex.: Joseph Oliveira"
          value={fullName}
          onChange={handleFullNameChange} // Passando o valor diretamente
        />
        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default RegistrationStep2;
