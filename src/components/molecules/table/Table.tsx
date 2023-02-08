import { FC } from "react";
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
import { ItemProps, ItemsProps } from "../../../types/item-types";

const StyledTableCell = styled(TableCell)`
  max-width: 260px;
`;

const ItemsTable: FC<ItemsProps> = ({ items, handleRemoval }: any) => {
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

  const Body: FC<ItemsProps> = ({ items }) => {
    return (
      <TableBody style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
        {items.map((item: ItemProps) => (
          <TableRow
            style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            key={item.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell
              align="right"
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            >
              {item.name}
            </TableCell>
            <StyledTableCell align="right">
              <span style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                {item.description}
              </span>
            </StyledTableCell>
            <TableCell align="right">
              <IconButton onClick={() => handleRemoval(item.id)}>
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
            <Body items={items} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ItemsTable;
