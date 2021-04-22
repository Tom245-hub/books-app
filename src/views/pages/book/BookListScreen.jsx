import React, { useContext } from "react";
import styled from "styled-components";

import request from "../../../helpers/request";

import { Button } from "../../components/Button";
import { RowListBook } from "../../components/RowList";
import { StoreContext } from "../../../store/StoreProvider";

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

const BookListScreen = () => {
  const { bookList, setBookList } = useContext(StoreContext);

  const deleteBook = async (e, item) => {
    e.preventDefault();

    try {
      const { status } = await request.delete(`/books/${item.id}`);
      if (status === 200) {
        setBookList(bookList.filter((item) => item.id !== item.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderPageRow>
        <h1>Lista książek</h1>
        <Button link="/books/add" text="Dodaj książkę" />
      </HeaderPageRow>

      <List>
        <RowListBook
          id="ID"
          title="Tytuł"
          isbn="ISBN"
          publishmentYear="Rok publikacji"
          authorId="ID autora"
          publisherId="ID wydawnictwa"
          item={false}
        />
        {bookList.length > 0 &&
          bookList.map((item, index) => (
            <RowListBook
              key={index}
              id={item.id}
              title={item.title}
              isbn={item.isbn}
              publishmentYear={item.publishmentYear}
              authorId={item.authorId}
              publisherId={item.publisherId}
              deleteBook={deleteBook}
              item={item}
            />
          ))}
      </List>
    </div>
  );
};

export default BookListScreen;
