import {
  Container,
  Typography,
  Grid,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function MainSec8() {
  return (
    <Box sx={{ my: 8 }}>
      <Container>
        <Box sx={{ width: "520px" }}>
          <Typography
            variant="h4"
            textAlign="start"
            sx={{ fontFamily: '"EB Garamond", serif' }}
          >
            - Hubungi kami
          </Typography>
          <Typography
            sx={{ fontFamily: "'Open Sans', sans-serif", color: "#000000CC" }}
          >
            Punya pertanyaan yang masih belum terjawab ? Kirim pertanyaan anda
            melalui form dibawah.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ my: 5 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.144354192763!2d110.41646991450871!3d-7.774513779280984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f34769ef97%3A0x41c4ce022295419e!2sGreen%20Park%20Apartment!5e0!3m2!1sid!2sid!4v1654636457722!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ my: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Lokasi
                </Typography>
                <Typography
                  color="#00000066"
                  sx={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Jl. Babarsari, Tambak Bayan, Maguwoharjo, Kec. Depok,
                  Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Kontak
                </Typography>
                <Box>
                  <Frame
                    icon={
                      <PhoneIcon sx={{ width: "16px", color: "#3F6745" }} />
                    }
                    info="0274 4333 789"
                  />
                  <Frame
                    icon={
                      <PhoneIcon sx={{ width: "16px", color: "#3F6745" }} />
                    }
                    info="0274 489 779"
                  />
                  <Frame
                    icon={
                      <WhatsAppIcon sx={{ width: "16px", color: "#3F6745" }} />
                    }
                    info="0818377700"
                  />
                  <Frame
                    icon={
                      <InstagramIcon sx={{ width: "16px", color: "#3F6745" }} />
                    }
                    info="greenparkjogjaapartment"
                  />
                  <Frame
                    icon={
                      <EmailIcon sx={{ width: "16px", color: "#3F6745" }} />
                    }
                    info="greenpark.jogja@hotmail.com"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: "588px",
                  color: "white",
                  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
                  py: 2,
                  px: 4,
                }}
              >
                <Box component="form">
                  <TextField
                    required
                    id="outlined-required"
                    label="Nama Lengkap"
                    placeholder="Masukkan nama lengkap anda"
                    sx={{ width: "100%", my: 2 }}
                    name="username"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="No Telp"
                    placeholder="Masukkan no whatsapp anda"
                    sx={{ width: "47%", my: 2 }}
                    name="username"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="Masukkan alamat email anda"
                    sx={{ width: "47%", my: 2, ml: 3 }}
                    name="username"
                  />
                  <TextField
                    required
                    placeholder="Dimana anda tinggal sekarang ?"
                    id="outlined-required"
                    label="Alamat"
                    sx={{ width: "100%", my: 2 }}
                    name="username"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Pertanyaan"
                    placeholder="Apa yang ingin anda tanyakan ?"
                    multiline
                    rows={4}
                    sx={{ width: "100%", my: 2 }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(90deg, #3F6745 0%, #609468 100%)",
                      }}
                    >
                      Kirim
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

const Frame = ({ icon, info }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "247px",
        height: "38px",
        alignItems: "center",
        background: "linear-gradient(90deg, #3F6745 0%, #609468 100%)",
        borderRadius: "14px",
        my: 1,
      }}
    >
      <Box
        sx={{
          width: "27px",
          height: "27px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: 1,
          background: " #FFFFFF",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.08)",
          borderRadius: "9px",
        }}
      >
        {icon}
      </Box>
      <Typography color="#fff" variant="subtitle2">
        {info}
      </Typography>
    </Box>
  );
};
