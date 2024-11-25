import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  description: string;
}


const StyledTitle = styled.h2`
  width: 272px;
  height: 38px;
  margin-left: 24px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 38.4px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
`;


const StyledDescription = styled.p`
  width: 272px;
  margin-left: 24px;
  opacity: 0.8;
`;

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </div>
  );
};

export default Title;
