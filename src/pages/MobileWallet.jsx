import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MobileWallet = () => {
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
                  Solution for a white-label digital &nbsp;
                  <span style={{ color: "#CB2027" }}>mobile wallet</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  TheQRPay eWallet app software was created to assist you with
                  reducing the time and expense of developing your mobile wallet
                  app. Get everything you need to launch your app quickly, scale
                  it effectively, and delight your consumers to the fullest.
                </p>
                {/* 
              <div
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
        <div className="section_style2">
          <div>
            <h3 className="title_semibold_medium center">
              Numerous use cases on a single mobile wallet platform
            </h3>
            <p className="text_body_medium center mt10 ">
              Take advantage of the digital wallet apps' rising popularity to
              expand your business's revenue opportunities.
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
                  <img
                    src="/images/Wallet-Mobile.svg"
                    alt="Wallet for mobile banking"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Wallet for mobile banking
                  </p>
                  <p className="text_body_small_regular left">
                    By offering your clients a mobile wallet application
                    experience wherever they are, you can engage and keep their
                    business while generating more money.
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
                  <img src="/images/Telecom.svg" alt="Telco wallet" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Telco wallet</p>
                  <p className="text_body_small_regular left">
                    By offering mobile financial services and white-label
                    virtual wallet software to your banked audience, you may
                    broaden financial inclusion for the unbanked and improve
                    their experience.
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
                  <img src="/images/Wallet.svg" alt="Wallet storage" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Wallet storage
                  </p>
                  <p className="text_body_small_regular left">
                    Using a closed-loop eWallet will allow your consumers to
                    manage their assets and conduct transactions within of your
                    ecosystem. Encourage customers to spend more money with you
                    to increase your revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Your consumers will be delighted by your tempting
              <br />
              mobile eWallet applications
            </h3>
            <p className="text_body_medium center mt10 " data-aos="fade-up">
              TheQRPay mWallet app software's unmatched versatility and
              cutting-edge technological stack enable you to create a
              sophisticated application to meet the financial needs of your
              consumers.
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
                  <img src="/images/Bank.svg" alt="Simple bank payments" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Simple bank payments
                  </p>
                  <p className="text_body_small_regular left">
                    Provide bank payments like IBAN and SWIFT through
                    integration with a banking network to satisfy the financial
                    and payment needs of your users. Increase your turnover by
                    catering to numerous customer categories.
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
                  <img src="/images/Wallet.svg" alt="Multi-currency" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Multi-currency
                  </p>
                  <p className="text_body_small_regular left">
                    Customers of your mobile eWallet app will gain from
                    multi-currency/multi-asset accounts. There are no
                    restrictions on the currencies you can establish, including
                    fiat currencies, diamonds, grain, or any other assets, and
                    end users benefit from more simplicity.
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
                    src="/images/Efficient-transaction.svg"
                    alt="Rapid money transfer"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Rapid money transfer
                  </p>
                  <p className="text_body_small_regular left">
                    Offer your consumers a hassle-free option to send and
                    receive money fast, whether it be through internal P2P
                    transfers or cross-border remittance. Expand the scope of
                    your transfer services by integrating with payment- and
                    service providers.
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
                  <img
                    src="/images/Payment-Slip.svg"
                    alt="Hassle free bill payment"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Hassle free bill payment
                  </p>
                  <p className="text_body_small_regular left">
                    Allow your users to save time by paying their bills using
                    your mobile wallet app, including utility bills, cell
                    top-ups, and broadband payments. Through API integration,
                    add support for any vendor you deem necessary.
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
                    src="/images/Currency-Exchange.svg"
                    alt="Currency exchange"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Currency exchange
                  </p>
                  <p className="text_body_small_regular left">
                    Allow clients to execute transactions, buy and sell
                    currencies, and instantly exchange one currency for another
                    within their digital wallets.
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
                    src="/images/Tracking-Finding.svg"
                    alt="Tracking of expenses"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Tracking of expenses
                  </p>
                  <p className="text_body_small_regular left">
                    Helping your clients manage their spending will help their
                    financial situation. They provide users with improved
                    options for financial management when visualized via graphs
                    and charts or displayed on a map.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid container alignItems="center" className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              See examples of how businesses have used our
              <br />
              product in certain scenarios
            </h3>
            <p className="text_body_medium center mt10 mb60" data-aos="fade-up">
              TheQRPay aided regional payment-intensive businesses in
              constructing the business process for retail banks based on our
              digital ledger layer.
            </p>
          </div>
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
        <Grid container alignItems="center" className="section_style">
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
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Build your mobile eWallet app using the newest platform
              <br />
              to make it future-proof
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
                  <img src="/images/Launch.svg" alt="Rapid release" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Rapid release</p>
                  <p className="text_body_small_regular left">
                    For a smooth user experience and a quicker time to market,
                    use TheQRPay's mobile wallet platform as the foundation for
                    your eWallet application. There is no need to start from
                    zero while creating your product, which cuts down on both
                    expenses and time.
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
                  <img
                    src="/images/Tracking-Finding.svg"
                    alt="Strong and tenacious"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Strong and tenacious
                  </p>
                  <p className="text_body_small_regular left">
                    For a frictionless user experience and higher turnover, our
                    mobile wallet system can handle large loads and thousands of
                    transactions per second without experiencing any hiccups.
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
                    src="/images/Cloud-connection.svg"
                    alt="A cutting-edge transactional core"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    A cutting-edge transactional core
                  </p>
                  <p className="text_body_small_regular left">
                    The advanced ledger layer and cutting-edge tech stack of our
                    mobile wallet software make your app future-proof in the
                    long run.
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
                  <img src="/images/Adjustable.svg" alt="Simpler integration" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Simpler integration
                  </p>
                  <p className="text_body_small_regular left">
                    Use the software for your digital wallet app to launch a
                    stand-alone product or integrate it with the current core
                    banking system. A common API makes it possible to connect
                    with outside services.
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
                  <img src="/images/Flexible.svg" alt="Higher scalability" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Higher scalability
                  </p>
                  <p className="text_body_small_regular left">
                    Starting off prepared for phenomenal growth will allow you
                    to serve more customers, expand your reach to new areas, and
                    offer new services with never having to worry about your
                    transaction processing engine covering you.
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
                    src="/images/Cloud-instance.svg"
                    alt="Deployment using the cloud"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Deployment using the cloud
                  </p>
                  <p className="text_body_small_regular left">
                    TheQRPay platform offers a hassle-free method to run a
                    cloud-based eWallet backend application at a minimal cost
                    and without the maintenance headache. It is hosted and
                    deployed in the cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Functionality of the software platform for
              <br />
              theQRPay mobile wallet app
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
                  src="/images/Management_of_currencies.svg"
                  alt="Management of currencies"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Management of currencies
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">
                  Management of the formation of currencies and issuers
                </li>
                <li className="mb6">
                  Manual or automatic insertion of exchange rates (from an
                  external feed)
                </li>
              </ul>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Management_of_transaction.svg"
                  alt="Management of transaction costs and limits"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Management of transaction costs and limits
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">
                  Payer of the transfer commission: shared, sender, and
                  recipient
                </li>
                <li className="mb6">
                  Different commissions for operations amounts within a given
                  range are known as commission ranges.
                </li>
                <li className="mb6">
                  Types of limits:
                  <ul
                    className="text_body_small_regular bullet_color"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Specific period turnover</li>
                    <li className="mb6">Number of operations</li>
                    <li className="mb6">Amount of transactions</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Management_of_contracts.svg"
                  alt="Management of contracts"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Management of contracts (price strategies)
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">
                  Combining limits and fees into a "contract";
                </li>
                <li className="mb6">
                  The development of a range of tariffs from which customers can
                  choose
                </li>
              </ul>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Management_of_roles.svg"
                  alt="Management of roles and permissions"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Management of roles and permissions
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">
                  User creation, role administration, and status control
                </li>
                <li className="mb6">User log history viewing</li>
              </ul>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Customer_support.svg"
                  alt="Customer support & CRM"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Customer support & CRM
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">Profile information & status management</li>
                <li className="mb6">Default KYC management</li>
                <li className="mb6">Accounts status management</li>
                <li className="mb6">Default log of customer activity</li>
              </ul>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/History_of_transactions.svg"
                  alt="History of transactions"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                History of transactions
              </p>
              <ul
                className="text_body_small_regular bullet_color"
                style={{ paddingLeft: "28px" }}
              >
                <li className="mb6">
                  View all transactions of customer’s in all statuses
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center mb60" data-aos="fade-up">
            FAQs for TheQRPay's White Label Mobile Wallet Solution
          </h3>

          <div data-aos="fade-up" data-aos-delay="300">
            <Accordion
              expanded={
                expanded ===
                "Is a TheQRPay mobile wallet platform demonstration available?"
              }
              onChange={handleChange(
                "Is a TheQRPay mobile wallet platform demonstration available?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Is a TheQRPay mobile wallet platform demonstration available?" ? (
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
                  Is a TheQRPay mobile wallet platform demonstration available?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  Yes, you may view a demo of TheQRPay's mobile wallet solution
                  on our product demo website. You don't have to wait after
                  requesting a demo.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Accordion
              expanded={
                expanded ===
                "# there any limitations on where I may use your mobile wallet SDK?"
              }
              onChange={handleChange(
                "# there any limitations on where I may use your mobile wallet SDK?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "# there any limitations on where I may use your mobile wallet SDK?" ? (
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
                  Are there any limitations on where I may use your mobile
                  wallet SDK?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  TheQRPay's mobile wallet platform does not have any
                  limitations based on location. TheQRPay hosts and manages the
                  backend application on AWS or another cloud service provider
                  while your team is in charge of the major databases. As a
                  result, you may adhere to legislative standards for the
                  management and storage of sensitive data.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <Accordion
              expanded={
                expanded ===
                "Is the TheQRPay mobile wallet platform hosted in the cloud or locally?"
              }
              onChange={handleChange(
                "Is the TheQRPay mobile wallet platform hosted in the cloud or locally?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Is the TheQRPay mobile wallet platform hosted in the cloud or locally?" ? (
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
                  Is the TheQRPay mobile wallet platform hosted in the cloud or
                  locally?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb12">
                  The mobile wallet platform is available in two versions:
                </p>
                <ol className="text_body_small_regular">
                  <li>
                    On the marketplaces of the major cloud providers, such as
                    AWS or Azure, the SaaS version is provided with a
                    subscription-based price structure. You receive the app
                    launched and managed in the cloud by us, while the main
                    database is housed on your own server.
                  </li>
                  <li>
                    For a one-time flat charge, the source code license is
                    included with an on-premises version.
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <Accordion
              expanded={
                expanded ===
                "# CaI buy the source code for your mobile wallet system?"
              }
              onChange={handleChange(
                "# CaI buy the source code for your mobile wallet system?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "# CaI buy the source code for your mobile wallet system?" ? (
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
                  Can I buy the source code for your mobile wallet system?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb12">
                  Contact us and let us know what you need for your product if
                  you want to purchase the mobile wallet platform source code.
                </p>
                <p className="text_body_small_regular mb12">
                  There are 3 steps in the purchasing process:{" "}
                </p>
                <ol className="text_body_small_regular">
                  <li>Your team's technical review of the product.</li>
                  <li>
                    Knowledge transfer from our staff to yours throughout this
                    time.
                  </li>
                  <li>Contract signature and code transfer.</li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileWallet;
