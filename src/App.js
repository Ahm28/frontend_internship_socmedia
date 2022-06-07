import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AppBarComponent from "./components/AppBar/AppBarComponent";
import Heroes from "./components/Heroes/Heroes";
import MainSec1 from "./components/MainSection/MainSec1";
import MainSec2 from "./components/MainSection/MainSec2";
import MainSec3 from "./components/MainSection/MainSec3";
import MainSec4 from "./components/MainSection/MainSec4";
import MainSec5 from "./components/MainSection/MainSec5";
import MainSec6 from "./components/MainSection/MainSec6";
import MainSec7 from "./components/MainSection/MainSec7";
import MainSec8 from "./components/MainSection/MainSec8";

function App() {
  return (
    <>
      <AppBarComponent />
      <Box sx={{ backgroundColor: "#F6FBF5" }}>
        <Heroes />
        <MainSec1 />
        <MainSec2 />
        <MainSec3 />
        <MainSec4 />
        <MainSec5 />
        <MainSec6 />
        <MainSec7 />
        <MainSec8 />
      </Box>
      <footer>
        <Box
          sx={{
            background: "#3F6745",

            p: 2,
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                color="#fff"
                sx={{ fontFamily: "'EB Garamond', serif" }}
              >
                Copyright © 2021. Greenpark Jogja Apartment.
              </Typography>

              <Typography
                color="#fff"
                variant="caption"
                sx={{ fontFamily: "'EB Garamond', serif" }}
              >
                Tentang Kami Apartement Ulasan FAQ Hubungi Kami
              </Typography>
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
}

export default App;
