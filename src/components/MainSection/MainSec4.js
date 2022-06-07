import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardSec2 from "../Card/CardSec2";

export default function MainSec4() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #3F6745 0%, #609468 100%)",
        p: 4,
        my: 7,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          textAlign="start"
          color="white"
          sx={{ fontFamily: '"EB Garamond", serif' }}
        >
          - Mengapa Green Park Apartemen?
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <CardSec2 image="image 9" title="Perabotan Lengkap" />
            <CardSec2 image="image 9-1" title="Lobby" />
            <CardSec2 image="image 9-2" title="Kolam Renang" />
            <CardSec2 image="image 9-3" title="PEmandangan Terbaik" />
            <CardSec2 image="image 9-4" title="Lintasan Joging" />
            <CardSec2 image="image 9-5" title="Sky View Cafe" />
            <CardSec2 image="image 9-6" title="Eiji Mentai Resto di Lobby" />
            <CardSec2 image="image 9-7" title="Area Fitnes" />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
