import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
function CategoryDialog({ dialogState, setDialogState, deletyCategory, categories }) {
  
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
            onClick={() => deletyCategory(categories.categoryId)}
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
