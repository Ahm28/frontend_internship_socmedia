import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CardSec({ title, icon, desc }) {
  return (
    <Grid item xs={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mx: 8,
        }}
      >
        <Box
          sx={{
            width: "60px",
            height: "60px",
            backgroundColor: "#3F6745",
            borderRadius: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <img src={`/assets/icon/${icon}.svg`} alt="icon" />
        </Box>
        <Typography
          textAlign="center"
          sx={{ fontFamily: '"EB Garamond", serif' }}
        >
          {title}
        </Typography>
        <Typography
          textAlign="center"
          variant="caption"
          sx={{ fontFamily: "'Open Sans', sans-serif", color: "#0A2233CC" }}
        >
          {desc}
        </Typography>
      </Box>
    </Grid>
  );
}
