import { FC, useState } from "react";
import "./App.css";
import { useFormik } from "formik";

import Layout from "./components/template/Layout";
import { Title } from "./components/atoms/Title";
import ItemsTable from "./components/molecules/table/Table";
import Form from "./components/molecules/form/Form";

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
