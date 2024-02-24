import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const PaymentAcceptance = () => {
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
                  Platform for accepting payments through the
                  <br className="hideForMobileViewOnly" /> &nbsp; cloud for
                  &nbsp;
                  <span style={{ color: "#CB2027" }}>MSPs and PSPs</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Without having to start from scratch, start increasing your
                  revenue by offering merchants who use TheQRPay's payment
                  platform a full suite of online and offline payment acceptance
                  services.
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
                  Get in touch
                </Button>
              </div> */}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg" className="container">
        <h3 className="title_semibold_medium center mb60">
          The program required to establish a top-tier payment
          <br />
          service provider business
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
                All business kinds can be catered
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                empower numerous business types to meet their payment demands
                across diverse channels, including marketplaces,
                brick-and-mortar stores, and online e-commerce.
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
              src="/images/All_business_kinds.png"
              alt="All business kinds can be catered"
              className="right_image_style"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/php.png"
              alt="Accepting payments more quickly"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              Accepting payments more quickly
            </h3>
            <p className="text_body_medium" data-aos="fade-up">
              Get the most customization options possible to create a
              frictionless payment experience both in-person and online.
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
                Both several currencies and channels
              </h3>
              <p className="text_body_medium mb24" data-aos="fade-up">
                Allow businesses to accept cards, digital wallets, bank debit
                payments, and an illimitable amount of currencies.
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
              src="/images/both_several_currencies.png"
              alt="Both several currencies and channels"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Enhance your success by building on top of the payment rails
            </h3>
          </div>
          <div className="card_holder">
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cloud-instance.svg"
                    alt="Enhanced integrations"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Enhanced integrations
                  </p>
                  <p className="text_body_small_regular left">
                    The architecture of TheQRPay's payment acceptance software
                    is integration-ready, saving money on feature development
                    and accelerating releases. You may quickly and efficiently
                    connect a wide range of consumer services thanks to many API
                    endpoints.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Marketplace.svg"
                    alt="Shortened time to market"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Shortened time to market
                  </p>
                  <p className="text_body_small_regular left">
                    Instead of beginning from scratch, the QRPay merchant
                    payment processing platform offers a shortcut to the product
                    development cycle, putting you right on the verge of product
                    launch and saving you at the very least a year of active
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Adjustable.svg" alt="Easier compliance" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Easier compliance
                  </p>
                  <p className="text_body_small_regular left">
                    For maximum security and streamlined regulatory compliance,
                    a hybrid cloud approach enables you to host your app on a
                    public cloud provider and have our staff manage it while
                    hosting your whole database with critical information
                    on-premises or in the private cloud.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cloud-connection.svg"
                    alt="Versatile delivery"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Versatile delivery
                  </p>
                  <p className="text_body_small_regular left">
                    To get started quickly and affordably, choose a hybrid
                    cloud-based architecture. Later, switch to an on-premise
                    source code version for complete control and vendor
                    independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Boost your revenue
            </h3>
            <p className="text_body_medium center mt10 " data-aos="fade-up">
              Utilize adjustable transaction fees and limit setting options to
              increase your revenue, and use individualized tariffs to draw and
              keep clients.
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
                  <img src="/images/Payment-Slip.svg" alt="Adaptive tariffs" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Adaptive tariffs
                  </p>
                  <p className="text_body_small_regular left">
                    Pricing adjustments for the previously created client
                    groupings are simple. Utilize unique tariffs to comply with
                    particular business contract requirements
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
                    src="/images/Price.svg"
                    alt="Separate product pricing & transactions"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Separate product pricing & transactions
                  </p>
                  <p className="text_body_small_regular left">
                    For optimum flexibility, control deposit and payment costs
                    separate from credit card fees and wire transfers
                    (SWIFT/SEPA).
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
                    src="/images/Money-transfer.svg"
                    alt="Limit the flow of money"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Limit the flow of money
                  </p>
                  <p className="text_body_small_regular left">
                    Based on the level of risk, activate turnover and
                    transaction limitations for particular merchant segments to
                    manage potential risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Streamlined development of digital wallet apps
              <br />
              with pre-built back-end features
            </h3>
          </div>

          <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <div data-aos="fade-up" data-aos-delay="300">
                <Accordion
                  expanded={expanded === "Client onboarding"}
                  onChange={handleChange("Client onboarding")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Client onboarding" ? (
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
                      Client onboarding
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol className="text_body_small_regular">
                      <li>Online account creation.</li>
                      <li>Document uploading.</li>
                      <li>Manual data collection connected to KYC.</li>
                      <li>The capability of integrating a KYC vendor.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={expanded === "Management of transactions"}
                  onChange={handleChange("Management of transactions")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Management of transactions" ? (
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
                      Management of transactions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol className="text_body_small_regular">
                      <li>History of transactions.</li>
                      <li>
                        View each transaction's specifics, including the
                        currency, sum, type, time, and date.
                      </li>
                      <li>Exporting transaction history.</li>
                      <li>Deals marked on the map.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <Accordion
                  expanded={expanded === "Online POS system"}
                  onChange={handleChange("Online POS system")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Online POS system" ? (
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
                      Online POS system
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol className="text_body_small_regular">
                      <li>POS registration online.</li>
                      <li>
                        Acceptance of online payments by:
                        <ul
                          className="text_body_small_regular bullet_color"
                          style={{ paddingLeft: "15px" }}
                        >
                          <li>Hosted payment page.</li>
                          <li>Host-to-host integration.</li>
                        </ul>
                      </li>
                      <li>A checkout page you can customize.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="900">
                <Accordion
                  expanded={expanded === "Payment starting"}
                  onChange={handleChange("Payment starting")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Payment starting" ? (
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
                      Payment starting
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular mb12">
                      Send payment requests and invoices using:
                    </p>
                    <ol className="text_body_small_regular">
                      <li>Push Notifications.</li>
                      <li>
                        Dynamic QR-codes that include POS information and
                        transaction amount.
                      </li>
                      <li>
                        A payment link sent by email, messaging apps, or SMS.
                      </li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={expanded === "Acceptance of payment"}
                  onChange={handleChange("Acceptance of payment")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Acceptance of payment" ? (
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
                      Acceptance of payment
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular mb12">
                      Paying in-person:
                    </p>
                    <ol className="text_body_small_regular">
                      <li>
                        Using a digital wallet or debit card from a bank
                        account.
                      </li>
                      <li>
                        Online purchases can be made using credit or debit
                        cards, a digital wallet, or a bank account.
                      </li>
                      <li>Acceptance of tips.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Accordion
                  expanded={expanded === "Regular and immediate payments"}
                  onChange={handleChange("Regular and immediate payments")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Regular and immediate payments" ? (
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
                      Regular and immediate payments
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular mb12">
                      Getting payment sums for the merchant's:
                    </p>
                    <ol className="text_body_small_regular">
                      <li>Bank card.</li>
                      <li>Smartphone.</li>
                      <li>Digital wallet.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <Accordion
                  expanded={expanded === "Creating receipts"}
                  onChange={handleChange("Creating receipts")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Creating receipts" ? (
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
                      Creating receipts
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular mb12">
                      Manually, from the transaction history via the
                      post-transaction email receipts
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1000">
                <Accordion
                  expanded={expanded === "Management of permits and roles"}
                  onChange={handleChange("Management of permits and roles")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Management of permits and roles" ? (
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
                      Management of permits and roles
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ol className="text_body_small_regular">
                      <li>Personal merchant manager.</li>
                      <li>Accountant compliance officer.</li>
                    </ol>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              Accelerated product development and launch
            </h3>
            <p className="text_body_medium center mt10 " data-aos="fade-up">
              By adding the required functionality via TheQRPay's numerous
              RESTful APIs with less capital expenditure (CAPEX), you can launch
              your solution up to three times as quickly*.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Hands-bonding.svg"
                    alt="Surpass the opposition"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Surpass the opposition
                  </p>
                  <p className="text_body_small_regular left">
                    With TheQRPay merchant payment provider software
                    integration-focused architecture, you can win the race for
                    clients by being the first to meet their evolving needs and
                    deliver new services.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cloud-connection.svg"
                    alt="The newest advancements are available to you"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    The newest advancements are available to you
                  </p>
                  <p className="text_body_small_regular left">
                    Your merchant payment processing software can easily enhance
                    its primary feature set by integrating with the top options
                    available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center mb60" data-aos="fade-up">
            TheQRPay Frequently Aske d Questions
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
                "Are there any limitations on where I may use your mobile wallet SDK?"
              }
              onChange={handleChange(
                "Are there any limitations on where I may use your mobile wallet SDK?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Are there any limitations on where I may use your mobile wallet SDK?" ? (
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
                "Can I buy the source code for your mobile wallet system?"
              }
              onChange={handleChange(
                "Can I buy the source code for your mobile wallet system?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Can I buy the source code for your mobile wallet system?" ? (
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
                  There are 3 steps in the purchasing process:
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

export default PaymentAcceptance;
