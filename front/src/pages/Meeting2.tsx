import React from "react";
import Calendar from "../components/Calendar";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 598px;
  gap: 12px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const IconImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #a9a9a9; 
    margin: 0;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  background-color:#202024;
  border-radius: 16px;
  width: 820px;
  height: 438px;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 438px;
  padding: 24px 24px 0px 24px;
  border-radius: 0px 6px 6px 0px;
  overflow-y: auto; /* Permite o scroll vertical se o conteúdo ultrapassar o limite */
  scrollbar-width: thin; /* Para navegadores modernos */
  scrollbar-color: #3c3c3c transparent;

  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3c3c3c; /* Cor da barra de rolagem */
    border-radius: 8px; /* Borda arredondada */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Cor do fundo do scroll */
  }
`;

const HeaderTime = styled.div`
  padding: 8px 0;
  text-align: center;

  p {
    color: #ffffff;
    font-size: 16px;
    margin: 0;
  }
`;

const TimesNav = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 7fr);
  gap: 8px;
  padding-bottom: 16px;
`;

const ObjectTime = styled.div`
  height: 48px;
  background-color: #2c2c2c;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #3c3c3c;
  }
`;

const Meeting2: React.FC = () => {
    return (
        <PageWrapper>
            <Container>
                <Header>
                    <Title>
                        <IconImage src="/photo.png" alt="Ícone" />
                        <Text>
                            <h1>Joseph Oliveira</h1>
                            <p>CTO @DogeLabs</p>
                        </Text>
                    </Title>
                </Header>
                <Modal>
                   <Calendar />
                   <Time>
                        <HeaderTime>
                            <p>terça-feira, 20 de setembro</p>
                        </HeaderTime>
                        <TimesNav>
                            <ObjectTime>08:00</ObjectTime>
                            <ObjectTime>09:00</ObjectTime>
                            <ObjectTime>10:00</ObjectTime>
                            <ObjectTime>11:00</ObjectTime>
                            <ObjectTime>12:00</ObjectTime>
                            <ObjectTime>13:00</ObjectTime>
                            <ObjectTime>14:00</ObjectTime>
                        </TimesNav>
                   </Time>
                </Modal>
            </Container>
        </PageWrapper>
    );
};

export default Meeting2;
