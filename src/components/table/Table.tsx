import React, { FC } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { HEADLABELS } from "../../constants";

type RowProps = {
  name: string;
  description: string;
};

type TableProps = {
  rows: RowProps[];
};

const ItemsTable: FC<TableProps> = ({ rows }) => {
  const Head: FC = () => {
    return (
      <TableHead>
        <TableRow>
          {HEADLABELS.map((headLabel) => (
            <TableCell key={headLabel.id} align="right">
              {headLabel.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const Body: FC<TableProps> = ({ rows }) => {
    return (
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <TableContainer sx={{ maxWidth: 700 }} component={Paper}>
      <Table>
        <Head />
        <Body rows={rows} />
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
