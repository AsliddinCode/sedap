import React from "react";
import PageTitle from "@/components/common/PageTitle";
import Table from "./Table";
import Calendar from "@/components/common/Calendar";
import Status from "@/components/common/Status";
import { Box, Stack } from "@mui/material";

function OrdersList() {
  return (
    <>
      <Box
        sx={{
          fontFamily: '"Barlow", sans-serif',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        <PageTitle
          title="Your Orders"
          subtitle="This is your order list data"
        />
        <Stack direction="row" spacing={2}>
          <Status />
          <Calendar />
        </Stack>
      </Box>
      <Table />
    </>
  );
}

export default OrdersList;
