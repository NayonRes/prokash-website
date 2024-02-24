import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DigitalWalletSolution = () => {
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
        <div id="mouse-animation" className="mouse_holder">
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
        <div className="cloud_box">
          <img src="/images/Cloud3.png" alt="cloud" className="cloud_style" />

          <Container maxWidth="lg" className="container">
            <Grid
              container
              alignItems="center"
              // style={{ height: "calc(100vh - 400px)" }}
              className="top_section"
            >
              <Grid item xs={12} className="center">
                <h2
                  className="title_large2"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  Building a Ledger Layer with a Multi-Channel &nbsp;
                  <br className="hideForMobileViewOnly" />
                  Platform:{" "}
                  <span style={{ color: "#CB2027" }}>
                    TheQRPay Digital Wallet
                  </span>
                  .
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Built on a widespread network of cash-in payment located in
                  Azerbaijan and abroad. It has evolved from a cash-focused
                  business to offer a wide range of offline and online services.
                  Through its unique account and customer profiles available on
                  both app and web platforms, it enables users to access various
                  local service providers. TheQRPay has successfully established
                  a reliable payment ecosystem focused on customer convenience.
                </p>

                {/* <div
                className="center mt50 "
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-offset="0"
              >
                <Button
                  variant="contained"
                  color="error"
                  endIcon={<ArrowForwardIcon />}
                  className="contained_buttton"
                  disableElevation
                >
                  Contact us
                </Button>
              </div> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg" className="container">
        <Grid container alignItems="center" className="section_style2">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Project_Outline.png"
              alt="Project outline"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40">Project outline</h3>
            <p className="text_body_medium mb24" data-aos="fade-up">
              For e-Wallet companies, there are two key areas of growth:
              increasing the number of vendors within the system and expanding
              the network. To effectively drive business growth in these areas,
              it is essential for such companies to have a robust ecosystem
              built around the general ledger layer software. TheQRPay e-wallet
              recognized the importance of creating an ecosystem that not only
              streamlines existing business processes but also provides the
              flexibility to develop online services in the future.
            </p>
            <p className="text_body_medium " data-aos="fade-up">
              During the initial phase of collaboration between the two
              companies, TheQRPay software played a crucial role in integrating
              all the terminals into a unified system. As e-Wallet expanded its
              ecosystem and introduced new features and services, TheQRPay
              software facilitated seamless and effortless scalability.
            </p>
          </Grid>
        </Grid>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center">
              Starting the work process
            </h3>
            <p className="text_body_medium center mt10 ">
              The exploration phase was the first stage of the collaboration of
              the TheQRPay wallet. The wallet team was informed by the company's
              software developers, who also learned about the obstacles and
              functional gaps in their business workflow. The principal
              abilities of the remedy ought to have been:
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Star.svg" alt=" star icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Digital Registration system
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Wallet-manage.svg" alt="Wallet manage icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Management and establishment of client accounts in the back
                    office
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Cloud-instance.svg" alt="Cloud instance icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Collecting information from each cash-in payment kiosk and
                    properly tagging it
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Verification.svg" alt="Verification icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Simple system registration for service providers and
                    currencies
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Tolerance.svg" alt="Tolerance icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    ETL (extract, convert, and load) data from every registered
                    account into a multi-asset general ledger
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Security.svg" alt="Security icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">eWallet Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium" data-aos="fade-up">
              On top of the business process, create the ecosystem
            </h3>
            <p className="text_body_medium mt40 mb24 " data-aos="fade-up">
              TheQRPay wallet's initial objective was to establish a dependable
              procedure for integrating into the system. This capability was
              added to the general ledger by the development team in order to
              record each distinct object.
            </p>
            <p className="text_body_medium mb24" data-aos="fade-up">
              A payment gateway provider with a long history of cooperation.
              TheQRPay was given the job to integrate its ledger layer with the
              system of the local payment processor. The payment gateway itself,
              as well as a number of connected services, had to be implemented.
            </p>
            <p className="text_body_medium mb24 " data-aos="fade-up">
              At this stage of integration, the development team made use of the
              ledger layer's already existing functionality, which allowed for
              the introduction of the currencies and their exchange rates, the
              use of the payment service provider's payment gateway, and the
              logging of each transaction along with supplementary information
              about each one.
            </p>
            <p className="text_body_medium" data-aos="fade-up">
              The introduction of distinctive IDs and personal front-offices for
              users within the system was another goal. By forgoing this option,
              TheQRPay wallet was able to create a reliable client management
              system and integrate e-commerce capabilities with self-service
              payment into a single ecosystem. Additionally, it was carried out
              during the installation of the ledger layer software, which
              supported role-based platform access.
            </p>
          </div>
        </div>
        <div
          className="card4 section_style"
          style={{ backgroundImage: "none" }}
          data-aos="fade-up"
        >
          <Grid container alignItems="center" className="idea_card">
            <Grid item xs={12} sm={8.5} md={9} lg={8}>
              <div className="margin_left_50">
                <h3 className="title_semibold_medium mb6">
                  Are you prepared to begin developing &nbsp;
                  <span style={{ color: "#CB2027" }}>your solution?</span>
                </h3>
                <p className="text_body_medium mb24">
                  Please provide further details about the product you have in
                  mind
                </p>
                <Button
                  variant="outlined"
                  color="error"
                  endIcon={<ArrowForwardIcon />}
                  className="outlined_buttton"
                  disableElevation
                >
                  Contact Us
                </Button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3.5}
              md={3}
              lg={4}
              style={{ textAlign: "right" }}
              className="hideForMobileViewOnly"
            >
              <img
                src="/images/developing.svg"
                alt="developing"
                className="card_image"
                width="90%"
              />
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium  " data-aos="fade-up">
              Adding many platforms to the system
            </h3>
            <p className="text_body_medium mt40 mb24 " data-aos="fade-up">
              Initially, the system revolved around self-service payment
              strategically located in popular sites within Azerbaijan. However,
              the wallet recognized the evolving market dynamics and made a
              strategic decision to expand its services online. The company
              aimed to integrate the ledger layer with the newly introduced
              services and payment options available through the Apple and
              Android apps, as well as the native version of the platform.
              TheQRPay took on the responsibility of developing and integrating
              these platforms with the general ledger layer. This task was made
              simpler as the team had already utilized the same API layer and
              established a structured process for extracting and collecting
              data throughout the entire system.
            </p>

            <p className="text_body_medium" data-aos="fade-up">
              The wallet collaborated with TheQRPay to enhance and further
              develop the general ledger layer based on their specific business
              requirements. They demonstrated foresight in anticipating market
              trends and proactively transitioned to a more agile and robust
              solution built on modern technology. The expertise and support
              from TheQRPay's product and experience team facilitated seamless
              integration and the development of a seamless multiplatform access
              to their services.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DigitalWalletSolution;
