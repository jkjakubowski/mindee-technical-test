import React, { FC, useState } from "react";
import styled from "styled-components";

import { TextField, Button } from "@mui/material";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

const Form = ({ formik }: any) => {
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        variant="outlined"
        label="Item's name"
        value={formik.values.name}
        onChange={formik.handleChange}
      ></TextField>
      <TextField
        id="description"
        variant="outlined"
        label="Item's description"
        value={formik.values.description}
        onChange={formik.handleChange}
      ></TextField>
      <Button type="submit" variant="contained">
        Submit item
      </Button>
    </StyledForm>
  );
};

export default Form;
