import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";
import useFoods from "@/hooks/useFoods";
import useCategory from "@/hooks/useCategories";
import useTypes from "@/hooks/useTypes";
import { useRouter } from "next/router";

function FoodForm({ title, btnText, food }) {
  const [{}, { updateFood, createFood }] = useFoods();
  const [{ types }] = useTypes();
  const router = useRouter();
  const [formData, setFormData] = useState({
    documentId: null,
    name: "",
    image: "",
    type: "",
    price: "",
    comment: "",
  });

  useEffect(() => {
    if (food) {
      console.log("gjhgj", food);
      setFormData({
        documentId: food.documentId,
        name: food.name ?? '',
        image: food.image ?? '',
        type: food.type?.documentId ?? "",
        price: food.price ?? '',
        comment: food.comment ?? '',
      });
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name , value , 'sdf');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
      comment: formData.comment,
      type: formData.type,
    };
    if (formData.documentId) {
      await updateFood({ ...formData });
      router.push(`/foods/${formData.documentId}`);
    } else {
      const newFood = createFood(values);
      router.push(`/foods/${newFood?.documentId}`);
    }
  };

  if (!formData) {
    return null;
  }

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
      <h1
        style={{
          color: "#00B074",
          marginBottom: "30px",
        }}
      >
        {title}
      </h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item size={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#00B074",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00B074",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00B074",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00B074",
                  },
                },
              }}
            />
          </Grid>

          {/* Type */}
          <Grid item size={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.type}
                label="Type"
                onChange={(e) => {
                  handleChange({
                    target: {
                      name: "type",
                      value: e.target.value,
                    },
                  });
                }}
              >
                {[...(types ?? [])].map((type) => (
                  <MenuItem key={type.id} value={type.documentId}>
                    {type.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Price */}
          <Grid item size={6}>
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#00B074",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00B074",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00B074",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00B074",
                  },
                },
              }}
            />
          </Grid>

          {/* image field */}
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Image"
              variant="outlined"
              name="image"
              value={formData.image}
              onChange={handleChange}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#00B074",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00B074",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00B074",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00B074",
                  },
                },
              }}
            />
          </Grid>

          {/* Comment */}
          <Grid item size={12}>
            <TextField
              fullWidth
              label="Comment"
              variant="outlined"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              multiline
              rows={4}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "#00B074",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#00B074",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00B074",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00B074",
                  },
                },
              }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00B074",
                "&:hover": {
                  backgroundColor: "#009d60",
                },
                padding: "14px",
                fontSize: "16px",
              }}
            >
              {btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
export default FoodForm;
