import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import { Typography, Box } from "@mui/material";
import TypeTable from "@/components/pages/types/TypeTable";
import TypeForm from "@/components/pages/types/TypeForm";
import useTypes from "@/hooks/useTypes";

export default function TypesPage() {
  const [
    { types, isLoading, error, categories, reFetch },
    { getType, createType, updateType, deleteType },
  ] = useTypes();

  const [editType, setEditType] = useState(null);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Types Page
      </Typography>

      <TypeForm
        onCreate={createType}
        onRefetch={reFetch}
        type={editType}
        onUpdate={updateType}
        data={categories}
      />

      <TypeTable
          types={types} 
        onDelete={deleteType}
        onRefetch={reFetch}
        setEditType={setEditType}
      />
    </Box>
  );
}

TypesPage.getLayout = (pageProps) => (
  <MainLayout>
    <TypesPage {...pageProps} />
  </MainLayout>
);
