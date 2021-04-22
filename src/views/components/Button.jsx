import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled.button`
  width: 180px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.light};
  padding: 5px 15px;
  margin: 0 auto;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.light};
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const Button = (props) => {
  return (
    <Link to={props.link}>
      <ButtonLink>{props.text}</ButtonLink>
    </Link>
  );
};
