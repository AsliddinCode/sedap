
import React, { useEffect, useState } from "react";
import useCurrent from "@/hooks/useCurrentUser";
import useFetchApiItems from "@/hooks/useFetchApiItems";
import CustomBtnFood from "@/components/pages/foods/CustomBtnFood";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function CategoryTable({ setDialogState, handleChange, handleSubmit }) {
  const user = useCurrent();

  const [form, setForm] = useState({
    documentId: null,
    name: "",
    description: "",
  });

  // const [foundRestaurant, setFoundRestaurant] = useState(null);

  const [categories, isLoading, refetchCategories] = useFetchApiItems(
    user?.restaurantId
      ? `/categories?filters[restaurant][documentId][$eq]=${user?.restaurantId}`
      : null
  );

  // const [dialogState, setDialogState] = useState({
  //   open: false,
  //   categoryId: null,
  // });

  // useEffect(() => {
  //   if (user?.restaurantId) {
  //     setFoundRestaurant(user.restaurants[0]);
  //   }
  // }, [user]);

  const [editCategory, setEditCategory] = useState(null);

  function cancelEdit() {
    setEditCategory(null);
    setForm({ name: "", description: "" });
  }

  useEffect(() => {
    setForm(editCategory);
  }, [editCategory]);

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell
                sx={{ textAlign: "end", paddingRight: "40px" }}
                colSpan={2}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Yuklanmoqda...
                </TableCell>
              </TableRow>
            ) : categories.length > 0 ? (
              categories.map((cat) => (
                <TableRow key={cat.id}>
                  <TableCell>{cat.id}</TableCell>
                  <TableCell>{cat.attributes?.name || cat.name}</TableCell>
                  <TableCell>
                    {cat.attributes?.description || cat.description || "-"}
                  </TableCell>
                  <TableCell
                    sx={{ display: "flex", gap: "20px", justifyContent: "end" }}
                  >
                    <CustomBtnFood
                      onClick={() => setEditCategory(cat)}
                      back="#FF5B5B26"
                      img="/foodicon2.png"
                      text="Edit"
                    />
                    <CustomBtnFood
                      onClick={() =>
                        setDialogState({
                          open: true,
                          categoryId: cat.documentId,
                        })
                      }
                      back="#2D9CDB26"
                      img="/foodIcon3.png"
                      text="Delete"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Hech qanday category topilmadi
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default CategoryTable;
