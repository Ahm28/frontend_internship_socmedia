import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function MainSec2() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #3F6745 0%, #609468 100%)",
        display: "flex",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Typography color="white" sx={{ width: "500px" }} textAlign="center">
        Tidak ada lagi rasa jenuh ketika anda mendapatkan suasana hunian yang
        tepat. Nuansa alam yang melekat dan pemandangan yang indah membuat
        suasana dan aura Greenpark Jogja Apartment menjadi lebih nyaman untuk
        dihuni.
      </Typography>
    </Box>
  );
}
