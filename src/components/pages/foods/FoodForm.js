
import React, { useEffect } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import { useState } from "react";

function FoodForm({ title, food, btnText }) {
  const [formData, setFormData] = useState(null);
  console.log("food", food);

  useEffect(() => {
    if (food) {
      setFormData(food);
    } else {
      setFormData(foodInitialValues);
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
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

          {/* Category */}
          <Grid item size={6}>
            <TextField
              fullWidth
              label="Category"
              variant="outlined"
              name="category"
              value={formData.category}
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
            <TextField
              fullWidth
              label="Type"
              variant="outlined"
              name="type"
              value={formData.type}
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

const foodInitialValues = {
  name: "",
  category: "",
  type: "",
  price: "",
  comment: "",
};
