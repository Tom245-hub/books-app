import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.colors.light};
`;

const TopMenu = styled.ul`
  display: flex;
  padding: 15px 0;
  & li {
    margin: 0 15px;
    & a {
      color: ${(props) => props.theme.colors.primary};
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopMenu>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/authors">Autorzy</Link>
        </li>
        <li>
          <Link to="/publishers">Wydawnictwa</Link>
        </li>
        <li>
          <Link to="/books">Książki</Link>
        </li>
      </TopMenu>
    </HeaderContainer>
  );
};

export default Header;
