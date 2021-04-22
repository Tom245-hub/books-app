import styled from "styled-components";

const ButtonSubmit = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.light};
  padding: 5px 15px;
  margin-bottom: 10px;
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

const ValidationInfo = styled.div`
  color: ${(props) => props.theme.colors.light};
  background: ${(props) => props.theme.colors.primary};
  padding: 5px 15px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  margin: 5px 0;
`;

export const ButtonSub = (props) => {
  return <ButtonSubmit type="submit">{props.text}</ButtonSubmit>;
};

export const InfoValid = (props) => {
  return <ValidationInfo>{props.text}</ValidationInfo>;
};
