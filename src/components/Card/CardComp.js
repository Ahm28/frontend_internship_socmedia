import { Box } from "@mui/system";
import React from "react";

export default function CardComp({ image, desc }) {
  return (
    <Box
      sx={{
        width: "350px",
        backgroundColor: "white",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ mx: "7%", mt: "-60px" }}>
        <img src={`/assets/image/${image}.png`} alt="pict card" width="300px" />
      </Box>
      <Box>
        <ol>
          {desc.map((des) => (
            <li>{des}</li>
          ))}
        </ol>
      </Box>
    </Box>
  );
}
