import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import useCategories from "@/hooks/useCategories";

export default function CategoryForm() {
  const [, { createCategory }] = useCategories();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    createCategory(form);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <TextField
            label="Category nomi"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ flexGrow: 1, minWidth: 200 }}
            disabled={loading}
          />
          <TextField
            label="Category ta'rifi"
            name="description"
            value={form.description}
            onChange={handleChange}
            sx={{ flexGrow: 2, minWidth: 300 }}
            disabled={loading}
          />
        </Box>

        {error && <Box sx={{ color: "error.main", mb: 1 }}>{error}</Box>}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="contained"
            color={form.documentId ? "warning" : "primary"}
            type="submit"
            disabled={loading}
            sx={{ minWidth: 120 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Qo'shish"
            )}
          </Button>
        </Box>
      </Box>
    </form>
  );
}
