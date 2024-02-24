import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GeneralLedger = () => {
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
                  Software for general ledgers and reporting in
                  <br className="hideForMobileViewOnly" /> &nbsp;
                  <span style={{ color: "#CB2027" }}>business process</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  TheQRPay creates software programs that expand a company's
                  capability and streamline account management and transaction
                  settlement.
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg" className="container">
        <h3 className="title_semibold_medium center mb60">
          Accounting, customer management, and business flow automation software
          that can be adjusted
        </h3>
        <Grid container alignItems="center" className="section_style2">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="right_order_maintain"
          >
            <div data-aos="fade-up">
              <h3 className="title_semibold_medium mb40">
                POS and online E-commerce systems
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                TheQRPay creates a solution that may be used to combine several
                entities, like as POS terminals, into a single system and gather
                their data into a single real-time database. The business
                creates commercial general ledger software that users may
                connect to their online stores, mobile apps, and client
                accounts. On top of such systems, the TheQRPay team implemented
                payment gateways for Visa and Mastercard. Read about it in one
                of our cases with a prominent MENA-based e-commerce business.
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
              src="/images/SkilledDeveloper.svg"
              alt="Accounting, customer management"
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Various_currencies.png"
              alt="Various currencies, commissions, and costs"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              Various currencies, commissions, and costs
            </h3>
            <p className="text_body_medium mb24" data-aos="fade-up">
              The incorporation of different currencies into the system is
              possible with the most basic general ledger accounting software.
              It's possible that those are actual currencies with real exchange
              rates. Alternately, awards and bonuses that are convertible into
              certain amounts can be introduced. Accordingly, the ledger layer
              will account for them and assign precise sums to client IDs. This
              feature of the multi asset platform might be the answer for a
              bonus card and loyalty scheme within the e-commerce ecosystem.
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
              <h3 className="title_semibold_medium mb40">
                Management of transactions and accounting
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                Any other multi-user asset accounting system or accurate money
                is provided to the firm by the general ledger software. A
                trustworthy banking general ledger provides a key source for
                managing all financial operations' data as well as information
                matching with banks, third-party services, and business actors.
                AI/ML-focused databases offer better reporting and real-time
                financial analytics features. The integration of data analytics
                capabilities on top of the ledger layer is something that
                TheQRPay has experience with. Watch our demonstration to learn
                how industry-specific reports may be used to better understand
                the operations of firms.
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
              src="/images/php.svg"
              alt="Management of transactions and accounting"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center">
              Features of the multiple ledger method for accounting
            </h3>
          </div>
          <div className="card_holder">
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Pazzel.svg" alt="Design module" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Design module</p>
                  <p className="text_body_small_regular left">
                    The modular architecture of general ledger software enables
                    greater workflow integration into the firm that utilizes it.
                    TheQRPay provides documentation that can be used to build
                    particular business-oriented modules for a task or
                    necessity. The general ledger layer will receive additional
                    functionality from the QRPay team.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Security.svg" alt="Total security" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Total security
                  </p>
                  <p className="text_body_small_regular left">
                    By design, the general ledger layer of TheQRPay is secure.
                    The team has implemented a product development life cycle
                    with a current technological stack, automatic infrastructure
                    status and software quality checks, and tight secure
                    deployment protocols. They have more than ten years of
                    expertise developing banking software.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/api.svg" alt="API based" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">API based</p>
                  <p className="text_body_small_regular left">
                    The architecture of the General Ledger software system is
                    API-oriented. More freedom is provided when constructing the
                    solution from the ground up. The software can be updated
                    separately from the main product without being halted
                    because to the API-oriented design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Grid container alignItems="center" className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              See examples of how businesses have used our ledger
              <br />
              solution in certain scenarios
            </h3>
            <p className="text_body_medium center mt10 mb60" data-aos="fade-up">
              TheQRPay aided regional companies who deal heavily with payments
              in building their business processes on top of our layer of the
              digital ledger.
            </p>
          </div>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Renovating_its_transaction.png"
              alt="Renovating its transaction accounting system is a leading MENA PSP"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              Renovating its transaction accounting system is a leading MENA PSP
            </h3>
            {/* <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Read More
            </Button> */}
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
              <h3 className="title_semibold_medium mb40">
                Constructing a platform for multi-channel payment administration
              </h3>
              <p className="text_body_medium mb40" data-aos="fade-up">
                Learn how we assisted a local player in integrating cash-in
                payment into a single system first and then adding e-commerce
                capability on top of the business flow.
              </p>
              {/* <Button
                data-aos="fade-up"
                variant="outlined"
                color="error"
                endIcon={<ArrowForwardIcon />}
                className="outlined_buttton"
                disableElevation
              >
                Read More
              </Button> */}
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
              src="/images/Constructing_a_platform.png"
              alt="Constructing a platform for multi-channel payment administration"
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Accounting system independent of infrastructure for
              <br /> on-premises and cloud deployment
            </h3>
          </div>

          <Grid container alignItems="center" className="section_style">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="right_order_maintain"
            >
              <p className="text_body_medium" data-aos="fade-up">
                A web-based general ledger program is made to function with
                Azure or Amazon infrastructure. TheQRPay, on the other hand, can
                support the system's launch on any other hardware. The business
                may determine that deploying the ledger internally is the better
                course of action. However, TheQRPay provides a choice for the
                ledger layer's infrastructure to be deployed on the cloud. As a
                result, TheQRPay provides both subscription for the general
                ledger layer and one-time on-premise purchases.
              </p>
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
                src="/images/Illustration.svg"
                alt="Accounting system independent of infrastructure"
                className="right_image_style"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default GeneralLedger;
