import React from "react";
import { Box, TextField, IconButton, Button } from "@mui/material";
import PageTitle from "./PageTitle";
import Image from "next/image";

function HeaderInput(props) {
  const { setSearch, handleClick } = props;
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
          onChange={(e) => setSearch(e.target.value)}
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
            <Image src="/grid.png" alt="" 
            width={24} 
            height={24} />
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
            <Image
              src="/layer.png" 
              alt="Layer Image"
              width={24} 
              height={24} 
            />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            width: "181px",
            height: "68px",
            borderRadius: "14px",
            backgroundColor: "#00B074",
          }}
        >
          New Menu
        </Button>
      </Box>
    </Box>
  );
}

export default HeaderInput;
