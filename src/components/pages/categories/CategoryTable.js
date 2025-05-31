import React, { useState } from "react";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function CategoryTable({ categories, updateCategory, isLoading, deletyCategory }) {
  const [dialogState, setDialogState] = useState({
    open: false,
    categoryId: null,
  });

  const handleDeleteConfirm = () => {
    if (dialogState.categoryId) {
      deletyCategory(dialogState.categoryId);
      setDialogState({ open: false, categoryId: null });
    }
  };

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell sx={{ textAlign: "end", paddingRight: "40px" }} colSpan={2}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Yuklanmoqda...
                </TableCell>
              </TableRow>
            ) : categories.length > 0 ? (
              categories.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell>{cat.id}</TableCell>
                  <TableCell>{cat.attributes?.name || cat.name}</TableCell>
                  <TableCell>{cat.attributes?.description || cat.description || "-"}</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "end",
                    }}
                  >
                    <CustomBtnFood
                      onClick={() => updateCategory(cat)}
                      back="#FF5B5B26"
                      img="/foodicon2.png"
                      text="Edit"
                    />
                    <CustomBtnFood
                      onClick={() => setDialogState({ open: true, categoryId: cat.documentId })}
                      back="#2D9CDB26"
                      img="/foodIcon2.png"
                      text="Delete"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Hech qanday category topilmadi
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* Dialog */}
      <Dialog
        open={dialogState.open}
        onClose={() => setDialogState({ open: false, categoryId: null })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete this category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogState({ open: false, categoryId: null })}>
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CategoryTable;
