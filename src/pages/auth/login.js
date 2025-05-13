import React, { useState } from "react";
import { useRouter } from "next/router";
import {Box,TextField,Button,Typography,Paper,Alert,} from "@mui/material";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const res = await response.json();
        const { user, jwt } = res.body;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("jwt", jwt);
        router.push("/dashboard");
      } else {
        setError("qaytadan tekshir");
      }
    } catch (err) {
      setError("An error occurred while logging in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          backgroundImage: "url('/back.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 4,
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
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "none",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          )}

          <Box
            sx={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              margin: "0 auto",
              backgroundColor: "white",
              border: "4px solid rgba(0, 0, 0, 0.2)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          />

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            Log In
          </Typography>

          <TextField
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            sx={{
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
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
            type="submit"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{
              padding: "12px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "blue",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              },
              color: "white",
            }}
          >
            {loading ? "Kirilmoqda..." : "Kirish"}
          </Button>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link href="/auth/register" passHref>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", color: "skyblue" }}
              >
                Forgot Password?
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </AuthLayout>
  );
}
