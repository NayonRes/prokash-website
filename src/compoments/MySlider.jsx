import React from "react";
// import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     width: "120px",
//     margin: "10px auto",
//     background: "#fff",
//     padding: "30px 15px",
//     borderRadius: "10px",
//     boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     textAlign: "center",
//     [theme.breakpoints.down("sm")]: {
//       width: "60px",
//     },
//   },
//   cardTitle: {
//     fontSize: "12px",
//     margin: "16px 0 0 0",
//     color: "#061A38",
//     [theme.breakpoints.down("sm")]: {
//       fontSize: "7px",
//     },
//   },
//   cardImage: {
//     width: "40px",
//     height: "40px",
//     display: "block",
//     margin: "auto",
//     [theme.breakpoints.down("sm")]: {
//       width: "20px",
//       height: "20px",
//     },
//   },
// }));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const MySlider = () => {
  // const classes = useStyles();
  const data = [
    { img: "/images/abc0501.svg" },
    { img: "/images/abc0303.svg" },
    { img: "/images/abc0204.svg" },
    { img: "/images/abc6666.svg" },
    { img: "/images/abc0105.svg" },
    { img: "/images/abc5555.svg" },
  ];
  const settings = {
    className: "center",
    // dots: true,
    infinite: true,

    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerMode: true,
    // centerPadding: "120px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          // centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div style={{ background: "#C2D6F2", padding: "35px 0", width: "100%" }}>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i} style={{ background: "red" }}>
            <div>
              <img
                src={item.img}
                alt=""
                // style={{ maxWidth: "260px", height: "80px" }}
                className="slider_image"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
