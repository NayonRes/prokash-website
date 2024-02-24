import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const P2PDevelopment = () => {
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
                  Development of &nbsp;
                  <span style={{ color: "#CB2027" }}>P2P Payment Apps</span>.
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  With the help of TheQRPay's money transfer app development
                  services, dominate the digital payments industry. Spend less
                  time and money by having a team of committed fintech software
                  developers build your mobile payment solution on a fintech
                  platform that has already been created.
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg" className="container">
        <Grid container alignItems="center" className="section_style2">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="right_order_maintain"
          >
            <h3 className="title_semibold_medium mb40">
              Utilize a pre-built payment platform to hasten the release
            </h3>

            <ul className="text_body_medium bullet_color" data-aos="fade-up">
              <li>
                TheQRPay's tried-and-true combination of affordable remittance
                app development on top of a white-label core transaction engine
                can save you at least a year of development time.
              </li>
              <li className="mt10">
                Hire a group of seasoned experts with expertise in developing
                fintech and payment solutions to work on your mobile payment app
                while using a fintech software shortcut like TheQRPay.
              </li>
            </ul>
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
              alt="Utilize a pre-built payment platform to hasten the release"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Creating several kinds of payment products
            </h3>
            <p className="text_body_medium center mt10 ">
              We offer specialized, state-of-the-art mobile payment and
              remittance solutions. Use our expertise to get user-friendly,
              fully protected p2p payment software with excellent UI/UX design.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Money-transfer.svg" alt="P2P apps for payments" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    P2P apps for payments
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Cradit-transfer2.svg" alt="Apps to transfer money" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Apps to transfer money
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Verification.svg" alt="International remittance apps" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    International remittance apps
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Cradit-Digital-transfer.svg" alt="Mobile payment systems" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Mobile payment systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Why do clients choose TheQRPay to design their
              <br />
              mobile payment software?
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
                  <img src="/images/Peoples.svg" alt="Rapid Development" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Rapid Development
                  </p>
                  <p className="text_body_small_regular left">
                    To power a customized solution for you, we make use of our
                    reliable transaction engine. So, compared to developing the
                    same custom solution from start, you may implement
                    off-the-shelf software quickly and have it customized,
                    expanded, and extended to match your eWallet app
                    requirements.
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
                  <img src="/images/Team.svg" alt="Flawless integrations" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Flawless integrations
                  </p>
                  <p className="text_body_small_regular left">
                    The API endpoints on our platform make it simple to
                    integrate with virtually any third-party service or
                    solution. This increases the potential for time and money
                    savings on our eWallet platform and relieves developers of
                    numerous integration-related hassles.
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
                  <img src="/images/Pazzel.svg" alt="You alone own your data" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    You alone own your data
                  </p>
                  <p className="text_body_small_regular left">
                    Your data is still yours regardless of the delivery method
                    you choose. Our software doesn't create any data records; it
                    merely processes the transactions. Additionally, you have
                    complete control over your core database, which is hosted
                    on-site or in a private cloud without jeopardizing its
                    security through outside access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Development of money transfer apps: default back-end functions
            </h3>
          </div>

          <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              {" "}
              <div data-aos="fade-up" data-aos-delay="300">
                <Accordion
                  expanded={expanded === "eWallets"}
                  onChange={handleChange("eWallets")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "eWallets" ? <RemoveIcon /> : <AddIcon />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      // sx={{ flexShrink: 0 }}
                      className="subtitle_bold"
                    >
                      eWallets
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      It is possible to create multiple wallets in various
                      currencies.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={expanded === "Payments of bills"}
                  onChange={handleChange("Payments of bills")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Payments of bills" ? (
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
                      Payments of bills
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      Access is provided through API integrations with vendors.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <Accordion
                  expanded={
                    expanded === "Control of transaction costs and limits"
                  }
                  onChange={handleChange(
                    "Control of transaction costs and limits"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Control of transaction costs and limits" ? (
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
                      Control of transaction costs and limits
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>
                        Payer of the transfer commission: shared, sender, and
                        recipient
                      </li>
                      <li>
                        Different commissions for operations amounts within a
                        given range are known as commission ranges.
                      </li>
                      <li>
                        Different commissions for operations amounts within a
                        given range are known as commission ranges.
                      </li>
                      <li className="mt10">
                        Types of limits:
                        <ul className="bullet_color">
                          <li>Specific period turnover</li>
                          <li>Number of operations</li>
                          <li>Amount of transactions</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="900">
                <Accordion
                  expanded={expanded === "Peer-to-peer transfers"}
                  onChange={handleChange("Peer-to-peer transfers")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Peer-to-peer transfers" ? (
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
                      Peer-to-peer transfers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      Readily accessible and included as a standard feature.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1100">
                <Accordion
                  expanded={expanded === "Real-time transaction alerts"}
                  onChange={handleChange("Real-time transaction alerts")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Real-time transaction alerts" ? (
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
                      Real-time transaction alerts
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>API notifications for emails</li>
                      <li>SMS notification APIs</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1300">
                <Accordion
                  expanded={
                    expanded ===
                    "APIs provided for seamless integration with other systems."
                  }
                  onChange={handleChange(
                    "APIs provided for seamless integration with other systems."
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "APIs provided for seamless integration with other systems." ? (
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
                      APIs provided for seamless integration with other systems.
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      Readily accessible and included as a standard feature.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1500">
                <Accordion
                  expanded={expanded === "Management of roles and permissions"}
                  onChange={handleChange("Management of roles and permissions")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Management of roles and permissions" ? (
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
                      Management of roles and permissions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>Creation of user & roles</li>
                      <li>Viewing of back-office user log history</li>
                      <li>Default roles</li>
                      <li>Status management</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={expanded === "Management of multiple currencies"}
                  onChange={handleChange("Management of multiple currencies")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Management of multiple currencies" ? (
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
                      Management of multiple currencies
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>
                        Efficient management of currency and issuer creation and
                        status.
                      </li>
                      <li className="mt10">
                        Manual or automatic insertion of exchange rates (from an
                        external feed)
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Accordion
                  expanded={expanded === "KYC online ID verification"}
                  onChange={handleChange("KYC online ID verification")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "KYC online ID verification" ? (
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
                      KYC online ID verification
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      There are APIs for manual approval and integration with
                      outside KYC services.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <Accordion
                  expanded={expanded === "Transfers made internationally"}
                  onChange={handleChange("Transfers made internationally")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Transfers made internationally" ? (
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
                      Transfers made internationally
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      Accessible APIs for integration.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1000">
                <Accordion
                  expanded={expanded === "Currency conversions"}
                  onChange={handleChange("Currency conversions")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Currency conversions" ? (
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
                      Currency conversions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <label className="text_body_small_regular">
                      Accessible between a user's personal accounts.
                    </label>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <Accordion
                  expanded={
                    expanded === "Management of contracts (price plans)"
                  }
                  onChange={handleChange(
                    "Management of contracts (price plans)"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Management of contracts (price plans)" ? (
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
                      Management of contracts (price plans)
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>Combining limits and costs into one "contract"</li>
                      <li>
                        Development of a range of tariffs from which customers
                        can choose
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="1400">
                <Accordion
                  expanded={expanded === "CRM & customer services"}
                  onChange={handleChange("CRM & customer services")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "CRM & customer services" ? (
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
                      CRM & customer services
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="text_body_small_regular bullet_color">
                      <li>
                        Information on customer profiles and status monitoring
                      </li>
                      <li>Standard KYC management</li>
                      <li>Management of customer account status</li>
                      <li>The system's default log of user activity</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Select the appropriate level for delivery and adjustments
            </h3>
            <p className="text_body_medium center mt10 ">
              Our customers have the choice of having their solutions provided
              and maintained in the manner that is most convenient for them
              thanks to the mix of pre-developed software and payment app
              creation services. They have the option of choosing between a
              source code license, which offers high levels of customizability
              and vendor independence and a more affordable SaaS option, which
              is run by our internal personnel.
            </p>
          </div>
          <TableContainer
            className="table_container card_shadow"
            data-aos="fade-up"
          >
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="table_style "
              // style={{ background: "#E2EEFF", borderRadius: "16px" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell>
                    <div className="table_header_box">
                      <p className="title_semibold_small">Top performance</p>
                      Ideal choice for startups and small to medium-sized
                      businesses
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="table_header_box">
                      <p className="title_semibold_small">Full control</p>
                      Perfect for large-scale enterprises and corporations
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Delivery</TableCell>
                  <TableCell align="center">On-premise</TableCell>
                  <TableCell align="center">Hybrid cloud</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>License</TableCell>
                  <TableCell align="center">Source code</TableCell>
                  <TableCell align="center">Saas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customizability</TableCell>
                  <TableCell align="center">Unlimited</TableCell>
                  <TableCell align="center">
                    Third-party service integrations, UI/UX
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>App maintenance</TableCell>
                  <TableCell align="center">
                    Customer’s team responsibility
                  </TableCell>
                  <TableCell align="center">
                    Supervision under TheQYPay
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Main database maintenance</TableCell>
                  <TableCell align="center">
                    Customer’s team responsibility
                  </TableCell>
                  <TableCell align="center">
                    Customer’s team responsibility
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Payment</TableCell>
                  <TableCell align="center">
                    Pay for a single source-code license
                  </TableCell>
                  <TableCell align="center">Monthly payments</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Stories our customers tell
            </h3>
          </div>
          <div className="card_holder">
            <div
              className="card5 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="card_text_box">
                  <p className="title_semibold_small left mb12">
                    TheQRPay is a wallet-compatible <br />
                    payment app
                  </p>

                  <p
                    className="text_body_medium left mb24"
                    style={{ fontWeight: 500 }}
                  >
                    Learn how TheQRPay e-Wallet software and development on top
                    of it allowed to transform a network of cash-in payment into
                    a comprehensive payment app.
                  </p>
                  <Link
                    to="/case-studies/digital-wallet-solution"
                    style={{ textDecoration: "none", color: "#1B55E9" }}
                  >
                    More details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card5 card_shadow"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <div className="card_text_box">
                  <p className="title_semibold_small left mb12">
                    A MENA PSP updates the system for <br />
                    transaction accounting
                  </p>

                  <p
                    className="text_body_medium left mb24"
                    style={{ fontWeight: 500 }}
                  >
                    Examine how a large payment service provider (NDA) in a MENA
                    nation might enhance its primary transaction accounting
                    system by integrating TheQRPay on-premise core software with
                    their current POS system.
                  </p>
                  <Link
                    to="/case-studies/payment-solution-provider"
                    style={{ textDecoration: "none", color: "#1B55E9" }}
                  >
                    More details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default P2PDevelopment;
