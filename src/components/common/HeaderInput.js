import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import PageTitle from "./PageTitle";

function HeaderInput() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        p: 2,
      }}
    >
      <PageTitle
        title={"Foods"}
        subtitle={"Here is your menus summary with graph view"}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search here"
          sx={{
            width: 491,
            backgroundColor: "#FFFFFF",
            borderRadius: "14px",
          }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            sx={{
              width: 68,
              height: 68,
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              "&:hover": { backgroundColor: "#F5F5F5" },
            }}
          >
            <img src="/grid.png" alt="" />
          </IconButton>
          <IconButton
            sx={{
              width: 68,
              height: 68,
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
              "&:hover": { backgroundColor: "#F5F5F5" },
            }}
          >
            <img src="/layer.png" alt="" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderInput;
