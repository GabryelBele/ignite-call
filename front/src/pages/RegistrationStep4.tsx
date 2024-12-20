import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Progress from '../components/Progress';
import Button from '../components/Button';
import Header from '../components/Header';

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
  max-width: 100%;
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

const Person = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #e1e1e6;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ImagePreview = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const ButtonSelect = styled.button`
  background-color: #29292e;
  color: #fff;
  border: 1px solid #323238;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3e3e42;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 492px;
  height: 180px;
  gap: 8px;
`;

const Input = styled.input`
  width: 492px;
  height: 120px;
  padding: 8px;
  background-color: #121214;
  color: #fff;
  border: 1px solid #29292e;
  border-radius: 6px;
`;

const RegistrationStep4: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [aboutYou, setAboutYou] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = async () => {
    const registrationData = {
      step1Data: {
        name: localStorage.getItem('name') || '',
        email: localStorage.getItem('email') || '',
        fullname: localStorage.getItem('fullName') || '',
        username: localStorage.getItem('username') || '',
        selectedDays: localStorage.getItem('selectedDays') || '',
        timeRanges: localStorage.getItem('timeRanges') || '',
        profileImage: selectedImage || '',
        aboutYou: aboutYou,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/api/perfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      }); //aqui envia os dados para o backend

      if (!response.ok) {
        throw new Error('Erro ao salvar os dados');
      }

      navigate('/calendar');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      alert('Houve um problema ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <Container>
      <Header
        title="Bem-vindo ao Ignite Call!"
        description="Precisamos de algumas informações para criar seu perfil."
      />
      <Progress currentStep={4} totalSteps={4} />

      <Modal>
        <Person>
          <Label>Foto de Perfil</Label>
          <Frame>
            <ImagePreview src={selectedImage || '/photo.png'} alt="Foto de perfil" />
            <ButtonSelect onClick={() => document.getElementById('imageInput')?.click()}>
              Selecionar Foto
            </ButtonSelect>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </Frame>
        </Person>

        <TextArea>
          <Label>Sobre você</Label>
          <Input
            type="text"
            value={aboutYou}
            onChange={(e) => setAboutYou(e.target.value)}
          />
          <Label>Fale um pouco sobre você. Isto será exibido em sua página pessoal.</Label>
        </TextArea>

        <Button text="Próximo passo →" onClick={handleNextStep} />
      </Modal>
    </Container>
  );
};

export default RegistrationStep4;
