import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CardSec from "../Card/CardSec";

export default function MainSec1() {
  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Box sx={{ width: "520px" }}>
          <Typography
            variant="h4"
            textAlign="start"
            sx={{ fontFamily: '"EB Garamond", serif' }}
          >
            - Mengapa Green Park Apartemen?
          </Typography>
          <Typography
            sx={{ fontFamily: "'Open Sans', sans-serif", color: "#000000CC" }}
          >
            Ini alasan Mengapa anda perlu memiliki hunian di Greenpark Jogja
            Apartemen.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
            justifyContent: "center",
          }}
        >
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <CardSec
              title="Bonus & Cahsback"
              icon="BonusIcon"
              desc="Dapatkan bonus dan cashback menarik dari kami untuk setiap pembelian Apartemen ...."
            />
            <CardSec
              title="Pelayanan Terbaik"
              icon="HandIcon"
              desc="Kami selalu memberikan pelayanan terbaik untuk setiap customer kami."
            />
            <CardSec
              title="Harga = Kualitas"
              icon="CoinIcon"
              desc="Apa yang anda bayar, sesuai dengan yang anda dapatkan."
            />
            <CardSec
              title="Lokasi Strategis"
              icon="MapIcon"
              desc="Dekat dengan lokasi terkenal di Jogja, membuat anda menjadi lebih mudah dalam menjangkaunya."
            />
            <CardSec
              title="Objek Investasi"
              icon="CartIcon"
              desc="Kapan lagi investasi properti dikota besar dengan harga dan kualitas yang sepadan ?"
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
