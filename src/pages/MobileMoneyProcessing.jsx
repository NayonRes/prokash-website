import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MobileMoneyProcessing = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
                  <span style={{ color: "#CB2027" }}>eWallet</span> &nbsp; -
                  Enabling mobile money payments.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  A digital payment solutions provider in the EMEA region
                  enables mobile money payments by utilizing funds from telecom
                  wallets, collaborating with Mobile Network Operators (MNOs),
                  and promoting financial inclusion for the unbanked population
                  through the utilization of TheQRPay software and fintech
                  development expertise.
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
        <Grid container alignItems="center" className="section_style">
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
              <h3 className="title_semibold_medium mb40">About eWallet</h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                eWallet, a digital payment solutions provider based in Iraq, was
                established in 2021 with the aim of enhancing the payment
                process for both businesses and consumers in the nation.
              </p>
              <p className="text_body_medium " data-aos="fade-up">
                Since its establishment, eWallet has experienced substantial
                growth and currently caters to a wide range of merchants in
                Iraq. By offering groundbreaking payment solutions, eWallet has
                successfully positioned itself as a prominent player in the
                country's payment service provider landscape.
              </p>
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
              src="/images/About_eWallet.png"
              alt="About eWallet"
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center">Challenges</h3>
            <p className="text_body_medium center mt10 mb24">
              Through its mobile payment acceptance platform, eWallet aims to
              increase the financial inclusion of those who do not have a bank
              account. The concept of incorporating mobile money transactions
              into an already-existing POS network in Iraq would have made it
              possible to develop a system for accepting payments from merchants
              using telecom wallets and mobile money transactions. TheQRPay was
              chosen by the company with this purpose in mind.
            </p>
            <p className="text_body_medium center">
              The main goals of eWallet's future mobile money payment acceptance
              product were to introduce a loyalty system for retailers, create a
              new level of visibility between the company and merchants, and
              create mobile applications for Android and IOS, to improve the
              overall UX for its customers, in addition to improving financial
              inclusion as a key factor.
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
                  <img
                    src="/images/Wallet-manage.svg"
                    alt="Loyalty system for traders"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Loyalty system for traders
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
                  <img
                    src="/images/Tracking-Finding.svg"
                    alt="Enhanced system for reporting"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Enhanced system for reporting
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
                  <img
                    src="/images/Wallet-Mobile.svg"
                    alt="Applications for mobile"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Applications for mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Work_process.png"
              alt="Work process"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40">Work process</h3>
            <div data-aos="fade-up">
              <p className="subtitle_bold mb12">Key milestones:</p>

              <ul className="text_body_medium bullet_color">
                <li>
                  Enable the generation of static QR codes, providing merchants
                  with the ability to initiate payments and create corresponding
                  QR codes.
                </li>
                <li>
                  Integrate the Transfer Notification API, sourced from the
                  Mastercard Notification Service API, into your system.
                </li>
                <li>
                  Receive assistance and guidance during the user acceptance
                  testing phase.
                </li>
                <li>Integration of API for Debit.</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Outcome from business
            </h3>
            <p
              className="text_body_medium center mt10 mb6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              By implementing the TheQRPay platform, eWallet has significantly
              broadened its range of services beyond just accepting payments.
              These new offerings include features such as e-invoicing, digital
              wallets, P2P money transfers, POS payments, mass payments, QR code
              payment services, and more.
            </p>
          </div>

          <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <div data-aos="fade-up" data-aos-delay="300">
                <Accordion
                  expanded={expanded === "Expansion of the customer base"}
                  onChange={handleChange("Expansion of the customer base")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Expansion of the customer base" ? (
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
                      Expansion of the customer base
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      TheQRPay has experienced exceptional triumph in the mobile
                      money and payment processing.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={
                    expanded ===
                    "Elevated customer satisfaction through improved experiences"
                  }
                  onChange={handleChange(
                    "Elevated customer satisfaction through improved experiences"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Elevated customer satisfaction through improved experiences" ? (
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
                      Elevated customer satisfaction through improved
                      experiences
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Customers all over the world can now enjoy the convenience
                      of mobile money payments at multiple retail outlets
                      equipped with TheQRPay enhancing user satisfaction and
                      extending financial access to the unbanked population.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={
                    expanded ===
                    "Enduring impact on the financial ecosystem over the long run"
                  }
                  onChange={handleChange(
                    "Enduring impact on the financial ecosystem over the long run"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Enduring impact on the financial ecosystem over the long run" ? (
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
                      Enduring impact on the financial ecosystem over the long
                      run
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Thanks to TheQRPay's collaboration, a cutting-edge mobile
                      money acceptance system was developed. As mobile money and
                      payment processing continue to surge, TheQRPay is primed
                      to broaden its services and influence in the financial
                      landscape.
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

export default MobileMoneyProcessing;
