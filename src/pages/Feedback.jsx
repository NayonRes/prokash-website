import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Feedback = () => {
  const theme = useTheme();
  const data = [
    { title: "Boost Sales", src: "/feedback-images/boost_sales.svg" },
    { title: "SEO Magic", src: "/feedback-images/seo_magic.svg" },
    { title: "More Video Views", src: "/feedback-images/more_video_views.svg" },
    {
      title: "Drive Website Traffic",
      src: "/feedback-images/drive_website_traffic.svg",
    },
    {
      title: "Attract Customers To Your Store",
      src: "/feedback-images/attract_customers_to_your_store.svg",
    },
    {
      title: "Automate Audience Targeting",
      src: "/feedback-images/automate_audience_targeting.svg",
    },
    {
      title: "Create Stunning Visuals",
      src: "/feedback-images/create_stunning_visuals.svg",
    },
    {
      title: "Run Ads With Bkash",
      src: "/feedback-images/run_ads_with_bkash.svg",
    },
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
      fontSize: "10px",
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
              <img src={item?.src} alt="" style={{ ...cardImage }} />
              <Typography
                sx={{
                  ...cardTitle,
                  fontWeight: 700,
                  textAlign: "right",
                  mt: 2,
                  mb: 0.5,
                }}
              >
                {item?.title}
              </Typography>
              {/* <Typography sx={{ ...cardTitle, textAlign: "right", mb: 0.5 }}>
                Founder
              </Typography>
              <Typography sx={{ ...cardTitle, textAlign: "right", mb: 0.5 }}>
                iFixit.com.bd
              </Typography> */}
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
