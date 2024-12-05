import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithGoogle } from "../utils/firebase"; // Importe a função
import { FaGoogle } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 2rem;
  background-color: #121214;

  @media (max-width: 1150px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  max-width: 480px;
  flex: 1; /* Permite que ocupe o espaço disponível */
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  height: auto; /* Removendo a altura fixa para melhor adaptação ao conteúdo */
  padding-top: 20px; /* Adicionando espaçamento superior para não ficar muito colado ao topo */

  h2 {
    font-size: 64px;
    color: #fff;
    font-weight: bold;

    @media (max-width: 1150px) {
      font-size: 48px;
    }

    @media (max-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    font-size: 20px;
    line-height: 32px;
    color: #555;

    @media (max-width: 1150px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 46px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #DB4437;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    gap: 8px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ae534b;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const user = await signInWithGoogle();
    if (user) {
      // Salvando dados do usuário no localStorage
      localStorage.setItem("name", user.displayName || "");
      localStorage.setItem("email", user.email || "");

      // Redireciona para a página de registro
      navigate("/registration-step1");
    }
  };

  return (
    <Container>
      <LeftSection>
        <h2>Agendamento Descomplicado</h2>
        <p>
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </p>
        <button onClick={handleButtonClick} aria-label="Criar Conta com o Google">
          <FaGoogle/>
          Criar Conta Google
        </button>
      </LeftSection>

      <RightSection>
        <img src="/image.png" alt="Ilustração representando organização" />
      </RightSection>
    </Container>
  );
};

export default Home;
