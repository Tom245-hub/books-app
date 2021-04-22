import React, { useContext } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";

import { Button } from "../../components/Button";
import { RowListAuthor } from "../../components/RowList";

const HeaderPageRow = styled.div`
  display: flex;
  flex-direction: column;
  h1,
  a {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

const AuthorListScreen = () => {
  const { authorList, setAuthorList } = useContext(StoreContext);

  const deleteAuthor = async (e, item) => {
    e.preventDefault();

    try {
      const { status } = await request.delete(`/authors/${item.id}`);
      if (status === 200) {
        setAuthorList(authorList.filter((item) => item.id !== item.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderPageRow>
        <h1>Lista autorów</h1>
        <Button link="/authors/add" text="Dodaj autora" />
      </HeaderPageRow>

      <List>
        <RowListAuthor
          id="ID"
          firstName="Imię"
          lastName="Nazwisko"
          item={false}
        />
        {authorList.length > 0 &&
          authorList.map((item, index) => (
            <RowListAuthor
              key={index}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              deleteAuthor={deleteAuthor}
              item={item}
            />
          ))}
      </List>
    </div>
  );
};

export default AuthorListScreen;
