import React, { FC } from "react";
import styled from "styled-components";

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

const StyledTableCell = styled(TableCell)`
  max-width: 260px;
`;

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
      <TableBody style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
        {rows.map((row) => (
          <TableRow
            style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            key={row.name}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell
              align="right"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            >
              {row.name}
            </TableCell>
            <StyledTableCell
              align="right"
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              <span style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                {row.description}
              </span>
            </StyledTableCell>
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
    <TableContainer sx={{ minWidth: 700, maxWidth: 800 }} component={Paper}>
      <Table>
        <Head />
        <Body rows={rows} />
      </Table>
    </TableContainer>
  );
};

export default ItemsTable;
