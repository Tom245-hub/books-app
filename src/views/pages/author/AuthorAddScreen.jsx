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

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .required("Musisz wpisać swoje imię")
      .min(2, "Imię jest za krótkie")
      .max(20, "Imię jest za długie"),
    lastName: Yup.string()
      .required("Musisz wpisać swoje nazwisko")
      .min(2, "Nazwisko musi być dłużesze")
      .max(20, "Nazwisko jest za długie"),
  });

const AuthorAddScreen = () => {
  const { setAuthorList, author } = useContext(StoreContext);

  const initialValues = {
    firstName: "",
    lastName: "",
  };

  const addAuthor = (values) => {
    const { data, status } = request.post("/authors", {
      firstName: values.firstName,
      lastName: values.lastName,
    });
    if (status === 201) {
      setAuthorList(Object.values(data));
    }
  };

  console.log(author);

  return (
    <div>
      <HeaderPageRow>
        <h1>Dodaj autora</h1>
        <Button link="/authors" text="Powrót do listy" />
      </HeaderPageRow>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addAuthor}
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
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Imię"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Nazwisko"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormRow>

                {errors.firstName && touched.firstName && (
                  <InfoValid text={errors.firstName} />
                )}

                {errors.lastName && touched.lastName && (
                  <InfoValid text={errors.lastName} />
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

export default AuthorAddScreen;
