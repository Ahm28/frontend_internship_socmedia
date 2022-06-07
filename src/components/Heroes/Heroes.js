import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Heroes() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 5,
            mx: "auto",
            width: "600px",
          }}
        >
          <Typography
            variant="h2"
            textAlign="start"
            sx={{ fontFamily: '"EB Garamond", serif', color: "#3F6745" }}
          >
            Dreamland{" "}
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              color: "#3F6745",
              fontWeight: "light",
            }}
          >
            of Jogja for{" "}
          </Typography>
          <Typography
            variant="h2"
            textAlign="end"
            sx={{ fontFamily: '"EB Garamond", serif', color: "#3F6745" }}
          >
            Health Living.{" "}
          </Typography>
        </Box>
        <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_X-cgSkH4bA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width="100%"
            height="600px"
            style={{ borderRadius: "40px" }}
          ></iframe>
        </Box>
      </Container>
    </>
  );
}
