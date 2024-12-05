import React from 'react';
import styled from 'styled-components';

interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

const ProgressText = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 8px;
`;

const ProgressBarsContainer = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  max-width: 400px;
`;

const ProgressBar = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 8px;
  background-color: ${({ isActive }) => (isActive ? '#4CAF50' : '#888')};
  border-radius: 4px;
  transition: background-color 0.3s ease;
`;

const Progress: React.FC<ProgressProps> = ({ currentStep, totalSteps }) => {
  return (
    <ProgressContainer>
      <ProgressText>Passo {currentStep} de {totalSteps}</ProgressText>
      <ProgressBarsContainer>
        {Array.from({ length: totalSteps }, (_, index) => (
          <ProgressBar key={index} isActive={index < currentStep} />
        ))}
      </ProgressBarsContainer>
    </ProgressContainer>
  );
};

export default Progress;
