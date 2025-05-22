import { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "@/components/common/layouts/MainLayout";
import useFetchApiItems from "@/hooks/useFetchApiItems";
import {
  TextField,
  Button,
  Box,
  List,
  ListItem,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

export default function Categories() {
  const [foundRestaurant, setFoundRestaurant] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [newCategoryInternalName, setNewCategoryInternalName] = useState("");

  const [categories, isLoading, refetchCategories] = useFetchApiItems(
    foundRestaurant ? "/categories" : null,
    foundRestaurant
      ? {
          filters: {
            restaurant: {
              documentId: foundRestaurant.documentId,
            },
          },
          key: "restaurant",
        }
      : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFoundRestaurant({ documentId: "abc123" });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) {
      alert("Kategoriya nomi bo'sh bo'lishi mumkin emas!");
      return;
    }

    try {
      await axios.post("/categories", {
        name: newCategoryName,
        description: newCategoryDescription,
        internalName: newCategoryInternalName,
        restaurant: foundRestaurant.documentId,
      });

      setNewCategoryName("");
      setNewCategoryDescription("");
      setNewCategoryInternalName("");
      setShowForm(false);
      refetchCategories();
    } catch (error) {
      console.error("Kategoriya qo'shishda xato:", error);
      alert("Kategoriya qo'shishda xato yuz berdi");
    }
  };

  if (!foundRestaurant) {
    return (
      <>
        <Head>
          <title>Kategoriyalar</title>
        </Head>
        <Box
          sx={{
            maxWidth: 600,
            margin: "auto",
            padding: 2,
            textAlign: "center",
            mt: 5,
          }}
        >
          <CircularProgress />
          <p>Yuklanmoqda...</p>
        </Box>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Kategoriyalar</title>
      </Head>
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!showForm && (
          <Button
            variant="contained"
            onClick={() => setShowForm(true)}
            sx={{ mb: 4 }}
          >
            Kategoriyani qo'shish
          </Button>
        )}

        {showForm && (
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            onSubmit={(e) => {
              e.preventDefault();
              handleAddCategory();
            }}
          >
            <TextField
              label="Kategoriya nomi"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              variant="outlined"
              required
              autoFocus
            />
            <TextField
              label="Kategoriya tavsifi"
              value={newCategoryDescription}
              onChange={(e) => setNewCategoryDescription(e.target.value)}
              variant="outlined"
              multiline
              rows={2}
            />
            <TextField
              label="Ichki nom (internalName)"
              value={newCategoryInternalName}
              onChange={(e) => setNewCategoryInternalName(e.target.value)}
              variant="outlined"
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button type="submit" variant="contained" color="success">
                Qo'shish
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setShowForm(false)}
              >
                Bekor qilish
              </Button>
            </Box>
          </Box>
        )}

        {isLoading && <CircularProgress />}

        {!isLoading && (!categories || categories.length === 0) && (
          <p>Kategoriya topilmadi.</p>
        )}

        <List>
          {categories &&
            categories.map((category) => (
              <ListItem key={category.id || category.attributes?.id}>
                {category.attributes?.name || "Noma'lum nom"}
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
}

Categories.getLayout = (pageProps) => (
  <MainLayout>
    <Categories {...pageProps} />
  </MainLayout>
);
