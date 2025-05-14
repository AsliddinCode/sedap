import React from "react";
import { Box, Stack } from "@mui/material";
import Status from "./Status";
import Calendar from "./Calendar";
import PageTitle from "./PageTitle";

function Allstatus({ id }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={5}
      sx={{ fontFamily: '"Barlow", sans-serif' }}
    >
      <PageTitle title={id} subtitle="This is your order list data" />
      <Stack direction="row" spacing={2}>
        <Status />
        <Calendar />
      </Stack>
    </Box>
  );
}

export default Allstatus;
