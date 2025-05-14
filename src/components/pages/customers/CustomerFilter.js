import React, { useState } from "react";
import { Box, Select, MenuItem, FormControl } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  height: "68px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  padding: "0 16px",
  width: "212px",
}));

function CustomerFilter() {
  const [filter, setFilter] = useState("filter");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <StyledBox>
      <FormControl fullWidth variant="standard">
        <Select
          value={filter}  
          onChange={handleChange} 
          disableUnderline
          sx={{
            fontSize: 16,
            fontFamily: 'Barlow, sans-serif',
            '& .MuiSelect-select': {
              paddingLeft: 0,
            },
          }}
        >
          <MenuItem value="filter">Filter</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="id">ID</MenuItem>
        </Select>
      </FormControl>
    </StyledBox>
  );
}

export default CustomerFilter;
