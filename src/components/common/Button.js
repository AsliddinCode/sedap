import React from "react";
import { Button as MuiButton } from "@mui/material";

function Button({ Customers }) {
  return (
    <MuiButton
      variant="outlined"
      sx={{
        maxWidth: "96px",
        width: "100%",
        height: "33px",
        borderRadius: "6px",
        fontSize: "14px",
        fontFamily: "Barlow, sans-serif",
        color: "#00B074",
        backgroundColor: "#00B07426",
        borderColor: "#00B07426",
        textTransform: "none",
        '&:hover': {
          backgroundColor: "#00B07440", 
          borderColor: "#00B074",
        },
      }}
    >
      {Customers}
    </MuiButton>
  );
}

export default Button;
