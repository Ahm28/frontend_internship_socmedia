import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CardSec2({ image, title }) {
  return (
    <Grid item sx={3}>
      <Box
        sx={{
          width: "270px",
          background:
            "linear-gradient(89.76deg, #D3DBD4 1.34%, #FFFFFF 99.65%)",
          boxShadow: "-4px 4px 24px rgba(0, 0, 0, 0.15)",
          borderRadius: "20px",
        }}
      >
        <img
          src={`/assets/image/${image}.png`}
          alt="pict card"
          width="270px"
          style={{ borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }}
        />
        <Box>
          <Typography
            sx={{ p: 1, fontFamily: "'EB Garamond', serif" }}
            textAlign="center"
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
