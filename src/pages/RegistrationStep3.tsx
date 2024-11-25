import React from 'react';
import styled from 'styled-components';
import Progress from '../components/Progress';
import Header from '../components/Header'; // Importando o Header reutilizável
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #121214;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 6px;
`;

const Modal = styled.div`
  width: 540px;
  height: 544px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 6px;
  border: 1px solid #323238;
  padding: 24px;
`;

const Frame = styled.div`
  width: 492px;
  height: 434px;
  background-color: #29292e;
  border-radius: 6px;
  border: 1px solid #323238;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #323238;
`;

const WeekDay = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    color: #FFF;
  }
`;

const TimeRange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 138px;
  height: 38px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #121214;
  border: 1px solid #29292e;
  color: #fff;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 14px;
`;

const RegistrationStep3: React.FC = () => {
    const navigate = useNavigate(); 

    const handleNextStep = () => {
      navigate('/registration-step4');
    };
  
  const weekDays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  return (
    <Container>
      <Header
        title="Configuração Finalizada"
        description="Agora que você completou as etapas, finalize o processo para concluir seu cadastro."
      />

      <Progress currentStep={3} totalSteps={4} /> 
      <Modal>
        <Frame>
          {weekDays.map((day, index) => (
            <InputBox key={index}>
              <WeekDay>
                <Checkbox />
                <label>{day}</label>
              </WeekDay>
              <TimeRange>
                <Input type="text" placeholder="09:00h" />
                <Input type="text" placeholder="17:00h" />
              </TimeRange>
            </InputBox>
          ))}
        </Frame>
        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default RegistrationStep3;
