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
                src="/prokash-images/hero.png"
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

        {/* <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Real-world applications of TheQRPay
              <br />
              software in business operations
            </h3>
            <p className="text_body_medium center mt10" data-aos="fade-up">
              Take a look at our case studies to witness the extensive potential
              of TheQRPay's white label payment software
              <br /> solution and how it has been a game-changer for our clients
              in the fintech sector.
            </p>
          </div>
          <Grid container alignItems="center" className="section_style">
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <img
                src="/images/Developer.svg"
                alt="Development of an e-wallet"
                className="left_image_style"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <h3 className="title_semibold_medium mb12" data-aos="fade-up">
                Development of an e-wallet and payment application utilizing
                TheQRPay software
              </h3>
              <p className="text_body_medium mb40" data-aos="fade-up">
                Learn how the transformation of a network of cash-in payment
                into a comprehensive payment application by incorporating
                TheQRPay software and developing on top of it.
              </p>

              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className="section_style">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="right_order_maintain"
            >
              <h3 className="title_semibold_medium mb40" data-aos="fade-up">
                A top PSP in MENA overhauls its
                <br /> transaction accounting system
              </h3>
              <p className="text_body_medium mb40" data-aos="fade-up">
                Discover how a prominent payment service provider (NDA) from a
                MENA country revolutionized its central transaction accounting
                system by integrating TheQRPay's on-premise ledger layer
                software with its current POS software.
              </p>
              <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Explore
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
                src="/images/php.svg"
                alt="A top PSP in MENA overhauls"
                className="right_image_style"
              />
            </Grid>
          </Grid>
        </div> */}

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
            <h3 className="title_semibold_medium center">
              Create the eWallet that people will favor
            </h3>
            <p className="text_body_medium center mt10 ">
              In order to make your digital wallet product popular with your
              customers and fulfill their financial needs, TheQRPay eWallet
              provider supplies the foundation you need for it to be successful.
            </p>
          </div>

          <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {" "}
              <div data-aos="fade-up" data-aos-delay="300">
                <Accordion
                  expanded={
                    expanded ===
                    "Accounts supporting multiple currencies and various assets"
                  }
                  onChange={handleChange(
                    "Accounts supporting multiple currencies and various assets"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Accounts supporting multiple currencies and various assets" ? (
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
                      Accounts supporting multiple currencies and various assets
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Our transaction core platform serves as a versatile
                      foundation, accommodating various asset types – from
                      currencies and bonus points to coffee beans and liters.
                      Seamlessly integrate multiple currencies and assets into
                      the digital wallet system without any restrictions.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={
                    expanded === "Payment transactions via banking institutions"
                  }
                  onChange={handleChange(
                    "Payment transactions via banking institutions"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Payment transactions via banking institutions" ? (
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
                      Payment transactions via banking institutions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Incorporate a banking network integration to offer bank
                      payments such as IBAN and SWIFT, fulfilling your users'
                      financial service demands and enabling fund transfers to
                      bank accounts. This integration presents a chance for your
                      digital wallet product to appeal to diverse audience
                      segments and enhance transaction volume.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={expanded === "Seamless cross-border transactions"}
                  onChange={handleChange("Seamless cross-border transactions")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Seamless cross-border transactions" ? (
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
                      Seamless cross-border transactions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Offer seamless internal P2P transfers, regardless of
                      location. Allow users to effortlessly transfer funds
                      between friends at local spots or even send money
                      internationally with just a few clicks, eliminating
                      transfer-related complexities. Enable smooth transactions
                      between cards, wallets, and mobile devices by integrating
                      with the relevant payment services or providers.
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
