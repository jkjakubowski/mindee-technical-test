import React, { FC, useState } from "react";
import "./App.css";
import { useFormik } from "formik";

import { TextField, Button } from "@mui/material";
import ItemsTable from "./components/table/Table";

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
      <form onSubmit={formik.handleSubmit}>
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
      </form>
      <div>
        <ItemsTable rows={items} />
      </div>
    </div>
  );
};

export default App;
