import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import CategoryDialog from "@/components/pages/categories/Dialog";
import { Typography, Box } from "@mui/material";
import CategoryTable from "@/components/pages/categories/CategoryTable";
import useCurrentUser from "@/hooks/useCurrentUser";
import CategoryForm from "@/components/pages/categories/CategoryForm";
import useCategories from "@/hooks/useCategories";

export default function CategoriesPage() {
  const user = useCurrentUser();
  const [{categories, isLoading, reFetch},{updateCategory, deletyCategory}] = useCategories();
  const [dialogState, setDialogState] = useState({
    open: false,
    categoryId: null,
  });

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3}>
        {user?.email} restoranining Categories
      </Typography>
      <CategoryForm reFetch={reFetch}/>
      <CategoryTable
        setDialogState={setDialogState}
        categories={categories}
        updateCategory={updateCategory}
        isLoading={isLoading}
        deletyCategory={deletyCategory}
      />
      <CategoryDialog
        dialogState={dialogState}
        setDialogState={setDialogState}
        deletyCategory={deletyCategory}
        categories={categories}
      />
    </Box>
  );
}

CategoriesPage.getLayout = (pageProps) => (
  <MainLayout>
    <CategoriesPage {...pageProps} />
  </MainLayout>
);
