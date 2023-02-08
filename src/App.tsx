import React, { FC, useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import styled from "styled-components";

import { TextField, Button } from "@mui/material";
import ItemsTable from "./components/table/Table";
import Form from "./components/form/Form";

const Layout = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: FC = () => {
  const [items, setItems] = useState([{ name: "toto", description: "toto" }]);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (values) => {
      setItems((items) => [
        ...items,
        { name: values.name, description: values.description },
      ]);
    },
  });

  return (
    <div className="App">
      <Layout>
        <Form formik={formik} />
        <div>
          <ItemsTable rows={items} />
        </div>
      </Layout>
    </div>
  );
};

export default App;
