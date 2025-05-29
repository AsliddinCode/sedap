import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import useCurrentUser from "@/hooks/useCurrentUser";
import useCategories from "@/hooks/useCategories";

export default function CategoryForm({
  editCategory,
  onCancel,
  foundRestaurant,
  onSuccess,
  refetchCategories,
}) {
  const [handleCreateCategory] = useCategories();
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
    e.preventDefault();
    handleCreateCategory(form);
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useCurrentUser();

  useEffect(() => {
    if (editCategory) {
      setForm({
        documentId: editCategory.documentId || null,
        name: editCategory.name || "",
        description: editCategory.description || "",
      });
    } else {
      setForm({
        documentId: null,
        name: "",
        description: "",
      });
    }
  }, [editCategory]);

  const validateForm = () => {
    if (!form.name.trim()) {
      setError("Category nomi kerak");
      return false;
    }
    if (!user.restaurantId) {
      setError("Restoran topilmadi");
      return false;
    }
    return true;
  };

  const saveCategory = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError(null);

    const payload = {
      data: {
        name: form.name.trim(),
        description: form.description.trim(),
        internalName: `${foundRestaurant.name}_${form.name}`.replace(
          /\s+/g,
          ""
        ),
        restaurant: foundRestaurant.documentId,
      },
    };

    const url = form.documentId
      ? `http://192.168.100.109:1337/api/categories/${form.documentId}`
      : `http://192.168.100.109:1337/api/categories`;

    const method = form.documentId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error?.message || "Category saqlashda xatolik yuz berdi"
        );
      }

      setForm({ documentId: null, name: "", description: "" });
      if (onSuccess) onSuccess(data);
      if (refetchCategories) refetchCategories();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            onClick={handleSubmit}
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