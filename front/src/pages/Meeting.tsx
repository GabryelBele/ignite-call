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

const Meeting: React.FC = () => {
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
        <Calendar />
      </Container>
    </PageWrapper>
  );
};

export default Meeting;
