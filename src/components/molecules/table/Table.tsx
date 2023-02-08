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
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { HEADLABELS } from "../../../constants";

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
            <StyledTableCell align="right">
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
    <Box className="mt-6" sx={{ width: "100%" }}>
      <Paper
        sx={{
          xs: "100%",
          sm: "calc(50% - 20px)",
          md: "calc(33% - 20px)",
          mb: 2,
          minWidth: 400,
        }}
      >
        <TableContainer>
          <Table sx={{ maxWidth: 1000 }}>
            <Head />
            <Body rows={rows} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ItemsTable;
