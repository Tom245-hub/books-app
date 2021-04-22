import React from "react";

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.colors.light};
  min-height: 10vh;
`;

const Footer = () => {
  return <FooterContainer>Aplikacja Biblioteka</FooterContainer>;
};

export default Footer;
