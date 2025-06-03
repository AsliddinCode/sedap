import React from "react";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function TypeTable({ types, onDelete, onRefetch, setEditType }) {
  const handleEdit = (type) => {
    setEditType(type);
    console.log("type table edit:", type);
  };

  const handleDelete = (type) => {
    onDelete(type.documentId);  
    onRefetch();
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell
              sx={{ textAlign: "end", paddingRight: "40px" }}
              colSpan={2}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {types.length > 0 ? (
            types.map((type) => (
              <TableRow key={type.id || type.documentId}>
                <TableCell>{type.id || type.documentId}</TableCell>
                <TableCell>{type.name || "-"}</TableCell>
                <TableCell>{type.category?.name || "-"}</TableCell>
                <TableCell
                  sx={{ display: "flex", gap: "20px", justifyContent: "end" }}
                >
                  <CustomBtnFood
                    onClick={() => handleEdit(type)}
                    back="#FF5B5B26"
                    img="/foodIcon2.png"
                    text="Edit"
                  />
                  <CustomBtnFood
                    onClick={() => handleDelete(type)}
                    back="#2D9CDB26"
                    img="/foodIcon3.png"
                    text="Delete"
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                Hech qanday type topilmadi
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TypeTable;
