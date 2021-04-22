import styled from "styled-components";

const ValidationInfo = styled.div`
  color: ${(props) => props.theme.colors.light};
  background: ${(props) => props.theme.colors.primary};
  padding: 5px 15px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  margin: 5px 0;
`;

const InfoValid = (props) => {
  return <ValidationInfo>{props.text}</ValidationInfo>;
};

export default InfoValid;
