import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NeoBank = () => {
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
                  The software needed to create a digital
                  <br className="hideForMobileViewOnly" /> &nbsp;
                  <span style={{ color: "#CB2027" }}>retail bank</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Building a digital retail bank on top of a scalable and
                  adaptable ledger layer platform. go to market more quickly and
                  build a strong core within your consumer banking platform.
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
        <h3 className="title_semibold_medium center mb60">
          Build your digital retail bank using the TheQRPay platform
          <br />
          to prepare it for the future
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
                Speed up time to market
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                Your retail banking software can shorten its development cycle
                with TheQRPay, putting you in prime position for the launch of
                your neobank product. Get your digital-only bank up and running
                as soon as possible to transform the initial years of
                development into the initial years of expanding your clientele
                and revenue.
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
              src="/images/Speed_up_time.png"
              alt="Speed up time to market"
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Developer.png"
              alt="On-premises or in the cloud"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              On-premises or in the cloud
            </h3>
            <p className="text_body_medium" data-aos="fade-up">
              Two versions of TheQRPay's consumer banking software are available
              for digital retail banking: a cloud-based SaaS version and an
              on-premise version with a source code license.
            </p>
            <div data-aos="fade-up">
              <ul className="text_body_medium bullet_color">
                <li>
                  Choose the cloud for a low-cost, quick start with a database
                  managed by your team and a backend program maintained by ours.
                </li>
                <li>
                  Change to an on-premise version at any moment, and you'll have
                  access to the entire system to manage integrations, feature
                  development, and customizations in accordance with your
                  product roadmap.
                </li>
              </ul>
            </div>
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
                Performance that is flawless
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                The most recent version embodies our knowledge and experience,
                which have been built up over years of banking software
                development and hundreds of millions of transactions. The QRPay
                retail banking platform is a robust system that can manage the
                surge in users and transactions, acting as a strong base for any
                features you decide to add.
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
              src="/images/Take_the_steps.png"
              alt="Performance that is flawless"
              className="right_image_style"
            />
          </Grid>
        </Grid>

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
            <p className="text_body_medium mb40" data-aos="fade-up">
              Learn how integrating TheQRPay's on-premise ledger layer software
              with a top payment service provider (NDA) from a MENA nation
              transformed its fundamental transaction accounting system.
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
                Creating a platform for multi-channel payments
              </h3>
              <p className="text_body_medium mb40" data-aos="fade-up">
                See how we assisted a local player in integrating cash-in
                payment into a single system first and then adding e-commerce
                features on top of the business flow.
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
              src="/images/Creating_a_platform.png"
              alt="Creating a platform for multi-channel payments"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div
          className="card4 section_style"
          style={{ backgroundImage: "none" }}
          data-aos="fade-up"
        >
          <Grid container alignItems="center" className="idea_card">
            <Grid item xs={12} sm={8.5} md={9} lg={8}>
              <div className="margin_left_50">
                <h3 className="title_semibold_medium mb6">
                  Let's talk about how we can support the launch of your &nbsp;
                  <span style={{ color: "#CB2027" }}>banking product</span>.
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
                alt="Let's talk about how we can support"
                className="card_image"
                width="90%"
              />
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Your retail banking system should be created with productivity in
              mind
            </h3>
          </div>
          <div className="card_holder">
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Ensure_effective.svg"
                  alt="Ensure effective teamwork"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Ensure effective teamwork
              </p>
              <p className="text_body_small_regular left mb24">
                The back-office of the QRPay consumer banking platform supports
                team agility. This increases the effectiveness of the retail
                banking software team by allowing each member to switch their
                attention from mundane chores to crucial business or customer
                care tasks.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Recognize_and_keep.svg"
                  alt="Recognize and keep your consumers"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Recognize and keep your consumers
              </p>
              <p className="text_body_small_regular left mb24">
                With our retail banking software, you can gather valuable
                information about user activity within the system. This data
                enables you to enhance customer service and promptly meet
                customer needs, resulting in increased loyalty and higher gross
                profit.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Increase_your_revenue.svg"
                  alt="Increase your revenue"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Increase your revenue
              </p>
              <p className="text_body_small_regular left mb24">
                In order to monetize each consumer segment and strike a balance
                between delivering value and boosting your business profit, use
                adjustable transaction fees and limit configuration.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Obtain_new_clients.svg"
                  alt="Obtain new clients"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Obtain new clients
              </p>
              <p className="text_body_small_regular left mb24">
                Utilize individualized pricing strategies to draw in and keep
                customers. Create new customer segments by designing tariffs
                that are desirable to the target market, and earn money from
                other operations' fees as well as an elevated LTV.
              </p>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Detailed explanation of the features of retail banking software
            </h3>
            <p className="text_body_medium center mt10 " data-aos="fade-up">
              The QRPay platform offers a solid foundation for adding a number
              of must-have features to your neobanking solution to make it
              future-proof.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Verification.svg" alt="Onboard customers" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Onboard customers
                  </p>
                  <p className="text_body_small_regular left">
                    The account creation and KYC data collection processes are
                    entirely remote. You are able to incorporate a KYC function
                    using our retail banking software solution.
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
                  <img src="/images/Security.svg" alt="Several localization" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Several localization
                  </p>
                  <p className="text_body_small_regular left">
                    To make your digital bank accessible in the languages that
                    your customers speak, use simple translation management.
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
                  <img
                    src="/images/Hands-bonding.svg"
                    alt="Customer supports"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Customer supports
                  </p>
                  <p className="text_body_small_regular left">
                    Basic capabilities for interacting with bank users and
                    responding to their inquiries. If you require a more
                    advanced solution, there are countless integration options.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Contacts-Paper.svg" alt="Contact list" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Contact list</p>
                  <p className="text_body_small_regular left">
                    Your Neobank users can utilize the tool to deal with the
                    contacts on their contact list. When presented at the
                    appropriate moment, it can make a fantastic referral program
                    opportunity.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Hands-clapping.svg"
                    alt="Dispute settlement"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Dispute settlement
                  </p>
                  <p className="text_body_small_regular left">
                    Allows customers to contest transactions and maintains the
                    history of disputes.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cradit-Digital-transfer.svg"
                    alt="Templates for payments"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Templates for payments
                  </p>
                  <p className="text_body_small_regular left">
                    Preserving payment information for recurring transactions
                    with the client.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Peoples.svg" alt="Roles & permissions" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Roles & permissions
                  </p>
                  <p className="text_body_small_regular left">
                    By modifying the permissions of the pre-configured roles or
                    adding new ones, you may control team access to the
                    back-office.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Tracking-Finding.svg"
                    alt="Peacemaking and agreement"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Peacemaking and agreement
                  </p>
                  <p className="text_body_small_regular left">
                    Automated schedule-based reconciliations, rapid data
                    discrepancy detection, and practical exception management.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cloud-connection.svg"
                    alt="Multiple eyes principle"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Multiple eyes principle
                  </p>
                  <p className="text_body_small_regular left">
                    A traditional mechanism requires two people to approve an
                    action before it can be carried out. It is also known as the
                    maker-checker principle or the two-man rule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              On top of the QRPay platform, create the retail digital bank that
              your consumers will stick with.
            </h3>
            <p className="text_body_medium center mt10 ">
              Due to its customer-centric philosophy, the QRPay platform
              provides the functionality required to doom your neobank to
              failure and make it the main hub for all of your clients' banking
              needs.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Accounts_of_multiple.svg"
                  alt="Accounts of multiple currencies"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Accounts of multiple currencies
              </p>
              <p className="text_body_small_regular left mb24">
                Allow your customers to maintain their money in the currencies
                of their choice. As many currencies as you see necessary can be
                added to the system.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Exchange_currencies.svg"
                  alt="Exchange currencies"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Exchange currencies
              </p>
              <p className="text_body_small_regular left mb24">
                Permit users to use whichever money they like. In order to
                facilitate transactions involving several currencies, automated
                currency exchange is in place.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Visualization.svg"
                  alt="Visualization"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left"> Visualization</p>
              <p className="text_body_small_regular left mb24">
                Spending by your users can be categorized and displayed in
                charts and diagrams. Display transactions on a map based on
                where they were completed.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Issuing_Visa.svg"
                  alt="Issuing Visa/MasterCard"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Issuing Visa/MasterCard
              </p>
              <p className="text_body_small_regular left mb24">
                By issuing Visa/MasterCard cards connected to the customer's
                account (vendor integration necessary), you can provide a
                comprehensive range of cardholder services.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Popular_payments.svg"
                  alt="Popular payments"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left"> Popular payments</p>
              <p className="text_body_small_regular left mb24">
                Integrate neighborhood businesses to make it possible to pay for
                services like cell phone top-ups, other popular services, and
                utility bills online.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Money_transfer.svg"
                  alt="Money transfer"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Money transfer (P2P)
              </p>
              <p className="text_body_small_regular left mb24">
                Allow for easy money transfers to the clients' friends and
                relatives to enable them share the bill and save time.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NeoBank;
