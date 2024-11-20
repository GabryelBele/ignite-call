import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  description: string;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 0px 24px;
  gap: 8px; /* Espaço entre o título e a descrição */
`;

const StyledTitle = styled.h2`
  width: 100%; /* Ajusta a largura para o tamanho do contêiner */
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  color: #FFFFFF;
`;

const StyledDescription = styled.p`
  width: 100%; /* Ajusta a largura para o tamanho do contêiner */
  opacity: 0.8;
  margin-top: 0; /* Remove a margem superior para alinhar corretamente */
  color: #FFFFFF; /* Cor para o texto da descrição */
`;

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <HeaderContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </HeaderContainer>
  );
};

export default Header;
