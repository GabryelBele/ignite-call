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
  gap: 8px;
`;

const StyledTitle = styled.h2`
  width: 100%;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  color: #FFFFFF;
`;

const StyledDescription = styled.p`
  width: 100%;
  opacity: 0.8;
  margin-top: 0;
  color: #FFFFFF;
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
