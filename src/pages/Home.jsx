import React, { useEffect, useRef } from "react";
import "../App.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../compoments/MouseDown.css";
import Lottie from "lottie-react";
import splash from "../animations/splash.json";
import UnlockThePower from "../animations/UnlockThePower.json";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Feedback from "./Feedback";
import { useTheme } from "@mui/material/styles";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import Marquee from "react-fast-marquee";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";

const Home = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const cardTitle = {
    fontSize: "12px",
    // margin: "16px 0 0 0",
    color: "#061A38",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
  };
  const scrollToTop = () => {
    const scrollableDiv = document.getElementById("message-form");
    console.log("scrollableDiv", scrollableDiv);
    scrollableDiv.scrollIntoView({
      top: 0,
      behavior: "smooth",
      block: "end",
      // inline: "center",
    });
    // if (scrollableDiv) {
    //   scrollableDiv.scrollTop = 0;
    // }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        {/* <div id="mouse-animation" className="mouse_holder">
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div> */}
        <Container
          maxWidth="xl"
          className="container home_circle_bg"

          // style={{ display: "none" }}
        >
          <Grid
            container
            alignItems="center"
            // style={{
            //   height: "calc(100vh - 65px)",
            //   maxHeight: "900px",
            // }}
            className="home_main_section"
            // style={{ background: "red" }}
          >
            <Grid item xs={12} md={6} lg={6} xl={5}>
              <h1
                className="title_large mb24 hideForMobileViewOnly centerForTabAndMobileViewOnly"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Digital Marketing,
                <br />
                <span style={{ color: "#834BFF" }}>Simplified</span>.
              </h1>
              <p
                className="title_large mb24 showForMobileViewOnly"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Digital Marketing,
                <br />
                <span style={{ color: "#834BFF" }}>
                  <b>Simplified</b>
                </span>
                .
              </p>

              <p
                className="text_body_medium mb12 centerForTabAndMobileViewOnly"
                style={{ maxWidth: "500px" }}
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                AdHawk is the simplest solution for managing your ads and
                optimizing sales & marketing efforts.
              </p>
              <p
                className="text_body_medium mb24 centerForTabAndMobileViewOnly"
                style={{ maxWidth: "500px" }}
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="0"
              >
                Already using AdHawk? Sign In
              </p>

              <Button
                variant="contained"
                // color="error"
                startIcon={<LibraryAddCheckOutlinedIcon />}
                sx={{ px: 3, py: 1, borderRadius: "100vw", mr: 2 }}
                className=" hideForMobileViewOnly hideForTabViewOnly"
                disableElevation
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="0"
                onClick={scrollToTop}
              >
                Start Now
              </Button>

              <div className="center showForTabAndMobileViewOnly">
                <Button
                  variant="contained"
                  // color="error"
                  startIcon={<LibraryAddCheckOutlinedIcon />}
                  sx={{ px: 3, py: 1, borderRadius: "100vw", mr: 2 }}
                  disableElevation
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-offset="0"
                >
                  Start Now
                </Button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              xl={7}
              className="hideForMobileViewOnly hideForTabViewOnly"
              // data-aos="fade-up"
            >
              <img
                src="/hero.png"
                alt=""
                width="70%"
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
            <Grid item xs={12}>
              <p className="text_body_xs_regular center">
                TRUSTED BY LEADING BUSINESSES
              </p>
              <Box
                sx={{
                  mt: 3,
                  "& img": {
                    maxWidth: "150px",
                    mr: 3,
                  },
                }}
              >
                <Marquee>
                  <img src="/client-images/iFixit.svg" alt="iFixit" />
                  <img src="/client-images/Rahim_Steel.svg" alt="Rahim Steel" />
                  <img
                    src="/client-images/Talukder_Foods.svg"
                    alt="Talukder Foods"
                  />
                  <img
                    src="/client-images/Next_Business_Solution.svg"
                    alt="Next Business Solution"
                  />
                  <img src="/client-images/NextBlock.svg" alt="Next Block" />
                  <img src="/client-images/Chitron.svg" alt="Chitron" />
                  <img
                    src="/client-images/Hashtag_Pizza.svg"
                    alt="Hashtag Pizza"
                  />
                  <img
                    src="/client-images/Yes_Event_Planner.svg"
                    alt="Yes Event Planner"
                  />
                  <img src="/client-images/InBs.svg" alt="InBs" />
                  <img
                    src="/client-images/Own_The_World.svg"
                    alt="Own The World"
                  />

                  <img
                    src="/client-images/Marriage_Match_Media.svg"
                    alt="Marriage Match Media"
                  />
                  <img src="/client-images/Baham.svg" alt="Baham" />
                  <img
                    src="/client-images/Bhangari_Bazar.svg"
                    alt="Bhangari Bazar"
                  />
                  <img
                    src="/client-images/Blush_Beauty.svg"
                    alt="Blush Beauty"
                  />
                </Marquee>
              </Box>
              {/* <Grid container spacing={2} justifyContent="center">
                <Grid item xs="auto">
                  <img src="/client-images/Baham.svg" alt="Baham" />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ height: "1px", background: "#fff" }}></div>
      <Container maxWidth="lg" className="container">
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              OUR STORY
            </h3>
            {/* <p className="text_body_medium center mt10" data-aos="fade-up">
              Take a look at our case studies to witness the extensive potential
              of TheQRPay's white label payment software
              <br /> solution and how it has been a game-changer for our clients
              in the fintech sector.
            </p> */}
          </div>
          <Grid container alignItems="center" className="section_style">
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <img
                src="/feedback-images/story.png"
                alt="Development of an e-wallet"
                className="left_image_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <h3 className="title_semibold_medium mb12" data-aos="fade-up">
                Build by marketers, for founders
              </h3>
              <p className="text_body_medium mb40" data-aos="fade-up">
                We believe customer intelligence is the way to help people find
                their brands. It’s a different approach to marketing – one that
                puts people first. We help brands create marketing so relevant
                and respectful, people feel it’s on their terms.
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          {/* <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Strategies we've helped validate
            </h3>
            <p className="text_body_medium center mt10 ">
              Strategies we've helped validate
            </p>
          </div> */}
          <div
            className="card4"
            style={{ backgroundImage: "none" }}
            data-aos="fade-up"
          >
            <Grid
              container
              alignItems="center"
              className="idea_card"
              // sx={{
              //   flexDirection: "row",
              //   [theme.breakpoints.down("xs")]: {
              //     flexDirection: "row-reverse",
              //   },
              // }}
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="margin_left_50">
                  <h3 className="title_semibold_medium mb6">
                    Mobile app for monitoring contact availability&nbsp;
                    {/* <span style={{ color: "#CB2027" }}>your solution?</span> */}
                  </h3>
                  <p className="text_body_medium mb24">
                    Status encourages spontaneous calls by allowing you ti share
                    when you're available.
                  </p>
                  {/* <Button
                  variant="outlined"
                  color="error"
                  endIcon={<ArrowForwardIcon />}
                  className="outlined_buttton"
                  disableElevation
                >
                Start Now
                </Button> */}
                  <Button
                    variant="contained"
                    // color="error"
                    startIcon={<LibraryAddCheckOutlinedIcon />}
                    sx={{ px: 3, py: 1, borderRadius: "100vw", mr: 2 }}
                    className=" hideForMobileViewOnly hideForTabViewOnly"
                    disableElevation
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-offset="0"
                    // onClick={scrollToTop}
                  >
                    Start Now
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                // style={{ textAlign: "right" }}
                // className="hideForMobileViewOnly"
              >
                <img
                  src="/Mobile-App.png"
                  alt="developing"
                  className="card_image"
                />
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">SERVICES</h3>
            <p className="text_body_medium center mt10 ">
              Strategies we've helped validate
            </p>
          </div>
          <div className="card_holder" style={{ justifyContent: "center" }}>
            <div
              className="card6 "
              style={{ border: "2px solid #f4f4f4" }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div>
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
                      BOOST
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" sx={{ textAlign: "right" }}>
                    <Typography variant="base" sx={{ ...cardTitle }}>
                      INSTANT
                    </Typography>
                  </Grid>
                </Grid>
                <div className="card_text_box">
                  <p className="title_semibold_small center  mb12">
                    Pay as You Go
                  </p>

                  <p
                    className="text_body_xs_regular center mb24"
                    style={{ fontWeight: 500 }}
                  >
                    Launch Your Google and Facebook Ads in Minutes. No Tech
                    Hassles.
                  </p>
                  <Box>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{ mt: 3 }}
                  >
                    {" "}
                    book a schedule
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="card6 "
              style={{ border: "2px solid #f4f4f4" }}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div>
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
                      BOOST
                    </Typography>
                  </Grid>
                  <Grid item xs="auto" sx={{ textAlign: "right" }}>
                    <Typography variant="base" sx={{ ...cardTitle }}>
                      INSTANT
                    </Typography>
                  </Grid>
                </Grid>
                <div className="card_text_box">
                  <p className="title_semibold_small center  mb12">
                    Pay as You Go
                  </p>

                  <p
                    className="text_body_xs_regular center mb24"
                    style={{ fontWeight: 500 }}
                  >
                    Launch Your Google and Facebook Ads in Minutes. No Tech
                    Hassles.
                  </p>
                  <Box>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                    <p
                      className="text_body_xs_regular center mb12"
                      style={{ fontWeight: 500 }}
                    >
                      <CheckBoxOutlinedIcon
                        sx={{ color: "#834BFF", position: "relative", top: 6 }}
                      />
                      &nbsp;&nbsp; Quick Activation
                    </p>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{ mt: 3 }}
                  >
                    {" "}
                    book a schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">REVIEWS</h3>
            <p className="text_body_medium center mt10 ">
              Hear from our clients
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Feedback />
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Frequently Asked Questions (FAQs)
            </h3>
            {/* <p className="text_body_medium center mt10 ">
              In order to make your digital wallet product popular with your
              customers and fulfill their financial needs, TheQRPay eWallet
              provider supplies the foundation you need for it to be successful.
            </p> */}
          </div>

          <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {" "}
              <div data-aos="fade-up" data-aos-delay="300">
                <Accordion
                  expanded={
                    expanded === "Top digital marketing service in Bangladesh"
                  }
                  onChange={handleChange(
                    "Top digital marketing service in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Top digital marketing service in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top digital marketing service in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      At Prokash, we stand out as a top digital marketing
                      service in Bangladesh due to our strategic approach,
                      innovative solutions, and proven track record of
                      delivering exceptional results for our clients.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="350">
                <Accordion
                  expanded={
                    expanded ===
                    "Top 10 digital marketing services in Bangladesh"
                  }
                  onChange={handleChange(
                    "Top 10 digital marketing services in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Top 10 digital marketing services in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top 10 digital marketing services in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Yes, Prokash consistently ranks among the top 10 digital
                      marketing services in Bangladesh. Our dedication to
                      excellence, diverse service offerings, and client
                      satisfaction contribute to our recognition in the
                      industry.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={
                    expanded === "Best digital marketing agency in Dhaka"
                  }
                  onChange={handleChange(
                    "Best digital marketing agency in Dhaka"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Best digital marketing agency in Dhaka" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best digital marketing agency in Dhaka
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      As the best digital marketing agency in Dhaka, Prokash
                      combines global expertise with a deep understanding of the
                      local market. Our team in Dhaka crafts tailored strategies
                      to ensure our client's success in the vibrant business
                      landscape.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <Accordion
                  expanded={
                    expanded === "Top digital marketing agency in Bangladesh"
                  }
                  onChange={handleChange(
                    "Top digital marketing agency in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Top digital marketing agency in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top digital marketing agency in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash has earned its reputation as the top digital
                      marketing agency in Bangladesh by consistently delivering
                      outstanding results. Our commitment to staying ahead of
                      industry trends and providing cutting-edge solutions sets
                      us apart.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={expanded === "Top marketing agency in Bangladesh?"}
                  onChange={handleChange("Top marketing agency in Bangladesh?")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Top marketing agency in Bangladesh?" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top marketing agency in Bangladesh?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash distinguishes itself as a top marketing agency in
                      Bangladesh through its commitment to delivering impactful
                      marketing solutions, understanding local nuances, and
                      helping businesses thrive in the dynamic marketplace.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="550">
                <Accordion
                  expanded={expanded === "Digital agency in BD?"}
                  onChange={handleChange("Digital agency in BD?")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Digital agency in BD?" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Digital agency in BD?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Choosing Prokash as your digital agency in BD means
                      partnering with a team that stays abreast of the latest
                      industry trends, leverages innovative techniques, and
                      focuses on achieving your business goals through digital
                      excellence.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Accordion
                  expanded={expanded === "Facebook page boost with bKash"}
                  onChange={handleChange("Facebook page boost with bKash")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Facebook page boost with bKash" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Facebook page boost with bKash
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Boosting your Facebook page with bKash is easy. Just
                      select your boost settings, choose bKash as your payment
                      method, and complete the payment through bKash.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="650">
                <Accordion
                  expanded={
                    expanded ===
                    "Price for Facebook Boost Service in Bangladesh"
                  }
                  onChange={handleChange(
                    "Price for Facebook Boost Service in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Price for Facebook Boost Service in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Price for Facebook Boost Service in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      The price for Facebook boost service in Bangladesh varies
                      depending on your target audience and campaign duration.
                      Contact our team for a customized quote.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <Accordion
                  expanded={expanded === "Best boosting service in Bangladesh"}
                  onChange={handleChange("Best boosting service in Bangladesh")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Best boosting service in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best boosting service in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      We take pride in being recognized as the best-boosting
                      service in Bangladesh. Our effective strategies and proven
                      results set us apart.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="750">
                <Accordion
                  expanded={
                    expanded === "Best Facebook boost service in Bangladesh"
                  }
                  onChange={handleChange(
                    "Best Facebook boost service in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Best Facebook boost service in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best Facebook boost service in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Finding the best Facebook boost service in Bangladesh
                      involves checking reviews, looking at past performance,
                      and ensuring they align with your business goals. We
                      invite you to explore our success stories.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <Accordion
                  expanded={expanded === "Facebook Boost app in Bangladesh"}
                  onChange={handleChange("Facebook Boost app in Bangladesh")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Facebook Boost app in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Facebook Boost app in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Yes, we offer a user-friendly web app for Facebook boost
                      service in Bangladesh. signup our app for convenient and
                      efficient boosting.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="850">
                <Accordion
                  expanded={expanded === "Free Facebook page boost service"}
                  onChange={handleChange("Free Facebook page boost service")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Free Facebook page boost service" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Free Facebook page boost service
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      While we don't provide a completely free service, we offer
                      competitive prices and ensure that your investment results
                      in significant visibility and engagement.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="900">
                <Accordion
                  expanded={
                    expanded === "How can I pay to boost my Facebook page"
                  }
                  onChange={handleChange(
                    "How can I pay to boost my Facebook page"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "How can I pay to boost my Facebook page" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      How can I pay to boost my Facebook page
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      You can conveniently pay to boost your Facebook page
                      through various methods, including bKash. Choose the
                      payment option that suits you best.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="950">
                <Accordion
                  expanded={
                    expanded === "Best Facebook boosting agency in Bangladesh"
                  }
                  onChange={handleChange(
                    "Best Facebook boosting agency in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Best Facebook boosting agency in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best Facebook boosting agency in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      We take pride in being recognized as the best Facebook
                      boosting agency in Bangladesh. Our dedicated team ensures
                      your page reaches its full potential.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1000">
                <Accordion
                  expanded={expanded === "Free YouTube video boost service"}
                  onChange={handleChange("Free YouTube video boost service")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Free YouTube video boost service" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Free YouTube video boost service
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Currently, we do not provide a free YouTube video boost
                      service. However, we offer competitive prices to ensure
                      your video gains maximum visibility.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1020">
                <Accordion
                  expanded={
                    expanded === "Price for YouTube video boost service?"
                  }
                  onChange={handleChange(
                    "Price for YouTube video boost service?"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Price for YouTube video boost service?" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Price for YouTube video boost service?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      YouTube video boost service prices vary based on factors
                      such as target audience and campaign duration. Connect
                      with us for a personalized quote.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1040">
                <Accordion
                  expanded={
                    expanded ===
                    "How much does it cost to boost a YouTube video"
                  }
                  onChange={handleChange(
                    "How much does it cost to boost a YouTube video"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "How much does it cost to boost a YouTube video" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      How much does it cost to boost a YouTube video
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      The cost of boosting a YouTube video depends on your
                      specific requirements. Contact us, and we'll provide you
                      with a detailed breakdown of the pricing.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1060">
                <Accordion
                  expanded={
                    expanded ===
                    "Best boosting service in Bangladesh for YouTube"
                  }
                  onChange={handleChange(
                    "Best boosting service in Bangladesh for YouTube"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Best boosting service in Bangladesh for YouTube" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best boosting service in Bangladesh for YouTube
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      We take pride in being recognized as the best
                      YouTube-boosting service in Bangladesh. Our team is
                      dedicated to ensuring your video gains the visibility it
                      deserves.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1080">
                <Accordion
                  expanded={
                    expanded ===
                    "Best Google Ads service provider in Bangladesh"
                  }
                  onChange={handleChange(
                    "Best Google Ads service provider in Bangladesh"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Best Google Ads service provider in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Best Google Ads service provider in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      We stand out as the best Google Ads service provider due
                      to our experienced team, proven track record, and
                      dedication to delivering results. Explore our services to
                      see how we can elevate your online presence.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1100">
                <Accordion
                  expanded={expanded === "Google Ads expert in Bangladesh"}
                  onChange={handleChange("Google Ads expert in Bangladesh")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Google Ads expert in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Google Ads expert in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Yes, our team comprises certified Google Ads experts with
                      in-depth knowledge and skills to optimize campaigns for
                      maximum impact.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1120">
                <Accordion
                  expanded={expanded === "Google Ads management service"}
                  onChange={handleChange("Google Ads management service")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Google Ads management service" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Google Ads management service
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Our Google Ads management services include strategic
                      campaign planning, keyword optimization, ad creation,
                      performance monitoring, and continuous optimization for
                      optimal results.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1140">
                <Accordion
                  expanded={
                    expanded === "Google Ads agency for small businesses"
                  }
                  onChange={handleChange(
                    "Google Ads agency for small businesses"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Google Ads agency for small businesses" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Google Ads agency for small businesses
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Absolutely! Our Google Ads agency caters to businesses of
                      all sizes. We tailor our services to meet the specific
                      needs and budget constraints of small businesses, ensuring
                      effective and affordable campaigns.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1160">
                <Accordion
                  expanded={expanded === "Top SEO agency in Bangladesh"}
                  onChange={handleChange("Top SEO agency in Bangladesh")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Top SEO agency in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top SEO agency in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash stands out as a top SEO agency due to its proven
                      track record, experienced team of SEO experts, and
                      commitment to delivering measurable results for clients.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1180">
                <Accordion
                  expanded={expanded === "Top SEO agency in Dhaka"}
                  onChange={handleChange("Top SEO agency in Dhaka")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Top SEO agency in Dhaka" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top SEO agency in Dhaka
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Yes, Prokash is recognized as a leading SEO agency in
                      Dhaka, offering tailored SEO solutions to businesses
                      seeking enhanced online visibility and organic growth.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <Accordion
                  expanded={expanded === "Top 10 SEO agencies in Bangladesh"}
                  onChange={handleChange("Top 10 SEO agencies in Bangladesh")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Top 10 SEO agencies in Bangladesh" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Top 10 SEO agencies in Bangladesh
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash secures its position among the top 10 SEO agencies
                      in Bangladesh through its strategic approach, industry
                      expertise, and successful SEO campaigns that drive
                      results.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1220">
                <Accordion
                  expanded={expanded === "SEO experts at Prokash"}
                  onChange={handleChange("SEO experts at Prokash")}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "SEO experts at Prokash" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      SEO experts at Prokash
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash boasts a team of seasoned SEO experts in
                      Bangladesh with a deep understanding of search engine
                      algorithms, industry trends, and effective optimization
                      strategies.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1240">
                <Accordion
                  expanded={
                    expanded ===
                    "Can Prokash help improve my website's SEO ranking"
                  }
                  onChange={handleChange(
                    "Can Prokash help improve my website's SEO ranking"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Can Prokash help improve my website's SEO ranking" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      Can Prokash help improve my website's SEO ranking
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Prokash is dedicated to improving your website's SEO
                      ranking through strategic planning, on-page optimization,
                      content enhancement, and other proven SEO techniques.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1260">
                <Accordion
                  expanded={
                    expanded === "How can I contact Prokash for SEO services?"
                  }
                  onChange={handleChange(
                    "How can I contact Prokash for SEO services?"
                  )}
                  className="accrodian_style card_shadow mb12"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "How can I contact Prokash for SEO services?" ? (
                        <RemoveIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      How can I contact Prokash for SEO services?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      To discuss your SEO requirements or inquire about our
                      services, contact us through our website, and our team
                      will be happy to assist you.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
