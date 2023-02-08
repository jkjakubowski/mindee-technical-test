import styled from "styled-components";

import { TextField, Button } from "@mui/material";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  margin-bottom: 2rem;
  background-color: #fd3246;
`;

const Form = ({ formik }: any) => {
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextField
        id="name"
        variant="outlined"
        label="Item's name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <StyledTextField
        id="description"
        variant="outlined"
        label="Item's description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <StyledButton color="primary" type="submit" variant="contained">
        Submit item
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
