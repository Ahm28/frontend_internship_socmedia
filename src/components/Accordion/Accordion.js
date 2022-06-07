import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const lists = [
  {
    summary: "Dimana lokasi Greenpark Jogja ?",
    detail:
      "Greenpark Jogja ada di Jl. Babarsari, Tambak Bayan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
  },
  {
    summary: "Apakah pembelian apartemen bisa dicicil ?",
    detail: "Ya, pilihan angsuran mulai dari 3x, 12x, 24x, dan 50x",
  },
  {
    summary: "Sudah Berapa banyak apartemen yang terjual ?",
    detail: "Sampai saat ini sudah hampir 500 apartemen yang sudah di huni",
  },
  {
    summary: "Keamanan disana seperti Apa ?",
    detail:
      "Keamanan sudah terjamin, kami dilengkapi dengan cctv di setiap lantai, dan security yang standby 24jam",
  },
  {
    summary: "Apakah di Greenpark Jogja Apartement memiliki rooftop ? ",
    detail:
      "Ya, Kami memiliki rooftop dengan dilengkapi fasilitas kolam renang, cafe dan live music untuk memnemani senja anda",
  },
];

export default function AccordionComp() {
  return (
    <Box sx={{ my: 5 }}>
      {lists.map((list) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h6"
              color="#3F6745"
              sx={{ fontFamily: "'EB Garamond', serif" }}
            >
              {list.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#F1F1F1" }}>
            <Typography color=" #00000066">{list.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
