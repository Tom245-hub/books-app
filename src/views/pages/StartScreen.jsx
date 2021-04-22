import React from "react";
import styled from "styled-components";

const ContainerStart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const StartScreen = () => {
  return (
    <ContainerStart>
      Witaj w aplikacji. Wybierz pozycję z górnego menu aby zarządzać
      biblioteką.
    </ContainerStart>
  );
};

export default StartScreen;
