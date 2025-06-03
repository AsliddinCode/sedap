import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function TypeForm({
  onCreate,
  type,
  onUpdate,
  data,
}) {
  const [form, setForm] = useState({
    documentId: null,
    name: "",
    category: [],
  });
  const handleCancel = (e) => {
    e.preventDefault();
    if (form.documentId) {
      setForm({
        documentId: null,
        name: "",
        category: [],
      });
    }
  };

  useEffect(() => {
    if (type) {
      setForm({
        documentId: type.documentId,
        name: type.name,
        category: type.category,
      });
    }
  }, [type]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setForm((prev) => ({
        ...prev,
        category: typeof value === "string" ? value.split(",") : value,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.documentId) {
      onUpdate(form);
    } else {
      onCreate(form);
    }
    setForm({
      documentId: null,
      name: "",
      category: [],
    });
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <TextField
            label="Type nomi"
            name="name"
            value={form.name}
            onChange={handleChange}
            sx={{ flexGrow: 1, minWidth: 200 }}
            disabled={loading}
          />

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="select-category-label">Category</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              name="category"
              value={form.category}
              onChange={handleChange}
              input={<OutlinedInput label="Category" />}
            >
              {data.map((typeItem) => (
                <MenuItem key={typeItem.documentId} value={typeItem.documentId}>
                  {typeItem.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            {form.documentId ? "update" : "create"}
          </Button>

          {form.documentId && (
            <IconButton color="error" onClick={handleCancel} disabled={loading}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </form>
  );
}