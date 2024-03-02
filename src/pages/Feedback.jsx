import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Feedback = () => {
  const theme = useTheme();
  const data = [
    { name: "Bootstrap" },
    { name: "C#" },
    { name: "HTML 5" },
    { name: "CSS 3" },
    { name: ".NET" },
    { name: "JavaScript" },
    { name: "MS SQL Server" },
    { name: "Material-UI" },
    { name: "React JS" },
    { name: "MS Visual Studio" },
    { name: "Visual Studio Code" },
  ];

  const card = {
    width: "95%",
    margin: "10px auto",
    background: "#f4f4f4",
    padding: "30px 15px",
    borderRadius: "10px",
    // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  };

  const cardTitle = {
    fontSize: "12px",
    // margin: "16px 0 0 0",
    color: "#061A38",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
  };
  const cardImage = {
    width: "100%",
    // height: "40px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      height: "20px",
    },
  };
  const settings = {
    // className: "center",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 3500,
    // centerMode: true,
    centerPadding: "120px",
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item, i) => (
          <Box key={i}>
            <Box sx={{ ...card }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 3 }}
              >
                <Grid item xs="auto">
                  <Typography
                    variant="base"
                    sx={{ ...cardTitle, fontWeight: 700 }}
                  >
                    IFIXIT
                  </Typography>
                </Grid>
                <Grid item xs="auto" sx={{ textAlign: "right" }}>
                  <Typography variant="base" sx={{ ...cardTitle }}>
                    IPHONE REPAIR CENTER
                  </Typography>
                </Grid>
              </Grid>
              <img
                src="/feedback-images/story.png"
                alt=""
                style={{ ...cardImage }}
              />
              <Typography
                sx={{
                  ...cardTitle,
                  fontWeight: 700,
                  textAlign: "right",
                  mt: 2,
                  mb: 0.5,
                }}
              >
                IFIXIT
              </Typography>
              <Typography sx={{ ...cardTitle, textAlign: "right", mb: 0.5 }}>
                Founder
              </Typography>
              <Typography sx={{ ...cardTitle, textAlign: "right", mb: 0.5 }}>
                iFixit.com.bd
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
