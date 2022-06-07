import React from "react";
import Grid from "@mui/material/Grid";
import CardComp from "../Card/CardComp";

export default function MainSec3() {
  return (
    <Grid container spacing={2} sx={{ justifyContent: "center", mt: 8 }}>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
        <CardComp
          image="merapi"
          desc={[
            "Konsep apartemen yang menyatu dengan alam dengan hamparan sawah, sungai kecil mengalir, dan view gunungmerapi.",
            "Low pollution. Di areal keramaian kota namun jauh dari polusi udara memungkinkan sebagai hunian yang nyaman.",
          ]}
        />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
        <CardComp
          image="room"
          desc={[
            "Unit apartemen fully furnished menggunakan berbagai konsep.",
            ' Salah satu konsep terbaik apartemen, "smart living" tampilan minimalis dengan perabotan mebel yang multi-fungsi sehingga ruangan tampak lebih luas.',
          ]}
        />
      </Grid>
    </Grid>
  );
}
