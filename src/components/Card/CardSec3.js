import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

export default function CardSec3({ image, title, desc }) {
  return (
    <Grid item xs={3}>
      <Box>
        <Box>
          <img
            src={`/assets/image/${image}.png`}
            alt="image"
            width="250px"
            style={{ borderBottomLeftRadius: "20px" }}
          />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "'EB Garamond', serif", mt: 1 }}
          >
            {title}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography variant="caption">{desc}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
