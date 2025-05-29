
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
function CategoryDialog({ dialogState, setDialogState }) {
  const handleDelete = (categoryId) => {
    if (categoryId) {
      fetch(`http://192.168.100.109:1337/api/categories/${categoryId}`, {
        method: "DELETE",
      })
        .then((res) => {
          console.log("delete:", res);
          if (res.ok) {
            setDialogState({
              open: false,
              categoryId: null,
            });
            refetchCategories();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Dialog
        open={dialogState.open}
        onClose={() => {
          setDialogState({
            open: false,
            categoryId: null,
          });
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setDialogState({
                open: false,
                categoryId: null,
              })
            }
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(dialogState.categoryId)}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CategoryDialog;
