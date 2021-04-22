import React, { useEffect, useState, createContext } from "react";

import request from "../helpers/request";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [authorList, setAuthorList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [publisherList, setPublisherList] = useState([]);

  const fetchDataAuthor = async () => {
    const { data } = await request.get("/authors");
    setAuthorList(Object.values(data));
  };

  const fetchDataPublisher = async () => {
    const { data } = await request.get("/publishers");
    setPublisherList(Object.values(data));
  };

  const fetchDataBook = async () => {
    const { data } = await request.get("/books");
    setBookList(Object.values(data));
  };

  useEffect(() => {
    fetchDataPublisher();
    fetchDataAuthor();
    fetchDataBook();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        authorList,
        setAuthorList,
        publisherList,
        setPublisherList,
        bookList,
        setBookList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
