import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "../Carousel/Carousel";

export default function MainSec6() {
  return (
    <Container sx={{ my: 8 }}>
      <Box sx={{ width: "520px" }}>
        <Typography
          variant="h4"
          textAlign="start"
          sx={{ fontFamily: '"EB Garamond", serif' }}
        >
          - Apa kata mereka ?
        </Typography>
        <Typography
          sx={{ fontFamily: "'Open Sans', sans-serif", color: "#000000CC" }}
        >
          Mereka adalah pelanggan kami yang sekarang telah memiliki hunian di
          Greenpark Jogja Apartment.
        </Typography>
      </Box>

      <Box>
        <Carousel />
      </Box>
    </Container>
  );
}
