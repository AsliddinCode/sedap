import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import { Typography, Box } from "@mui/material";
import CategoryTable from "@/components/pages/categories/CategoryTable";
import CategoryForm from "@/components/pages/categories/CategoryForm";
import useCategories from "@/hooks/useCategories";

export default function CategoriesPage() {
  const [
    { categories,  reFetch },
    { createCategory, updateCategory, deletyCategory },
  ] = useCategories();
  const [cat, setCat] = useState(null);
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3}>
        restoranining Categories
      </Typography>
      <CategoryForm
        onCreate={createCategory}
        onRefetch={reFetch}
        category={cat}
        onUpdate={updateCategory}
      />
      <CategoryTable
        categories={categories}
        onDelete={deletyCategory}
        onRefetch={reFetch}
        setCat={setCat}
      />
    </Box>
  );
}

CategoriesPage.getLayout = (pageProps) => (
  <MainLayout>
    <CategoriesPage {...pageProps} />
  </MainLayout>
);
