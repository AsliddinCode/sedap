import React from "react";
import { Box, Typography } from "@mui/material";

function PageTitle({ title, subtitle }) {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ marginBottom: "16px", fontWeight: 600, fontFamily: "Barlow, sans-serif" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#A3A3A3", fontFamily: "Barlow, sans-serif" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default PageTitle;
