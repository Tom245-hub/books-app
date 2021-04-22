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
    name: Yup.string()
      .required("Musisz wpisać nazwę wydawnictwa")
      .min(2, "Nazwa jest za krótka"),
    establishmentYear: Yup.number()
      .required("Musisz wpisać rok wydawnictwa")
      .max(2021, "Rok wydania musi być mniejszy niż aktualny"),
  });

const PublisherAddScreen = () => {
  const { setPublisherList } = useContext(StoreContext);

  const initialValues = {
    name: "",
    establishmentYear: "",
  };

  const addPublisher = (values) => {
    const { data, status } = request.post("/publishers", {
      name: values.name,
      establishmentYear: values.establishmentYear,
    });
    if (status === 201) {
      setPublisherList(Object.values(data));
    }
  };

  return (
    <div>
      <HeaderPageRow>
        <h1>Dodaj wydawnictwo</h1>
        <Button link="/publishers" text="Powrót do listy" />
      </HeaderPageRow>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addPublisher}
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
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nazwa wydawnictwa"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Input
                    id="establishmentYear"
                    type="text"
                    name="establishmentYear"
                    placeholder="Rok wydawnictwa"
                    value={values.establishmentYear}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormRow>

                {errors.name && touched.name && (
                  <InfoValid text={errors.name} />
                )}

                {errors.establishmentYear && touched.establishmentYear && (
                  <InfoValid text={errors.establishmentYear} />
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

export default PublisherAddScreen;
