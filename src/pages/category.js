
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
  const [handleCreateCategory] = useCategories();
  const [cate, setCate] = useState({
    name: "",
    description: "",
  });

  // const [editCategory, setEditCategory] = useState(null);

  const [dialogState, setDialogState] = useState({
    open: false,
    categoryId: null,
  });

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3}>
        {user?.email} restoranining Categories
      </Typography>
      <CategoryForm />
      <CategoryTable setDialogState={setDialogState} />
      <CategoryDialog
        dialogState={dialogState}
        setDialogState={setDialogState}
      />
    </Box>
  );
}

CategoriesPage.getLayout = (pageProps) => (
  <MainLayout>
    <CategoriesPage {...pageProps} />
  </MainLayout>
);
