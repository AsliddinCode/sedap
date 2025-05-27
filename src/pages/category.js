import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Box, Snackbar } from "@mui/material";
import MainLayout from "@/components/common/layouts/MainLayout";
import useCategory from '@/hooks/useCategory'


export default function Category() {
  const [ handleCreateCategory] = useCategory();
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [cate, setCate] = useState({
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateCategory(cate);
    setIsSnackOpen(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        margin: "auto",
        padding: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
      }}
    >
      <h1 style={{ color: "#00B074", marginBottom: "30px" }}>Category</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={cate?.name || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Description"
              variant="outlined"
              name="description"
              value={cate?.description || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00B074",
                color: "#fff",
                padding: "14px 24px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 176, 116, 0.3)",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#009d60",
                  boxShadow: "0 6px 14px rgba(0, 157, 96, 0.4)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                  boxShadow: "0 3px 8px rgba(0, 157, 96, 0.3)",
                },
              }}
            >
              Click me
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackOpen}
        onClose={() => setIsSnackOpen(false)}
        message="Food is created"
      />
    </Box>
  );
}

Category.getLayout = (pageProps) => (
  <MainLayout>
    <Category {...pageProps} />
  </MainLayout>
);
