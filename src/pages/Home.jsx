import React, { useEffect, useRef } from "react";
import "../App.css";
import { Button, Container, Grid, Typography } from "@mui/material";
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

const Home = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
            style={{ position: "relative" }}
          >
            {/* <div id="mouse-animation" className="mouse_holder">
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </div> */}
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
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 2, py: 1, borderRadius: "100vw", mr: 2 }}
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
                  color="error"
                  endIcon={<ArrowForwardIcon />}
                  className=""
                  disableElevation
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-offset="0"
                >
                  Request a demo
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
              {/* <lottie-player
              background="transparent"
              speed="1"
              src="the-qr-pay-splash.json"
              style={{ width: "400px", height: "400px", margin: "0px auto" }}
              loop
              autoplay
            ></lottie-player> */}
              {/* <Lottie animationData={splash} loop={true} /> */}

              {/* <img
              className="home_circle"
              // src="/images/home-circle.svg"
              src="/images/home-bg.png"
              alt=""
             
            /> */}

              <img
                src="/hero.png"
                alt=""
                width="80%"
                style={{ display: "block", margin: "auto" }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ height: "1px", background: "#fff" }}></div>
      <Container maxWidth="lg" className="container">
        {/* <div
          className="card1 section_style"
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <Grid container alignItems="center">
            <Grid item xs={12} sm={8.5} md={9} lg={9}>
              <div className="card_padding">
                <h3 className="title_semibold_medium">
                  Solutions tailored to fit any{" "}
                  <span style={{ color: "#CB2027" }}>business size</span>.
                </h3>
                <p className="text_body_medium " style={{ maxWidth: "665px" }}>
                  theqrpay.com gives you a reliable payments platform with a
                  range of features and functions to help you launch your
                  payment business quickly. Get your financial product up and
                  running quickly with our SaaS or source code version.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3.5}
              md={3}
              lg={3}
              style={{ textAlign: "right" }}
              className="hideForMobileViewOnly"
            >
              <img
                src="/images/trees.svg"
                alt="Solutions tailored to fit"
                className="card_image"
              />
            </Grid>
          </Grid>
        </div> */}
        {/* <Grid container alignItems="center" className="section_style">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="right_order_maintain"
            // data-aos="fade-up"
          >
            <div data-aos="fade-up">
              <h3 className="title_semibold_medium mb12">
                SaaS hybrid cloud solution
              </h3>
              <p className="text_body_medium mb40">
                Discover a cost-effective subscription-based solution for your
                digital payment product without large upfront costs. Explore the
                financial market with no commitment, test the demand before
                creating a full-fledged product, and reduce development and
                maintenance expenses. Get the perfect foundation for your
                payment product today!
              </p>
            </div>
            <div data-aos="fade-up">
              <p className="subtitle_bold mb12">How can it help me?</p>

              <ul className="text_body_medium bullet_color">
                <li>
                  Enjoy effortless payments with theqrpay.com - we take care of
                  all the maintenance.
                </li>
                <li>Our team hosts and manages your database on our server.</li>
                <li>
                  Our team designs and integrates the necessary providers.
                </li>
              </ul>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="left_order_maintain"
          >
            {" "}
            <img
              src="/images/saas-vector2.svg"
              alt="SaaS hybrid cloud solution"
              className="right_image_style"
            />
          </Grid>
        </Grid> */}
        {/* <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
          
            <Lottie
              animationData={UnlockThePower}
              loop={true}
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <div data-aos="fade-up">
              <h3 className="title_semibold_medium mb12">
                Unlock the power of your source code with a license - easy and
                attractive
              </h3>
              <p className="text_body_medium mb40">
                Take charge of your financial operations with the theqrpay.com
                ledger layer platform. Get the source code license and enjoy
                customizations without expensive SaaS fees as your transaction
                volume increases.
              </p>
            </div>
            <div data-aos="fade-up">
              <p className="subtitle_bold mb12">How can it help me?</p>

              <ul className="text_body_medium bullet_color">
                <li>Technical assessment of the product by our team.</li>
                <li>
                  We will ensure a successful knowledge transfer to your team.
                </li>
                <li>Signing the agreement and transferring the code.</li>
              </ul>
            </div>
            <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton mt40"
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
        </Grid> */}
        {/* <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Our fintech products are backed by a strong foundation
            </h3>
            <p className="text_body_medium center mt10">
              TheQRPay is a reliable foundation for digital payment solutions.
              It's secure, straightforward and confident. Enjoy a seamless
              <br /> payment experience with TheQRPay!
            </p>
          </div>
          <div className="card_holder">
            <div className="card2" data-aos="fade-up" data-aos-delay="300">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet.svg" alt="Digital wallet" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Digital wallet</p>
                  <p className="text_body_small_regular">
                    A customizable digital wallet software platform that can be
                    branded and tailored to fit your specific needs.
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                  component={Link}
                  to="/use-cases/e-wallet"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="500">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Money-transfer.svg" alt="Money transfer" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Money transfer</p>
                  <p className="text_body_small_regular">
                    To create a P2P payment or remittance app that is
                    future-proof, use white-label money transfer software.
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                  component={Link}
                  to="/use-cases/money-transfer"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="700">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet-Mobile.svg" alt="Mobile wallet" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> Mobile wallet</p>
                  <p className="text_body_small_regular">
                    Solution for a white-label digital mobile wallet.
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                  component={Link}
                  to="/use-cases/mobile-wallet"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="card2" data-aos="fade-up" data-aos-delay="900">
              <div className="triangle_left"></div>
              <div className="triangle_right"></div>
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Verification.svg" alt="General ledger" />
                </div>
                <div className="card_text_box center">
                  <p className="title_semibold_small mb6"> General ledger</p>
                  <p className="text_body_small_regular">
                    Software for general ledgers and reporting in business
                    process.
                  </p>
                </div>
              </div>
              <div className="center">
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  className="buttton_small2 mt40"
                  disableElevation
                  component={Link}
                  to="/use-cases/general-ledger"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <p
              className="subtitle_bold center"
              style={{
                color: "#303030",
              }}
            >
              Have you thought any other fintech application in mind?
            </p>
            <div className="center mt16">
              <Button
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
                component={Link}
                to="/use-cases"
              >
                All Product’s
              </Button>
            </div>
          </div>
        </div> */}

        {/* <Grid container alignItems="center" className="section_style">
          <Grid
            xs={12}
            sm={12}
            md={12}
            item
            lg={6}
            className="right_order_maintain"
          >
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              Fintech software development
              <br /> services
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              Although our fintech proficiency lies mainly in back-end
              development, we facilitate our clients in partnering with reliable
              fintech development companies. These companies have extensive
              expertise in fintech and are well acquainted with TheQRPay
              platform to create customized solutions and integrate third-party
              services. We can address all of your product requirements through
              these partnerships.
            </p>
            <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Get in touch
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="left_order_maintain"
          >
            {" "}
            <img
              src="/images/saas-vector.svg"
              alt="Fintech software development services"
              className="right_image_style"
            />
          </Grid>
        </Grid> */}
        {/* <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">Why TheQRPay?</h3>
            <p className="text_body_medium center mt10">
              The team focuses on building the transactional engine, the
              essential component of the platform, and avoids getting distracted
              by other aspects like mobile apps and frontend design. Their goal
              is to provide a strong foundation for fintech products that can
              handle an influx of users and transactions while allowing for
              flexibility and innovation.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Launch.svg"
                    alt="Accelerated time-to-market"
                  />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Accelerated time-to-market
                </p>
                <p className="text_body_small_regular left">
                  An efficient fintech engine created using cutting-edge
                  technologies can save development time by at least 1 year.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Pazzel.svg" alt="API-driven architecture" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  API-driven architecture
                </p>
                <p className="text_body_small_regular left">
                  Utilize 400+ RESTful API endpoints for easy infrastructure
                  integration and unrivaled client service.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Flexible.svg" alt="Flexible delivery" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Flexible delivery
                </p>
                <p className="text_body_small_regular left">
                  For a speedy launch, start with a hybrid cloud-based model and
                  switch at any time to an on-premise source code version.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/api.svg"
                    alt="High performance transactions"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  High performance transactions
                </p>
                <p className="text_body_small_regular left">
                  Develop a reliable engine that can sustain the growing volume
                  of transactions and never have to look under the hood.
                </p>
              </div>
            </div>
          </div>
        </div> */}

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

        {/* <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Simplify the development of your fintech product
            </h3>
            <p className="text_body_medium center mt10">
              Our objective is to deliver a dependable and potent base for
              fintech products that can accommodate a surge in users and
              transactions while providing flexibility for innovation.
            </p>
          </div>
          <Grid container alignItems="center" style={{ marginTop: "80px" }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <img
                src="/images/Flow.svg"
                alt="Simplify the development of your fintech product"
                className="left_image_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <img
                  src="/images/arrow.svg"
                  alt="arrow icon"
                  className="arrow_style"
                />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img
                      src="/images/Airplane.svg"
                      alt="Contact us with your product idea."
                    />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Contact us with your product idea.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <img
                  src="/images/arrow.svg"
                  alt="arrow icon"
                  className="arrow_style"
                />
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img
                      src="/images/Cloud-instance.svg"
                      alt="Acquire your cloud instance or the source code of the
                    software."
                    />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Acquire your cloud instance or the source code of the
                    software.
                  </p>
                </div>
              </div>
              <div
                className="card3 card_shadow mb24"
                style={{ alignItems: "center", flexDirection: "row" }}
                data-aos="fade-up"
              >
                <div className="card3_left">
                  <div className="square_img_holder">
                    <img
                      src="/images/Launch.svg"
                      alt="Personalize and prepare for launch."
                    />
                  </div>
                </div>

                <div className="card3_right">
                  <p className="text_body_small_regular left">
                    Personalize and prepare for launch.
                  </p>
                </div>
              </div>

              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton mt40"
                disableElevation
              >
                Lets work together
              </Button>
            </Grid>
          </Grid>
        </div> */}
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
