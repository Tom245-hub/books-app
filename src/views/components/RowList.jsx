import React, { useContext } from "react";
import styled from "styled-components";

const RowList = styled.ul`
  display: flex;
  margin: 0 auto;
  li {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.light};
    padding: 5px 15px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    width: 140px;
  }
`;

export const RowListAuthor = (props) => {
  return (
    <RowList>
      <li>{props.id}</li>
      <li>{props.firstName}</li>
      <li>{props.lastName}</li>
      <li>{props.item ? <button disabled>Edytuj</button> : "Edycja"}</li>
      <li>
        {props.item ? (
          <button onClick={(e) => props.deleteAuthor(e, props.item)}>
            Usuń
          </button>
        ) : (
          "Usuń"
        )}
      </li>
    </RowList>
  );
};

export const RowListBook = (props) => {
  return (
    <RowList>
      <li>{props.id}</li>
      <li>{props.title}</li>
      <li>{props.isbn}</li>
      <li>{props.publishmentYear}</li>
      <li>{props.authorId}</li>
      <li>{props.publisherId}</li>
      <li>{props.item ? <button disabled>Edytuj</button> : "Edycja"}</li>
      <li>
        {props.item ? (
          <button onClick={(e) => props.deleteBook(e, props.item)}>Usuń</button>
        ) : (
          "Usuń"
        )}
      </li>
    </RowList>
  );
};

export const RowListPublisher = (props) => {
  return (
    <RowList>
      <li>{props.id}</li>
      <li>{props.name}</li>
      <li>{props.establishmentYear}</li>
      <li>{props.item ? <button disabled>Edytuj</button> : "Edycja"}</li>
      <li>
        {props.item ? (
          <button onClick={(e) => props.deletePublisher(e, props.item)}>
            Usuń
          </button>
        ) : (
          "Usuń"
        )}
      </li>
    </RowList>
  );
};
