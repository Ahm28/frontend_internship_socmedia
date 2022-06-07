import { Button, MobileStepper, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

const steps = [
  {
    author: "Indra Ranuh",
    description: `Lorem ipsum dolor sit amet, cu pertinax nominati sea, id iriure utamur interpretaris sea, vix ne latine aliquam complectitur. Enim quas his no, mea ferri audire rationibus ei.`,
  },
  {
    author: "Jhon Doee",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    author: "Raditya Dika",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "600px", flexGrow: 1, my: 2 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "189px",
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <img src="/assets/icon/Quote.svg" alt="quote icon" width="50px" />
          <Typography
            sx={{ my: 2, fontFamily: "'Open Sans', sans-serif" }}
            color="#7C7C7C"
          >
            "{steps[activeStep].description}"
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontFamily: "'EB Garamond', sans-serif" }}
            color="#3F6745"
          >
            - {steps[activeStep].author}
          </Typography>
        </Paper>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
