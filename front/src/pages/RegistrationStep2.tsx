import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { gapi } from 'gapi-script';
import Progress from '../components/Progress';
import Button from '../components/Button';
import Header from '../components/Header';
import InputBox from '../components/InputBox';

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
  height: 180px;
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

const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;

const RegistrationStep2: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({
        client_id: clientId!,
      });
    });
  }, []);

  const handleGoogleLogin = async () => {
    const authInstance = gapi.auth2.getAuthInstance();
    try {
      await authInstance.signIn();
      setIsAuthenticated(true);
      fetchGoogleCalendarEvents();
      navigate('/registration-step3');
    } catch (error) {
      console.error('Erro ao autenticar', error);
    }
  };

  const fetchGoogleCalendarEvents = async () => {
    if (!isAuthenticated) return;

    try {
      const response = await gapi.client.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      });
      console.log('Eventos encontrados:', response.result.items);
    } catch (error) {
      console.error('Erro ao buscar eventos', error);
    }
  };

  const handleNextStep = () => navigate('/registration-step3');

  return (
    <Container>
      <Header
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil."
      />
      <Progress currentStep={2} totalSteps={4} />
      <Modal>
        <InputBox onClick={handleGoogleLogin} />
        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default RegistrationStep2;
