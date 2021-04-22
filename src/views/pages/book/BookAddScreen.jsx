import React, { useContext } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { StoreContext } from "../../../store/StoreProvider";
import request from "../../../helpers/request";

import { ButtonSub, InfoValid } from "../../components/Form";
import { Button } from "../../components/Button";

const HeaderPageRow = styled.div`
  display: flex;
  flex-direction: column;
  h1,
  a {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  min-width: 400px;
  margin: 30px auto;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const Input = styled.input`
  padding: 5px 15px;
  width: 49%;
`;

const Select = styled.select`
  padding: 5px 15px;
  width: 49%;
`;

const validationSchema = () =>
  Yup.object().shape({
    title: Yup.string()
      .required("Musisz wpisać tytuł książki")
      .min(2, "Tytuł jest za krótki"),
    isbn: Yup.string()
      .required("Musisz wpisać numer ISBN")
      // .matches(/[\d-]+/, "ISBN może zawierac tylko cyfry i myślniki ")
      .min(13, "Numer isbn musi mieć 13 cyfr")
      .max(13, "Numer isbn musi mieć 13 cyfr"),
    publishmentYear: Yup.number()
      .required("Musisz wpisać rok publikacji")
      .max(2021, "Rok wydania musi być mniejszy niż aktualny"),
    authorId: Yup.string().required("Musisz wybrać autora"),
    publisherId: Yup.string().required("Musisz wybrać wydawnictwo"),
  });

const BookAddScreen = () => {
  const { authorList, publisherList } = useContext(StoreContext);
  const { setBookList } = useContext(StoreContext);

  const initialValues = {
    title: "",
    isbn: "",
    publishmentYear: "",
    authorId: "",
    publisherId: "",
  };

  const addBook = (values) => {
    const { data, status } = request.post("/books", {
      title: values.title,
      isbn: values.isbn,
      publishmentYear: values.publishmentYear,
      authorId: values.authorId,
      publisherId: values.publisherId,
    });
    if (status === 201) {
      setBookList(Object.values(data));
    }
  };

  return (
    <div>
      <HeaderPageRow>
        <h1>Dodaj książkę</h1>
        <Button link="/books" text="Powrót do listy" />
      </HeaderPageRow>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addBook}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          } = formik;

          return (
            <FormContainer>
              <form onSubmit={handleSubmit} noValidate>
                <FormRow>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Tytuł"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Input
                    id="publishmentYear"
                    type="number"
                    name="publishmentYear"
                    placeholder="Rok publikacji"
                    value={values.publishmentYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormRow>

                <FormRow>
                  <Select
                    id="authorId"
                    name="authorId"
                    value={values.authorId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Autor</option>
                    {authorList.length > 0 &&
                      authorList.map((item, index) => (
                        <option value={item.id}>
                          {item.firstName + " " + item.lastName}
                        </option>
                      ))}
                  </Select>

                  <Select
                    id="publisherId"
                    name="publisherId"
                    value={values.publisherId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Wydawnictwo</option>
                    {publisherList.length > 0 &&
                      publisherList.map((item, index) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </Select>
                </FormRow>

                <FormRow>
                  <Input
                    id="isbn"
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    value={values.isbn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormRow>

                {errors.title && touched.title && (
                  <InfoValid text={errors.title} />
                )}

                {errors.isbn && touched.isbn && (
                  <InfoValid text={errors.isbn} />
                )}

                {errors.publishmentYear && touched.publishmentYear && (
                  <InfoValid text={errors.publishmentYear} />
                )}

                {errors.authorId && touched.authorId && (
                  <InfoValid text={errors.authorId} />
                )}

                {errors.publisherId && touched.publisherId && (
                  <InfoValid text={errors.publisherId} />
                )}

                <ButtonSub text="Dodaj" />
              </form>
            </FormContainer>
          );
        }}
      </Formik>
    </div>
  );
};

export default BookAddScreen;
