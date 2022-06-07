import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccordionComp from "../Accordion/Accordion";

export default function MainSec7() {
  return (
    <Box>
      <Container>
        <Box sx={{ width: "520px" }}>
          <Typography
            variant="h4"
            textAlign="start"
            sx={{ fontFamily: '"EB Garamond", serif' }}
          >
            - FAQ
          </Typography>
          <Typography
            sx={{ fontFamily: "'Open Sans', sans-serif", color: "#000000CC" }}
          >
            Ini yang biasa mereka tanyakan sebelum membeli apartemen di
            Greenpark Jogja Apartment
          </Typography>
        </Box>

        <Box>
          <AccordionComp />
        </Box>
      </Container>
    </Box>
  );
}
