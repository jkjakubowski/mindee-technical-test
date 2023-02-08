import { FC, useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";

import Layout from "./components/template/Layout";
import { Title } from "./components/atoms/Title";
import ItemsTable from "./components/molecules/table/Table";
import Form from "./components/molecules/form/ItemForm";

const App: FC = () => {
  const [items, setItems] = useState([{ name: "toto", description: "toto" }]);

  const ItemFormSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name's too short!")
      .max(30, "Name's too long")
      .required("Required"),
    description: yup
      .string()
      .min(4, "Description's too short!")
      .max(100, "Description's too long")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: ItemFormSchema,
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
        <Title>Mindee's Items list</Title>
        <Form formik={formik} />
        <div>
          <ItemsTable rows={items} />
        </div>
      </Layout>
    </div>
  );
};

export default App;
