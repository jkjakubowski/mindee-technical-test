import React, { FC, useState } from "react";
import "./App.css";

import { TextField, Button } from "@mui/material";

import ItemsTable from "./components/table/Table";

const App: FC = () => {
  const [items, setItems] = useState([{ name: "toto", description: "toto" }]);

  return (
    <div className="App">
      <div>
        <TextField id="name" variant="outlined" label="Item's name"></TextField>
        <TextField
          id="description"
          variant="outlined"
          label="Item's description"
        ></TextField>
        <Button variant="contained">Submit item</Button>
      </div>
      <div>
        <ItemsTable rows={items} />
      </div>
    </div>
  );
};

export default App;
