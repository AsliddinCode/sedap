import React from "react";
import { Box, Typography } from "@mui/material";
import PageTitle from "@/components/common/PageTitle";
import CustomerTable from "./CustomerTable";
import CustomerFilter from "./CustomerFilter";

export default function CustomersList() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: '"Barlow", sans-serif',
          marginBottom: "40px", 
        }}
      >
        <PageTitle
          title="General Customer"
          subtitle="Here is your general customers list data"
        />
        <Box sx={{ display: "flex" }}>
          <CustomerFilter />
        </Box>
      </Box>
      <Box className="tableData">
        <CustomerTable />
      </Box>
    </>
  );
}
