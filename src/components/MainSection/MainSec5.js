import { Box, Typography, Container, Grid } from "@mui/material";
import React from "react";
import CardSec3 from "../Card/CardSec3";

export default function MainSec5() {
  return (
    <Box>
      <Container>
        <Box sx={{ width: "520px" }}>
          <Typography
            variant="h4"
            textAlign="start"
            sx={{ fontFamily: '"EB Garamond", serif' }}
          >
            - Tipe Unit
          </Typography>
          <Typography
            sx={{ fontFamily: "'Open Sans', sans-serif", color: "#000000CC" }}
          >
            Konsep apartemen yang menyatu dengan alam dengan hamparan sawah,
            sungai kecil mengalir, dan view gunung merapi.
          </Typography>
        </Box>
        <Box sx={{ my: 3 }}>
          <Grid container spacing={2}>
            <CardSec3
              image="image 6"
              title="Unit Studio"
              desc="7m x 3.5m | 1 Kamar | 1 Dapur | 1 Km. Mandi | 1 Lantai"
            />
            <CardSec3
              image="image 6-1"
              title="Unit 1 BR"
              desc="7m x 4.5m |
              2 Kamar |
              Pantry |
              1 Km. Mandi |
              1 Lantai |
              R. Keluarga"
            />
            <CardSec3
              image="image 6-2"
              title="Unit 2 BR"
              desc="7m x 4.5m |
              2 Kamar |
              Pantry |
              1 Km. Mandi |
              1 Lantai |
              R. Keluarga"
            />
            <CardSec3
              image="image 6-3"
              title="Unit Duplex"
              desc="7m x 4.5m |
              2 Kamar |
              Pantry |
              1 Km. Mandi |
              1 Lantai |
              R. Keluarga"
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
