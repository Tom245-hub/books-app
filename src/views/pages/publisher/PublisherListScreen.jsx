import React, { useContext } from "react";
import styled from "styled-components";

import request from "../../../helpers/request";

import { Button } from "../../components/Button";
import { RowListPublisher } from "../../components/RowList";
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

const PublisherListScreen = () => {
  const { publisherList, setPublisherList } = useContext(StoreContext);

  const deletePublisher = async (e, item) => {
    e.preventDefault();

    try {
      const { status } = await request.delete(`/publishers/${item.id}`);
      if (status === 200) {
        setPublisherList(publisherList.filter((item) => item.id !== item.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderPageRow>
        <h1>Lista wydawnictw</h1>
        <Button link="/publishers/add" text="Dodaj wydawnictwo" />
      </HeaderPageRow>

      <List>
        <RowListPublisher
          id="ID"
          name="Wydawnictwo"
          establishmentYear="Rok"
          item={false}
        />
        {publisherList.length > 0 &&
          publisherList.map((item, index) => (
            <RowListPublisher
              key={index}
              id={item.id}
              name={item.name}
              establishmentYear={item.establishmentYear}
              deletePublisher={deletePublisher}
              item={item}
            />
          ))}
      </List>
    </div>
  );
};

export default PublisherListScreen;
