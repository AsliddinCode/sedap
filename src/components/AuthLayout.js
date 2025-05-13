import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";

export default function AuthLayout({ title, children }) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}