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

const EWalletAppDevelopment = () => {
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
                  Services for developing &nbsp;
                  <span style={{ color: "#CB2027" }}>eWallet applications</span>
                  .
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Lead the way in the digital payments industry with our ewallet
                  app development services offered through TheQRPay. Benefit
                  from cost savings and expedited launch by leveraging our team
                  of skilled fintech software developers to build your digital
                  wallet app on our pre-developed fintech platform.
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
              Fast-track your launch by leveraging a pre-built digital wallet
              platform
            </h3>

            <ul className="text_body_medium bullet_color" data-aos="fade-up">
              <li>
                Achieve significant time savings in development by utilizing
                TheQRPay's battle-tested combination of eWallet app development
                services built on top of a readily available white-label core
                payment platform.
              </li>
              <li className="mt10">
                Harness the expertise of experienced fintech and ewallet app
                development professionals who will utilize TheQRPay fintech
                platform as a cost-effective and time-saving foundation for your
                digital wallet product.
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
              src="/images/SkilledDeveloper.svg"
              alt="Fast-track your launch by leveraging a pre-built digital wallet
              platform"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              All kinds of eWallet application development
            </h3>
          </div>
          <div className="card_holder">
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/api.svg" alt="A self-contained wallet system" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    A self-contained wallet system
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
                  <img src="/images/Wallet.svg" alt="An accessible & inclusive wallet solution" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    An accessible & inclusive wallet solution
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
                  <img src="/images/Card-manage.svg" alt="A partially restricted wallet system" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    A partially restricted wallet system
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
                  <img src="/images/Cradit-deposit.svg" alt="Wallets for mobile" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Wallets for mobile</p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Security.svg" alt="Value stored wallets" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Value stored wallets
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Money-transfer.svg" alt="Telco wallet" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Telco wallet</p>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Cradit-transfer2.svg" alt="Wallet for transportation" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Wallet for transportation
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Money-recived.svg" alt="Wallet for cashbacks/rewards" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Wallet for cashbacks/rewards
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="center" data-aos="fade-up">
            <Button
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              What benefits come with picking the eWallet software
              <br />
              development business TheQRPay?
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
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel1" ? <RemoveIcon /> : <AddIcon />
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
              <div data-aos="fade-up" data-aos-delay="500">
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel3" ? <RemoveIcon /> : <AddIcon />
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
                      <li className="mt10">
                        Development of a range of tariffs from which customers
                        can choose
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel5" ? <RemoveIcon /> : <AddIcon />
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
                      <li className="mt10">Standard KYC management</li>
                      <li className="mt10">
                        Management of customer account status
                      </li>
                      <li className="mt10">
                        The system's default log of user activity
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel2" ? <RemoveIcon /> : <AddIcon />
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
              <div data-aos="fade-up" data-aos-delay="600">
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  className="accrodian_style card_shadow"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel4" ? <RemoveIcon /> : <AddIcon />
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
                    <ul className="text_body_small_regular">
                      <li>Creation of user & roles</li>
                      <li className="mt10">
                        Viewing of back-office user log history
                      </li>
                      <li className="mt10">Default roles</li>
                      <li className="mt10">Status management</li>
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
              Select the highest level of customizations and delivery
            </h3>
            <p className="text_body_medium center mt10 ">
              Our customers have the freedom to choose how they want their
              solution to be delivered and maintained thanks to the mix of
              pre-developed software and eWallet app development services. They
              can choose a solution with superior customizability and vendor
              independence or a less expensive option supported by our internal
              team.
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
              Case studies for eWallet creations
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

export default EWalletAppDevelopment;
