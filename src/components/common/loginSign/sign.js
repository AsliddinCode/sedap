import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import Link from "next/link";

export default function SignUp() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/back.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 5,
          height: "auto",
          maxHeight: "850px",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundColor: "white",
            backgroundPosition: "center",
            width: 150,
            height: 150,
            borderRadius: "50%",
            margin: "0 auto 20px",
            border: "4px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            },
          }}
        ></Box>

        <Typography variant="h4" align="center" fontWeight="bold" sx={{ color: "white" }}>
          Sign Up
        </Typography>
        
        <TextField
          label="Email"
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        />

        <TextField
          label="Username"
          placeholder="Enter your username"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        />

        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        />

        <TextField
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginBottom: 2,
            padding: "12px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "blue",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            },
            color: "white",
          }}
        >
          Sign Up
        </Button>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/login" passHref>
            <Typography
              variant="body2"
              color="primary"
              sx={{ cursor: "pointer", color: "blue" }}
            >
              Already have an account? Log In
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}
