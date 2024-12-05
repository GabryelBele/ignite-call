import React from "react";
import styled from "styled-components";
import InputField from "../components/InputField";

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
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: #202024;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  .date,
  .time {
    display: flex;
    align-items: center;
    gap: 8px;

    i {
      color: #ffffff;
      font-size: 16px;
    }

    p {
      color: #ffffff;
      font-size: 14px;
      margin: 0;
    }
  }
`;

const Retangulo = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  opacity: 0.2;
  margin: 16px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  button {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    background-color: #333333;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444444;
    }
  }

  button:last-child {
    background-color: #4caf50;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Meeting3: React.FC = () => {
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
                    <HeaderSection>
                        <div className="date">
                            <i>📅</i>
                            <p>22 de Setembro de 2022</p>
                        </div>
                        <div className="time">
                            <i>⏰</i>
                            <p>18:00h</p>
                        </div>
                    </HeaderSection>
                    <Retangulo />
                    <InputField label={""} placeholder={""} value={""} onChange={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                    <InputField label={""} placeholder={""} value={""} onChange={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                    <InputField label={""} placeholder={""} value={""} onChange={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                    <Footer>
                        <button>Cancelar</button>
                        <button>Confirmar</button>
                    </Footer>
                </Modal>
            </Container>
        </PageWrapper>
    );
};

export default Meeting3;
