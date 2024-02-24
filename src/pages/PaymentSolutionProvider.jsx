import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const PaymentSolutionProvider = () => {
  const [active, setActive] = useState("Business Challenges");
  const [active2, setActive2] = useState("Customer’s value");
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
                  Payment solution &nbsp;
                  <span style={{ color: "#CB2027" }}>provider</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  TheQRPay on-premise ledger layer software helps a prominent
                  PSP in the MENA region revolutionize its core transaction
                  accounting system.
                </p>
                <p
                  className="text_body_medium "
                  data-aos="fade-down"
                  data-aos-delay="800"
                  data-aos-offset="0"
                >
                  By seamlessly integrating it with their existing POS software,
                  our customer company was able to gain a comprehensive view of
                  the entire payment cycle, including acceptance,
                  reconciliation, settlement, and payout. This integration
                  ensured transparency in the flow of money and facilitated
                  everyday accounting processes.
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
            <p className="text_body_medium " data-aos="fade-up">
              Driven by the vision of promoting cashless payments and enhancing
              the transparency and seamlessness of the payment acceptance
              process, our client, a prominent payment solution provider in
              their country, initiated a transformative journey to upgrade their
              core transaction accounting system. Their objective was not only
              to swiftly deliver an enhanced customer experience but also to
              ensure scalability to accommodate a large user base.
            </p>
          </Grid>
        </Grid>

        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center">
              An example of a customer company
            </h3>
            <p className="text_body_medium center mt10 ">
              Our client is a prominent company in their country, offering
              comprehensive solutions for digital banking, business management,
              POS terminals, and payment acceptance to financial institutions
              and SMBs. They cater to a wide range of merchants, provide support
              for payment terminals, and handle daily transaction processing.
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
                  <img src="/images/Verification.svg" alt="Verification" />
                </div>
                <div className="card_text_box">
                  <p className="text_body_small_regular left">
                    With the mission to democratize payments and commerce
                    technology, our company empowers both large enterprises and
                    small businesses to effortlessly accept online and in-store
                    payments, utilize e-wallets, and access a wide range of
                    features including inventory management, sales tracking,
                    order management, and much more, all within a unified and
                    user-friendly application.
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
                  <img src="/images/POS.svg" alt="POS" />
                </div>
                <div className="card_text_box">
                  <p className="text_body_small_regular left">
                    By introducing its innovative technology that enables
                    smartphones to function as point-of-sale (POS) terminals,
                    the company revolutionized digital payments for small and
                    medium-sized enterprises (SMEs). With a focus on expanding
                    the technology throughout the MENA region, the company
                    formed strategic partnerships with renowned global payment
                    institutions such as Mastercard, Visa, and a prominent local
                    bank.
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
                  <img src="/images/Money-transfer.svg" alt="Money transfer" />
                </div>
                <div className="card_text_box">
                  <p className="text_body_small_regular left">
                    The company is actively expanding its presence in various
                    countries within the region to promote financial inclusion
                    for all. Additionally, it collaborates with other fintech
                    companies to provide a customized range of payment solutions
                    specifically designed for local businesses in sectors such
                    as banking, retail, food, wholesale, hospitality, and
                    healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">Faced challenges</h3>
            <p
              className="text_body_medium center mt10 mb6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              The management of our client company was searching for a software
              provider to upgrade their outdated transaction accounting system.
              They required ledger layer software that might fundamentally alter
              their current accounting procedure.
            </p>
            <p
              className="text_body_medium center"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-offset="0"
            >
              This action would not only give businesses a clear picture of
              their balances and settlement procedures, improving customer
              service, but it would also pave the door for market share increase
              both domestically and internationally.
            </p>
          </div>
          <div className="menu_button_group_holder" data-aos="fade-up">
            <div className="menu_button_group">
              <div
                className={`menu_button ${
                  active === "Business Challenges" ? "menu_button_active" : ""
                }`}
                onClick={() => setActive("Business Challenges")}
              >
                Business Challenges
              </div>
              <div
                className={`menu_button ${
                  active === "Challenges for a CTO" ? "menu_button_active" : ""
                }`}
                onClick={() => setActive("Challenges for a CTO")}
              >
                Challenges for a CTO
              </div>
              <div
                className={`menu_button ${
                  active === "Challenges for a CFO" ? "menu_button_active" : ""
                }`}
                onClick={() => setActive("Challenges for a CFO")}
              >
                Challenges for a CFO
              </div>
            </div>
          </div>
          {active === "Business Challenges" && (
            <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                {" "}
                <div data-aos="fade-up" data-aos-delay="300">
                  <Accordion
                    expanded={
                      expanded === "Scaling and venturing into untapped markets"
                    }
                    onChange={handleChange(
                      "Scaling and venturing into untapped markets"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Scaling and venturing into untapped markets" ? (
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
                        Scaling and venturing into untapped markets
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h6 className="text_body_small_regular fw600">
                        Secure a scalable and resilient solution
                      </h6>
                      <p className="text_body_small_regular mb6">
                        Efficient management of currency and issuer creation and
                        status.
                      </p>
                      <h6 className="text_body_small_regular fw600">
                        Guarantee improved integration capabilities
                      </h6>
                      <p className="text_body_small_regular mb6">
                        The company's reliance on a single acquiring bank
                        resulted in reduced flexibility and increased service
                        fees for customers using alternative banks, while also
                        constraining the company's own growth prospects.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Accordion
                    expanded={
                      expanded ===
                      "Updating and modernizing business operations"
                    }
                    onChange={handleChange(
                      "Updating and modernizing business operations"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Updating and modernizing business operations" ? (
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
                        Updating and modernizing business operations
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h6 className="text_body_small_regular fw600">
                        Implement a fresh accounting system
                      </h6>
                      <p className="text_body_small_regular mb6">
                        This will enable automated payment settlements, leading
                        to quicker transactions and streamlined tracking of
                        transaction statuses.
                      </p>
                      <h6 className="text_body_small_regular fw600">
                        Customize the software to seamlessly align with the
                        business workflow
                      </h6>
                      <p className="text_body_small_regular mb6">
                        Enhancing the team's workspace would lead to higher
                        productivity and job satisfaction levels.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Accordion
                    expanded={
                      expanded === "Enhanced customer experience elevation"
                    }
                    onChange={handleChange(
                      "Enhanced customer experience elevation"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Enhanced customer experience elevation" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Enhanced customer experience elevation
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h6 className="text_body_small_regular fw600">
                        Revamp the breakdown of customer balances
                      </h6>
                      <p className="text_body_small_regular mb6">
                        The former accounting process heavily dependent on the
                        acquiring bank lacked transparency and clear settlement
                        for end-users, making it difficult to access their
                        account statements.
                      </p>
                      <h6 className="text_body_small_regular fw600">
                        Streamline and automate the reconciliation procedure
                      </h6>
                      <p className="text_body_small_regular mb6">
                        The existing backend system lacked automated
                        reconciliation capabilities for customer accounts,
                        resulting in substantial manual workload.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          )}
          {active === "Challenges for a CTO" && (
            <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                {" "}
                <div data-aos="fade-up" data-aos-delay="300">
                  <Accordion
                    expanded={
                      expanded ===
                      "Create a robust transaction accounting framework"
                    }
                    onChange={handleChange(
                      "Create a robust transaction accounting framework"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Create a robust transaction accounting framework" ? (
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
                        Create a robust transaction accounting framework
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular mb6">
                        The adopted model utilizing TheQRPay's system involved
                        organizing data collected by the system and implementing
                        role-based data access for platform users.
                      </p>

                      <p className="text_body_small_regular">
                        TheQRPay's transaction core, equipped with ledgering
                        capabilities, was tailored to gather transaction data
                        from the POS, associate it with specific merchant
                        accounts, and monitor the transaction status until the
                        funds reached the merchant's account.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Accordion
                    expanded={
                      expanded === "Develop an end-user back-office interface"
                    }
                    onChange={handleChange(
                      "Develop an end-user back-office interface"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Develop an end-user back-office interface" ? (
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
                        Develop an end-user back-office interface
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        To enhance operational efficiency for both the company's
                        staff and customers, the implementation of TheQRPay
                        platform's built-in features facilitated seamless
                        back-office functionalities for transaction analysis,
                        management, and history viewing. Additionally, a
                        user-friendly back-office for merchants was integrated,
                        granting them access to transaction histories and
                        payment details.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <Accordion
                    expanded={
                      expanded ===
                      "Introduce a system with role-based access control"
                    }
                    onChange={handleChange(
                      "Introduce a system with role-based access control"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Introduce a system with role-based access control" ? (
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
                        Introduce a system with role-based access control
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        A new actors model was implemented, incorporating
                        distinct access levels for various system roles. This
                        streamlined merchant onboarding and simplified data
                        access management based on each user's role within the
                        company.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                  <Accordion
                    expanded={
                      expanded ===
                      "Enhance the system's integration capabilities"
                    }
                    onChange={handleChange(
                      "Enhance the system's integration capabilities"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Enhance the system's integration capabilities" ? (
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
                        Enhance the system's integration capabilities
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        At the beginning, the company solely partnered with a
                        local bank, utilizing their subaccount system. This
                        presented a difficulty in reconciling transactions as
                        the bank held exclusive control over transaction
                        details, hindering the ability to collect and analyze
                        customer transaction statistics for forecasting
                        purposes.
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
                      "Facilitate the acceptance of online payments"
                    }
                    onChange={handleChange(
                      "Facilitate the acceptance of online payments"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Facilitate the acceptance of online payments" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Facilitate the acceptance of online payments
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        The company's ambition to expand its market share among
                        ecommerce merchants was realized through seamless
                        integration with MPGS (Mastercard Payment Gateway
                        Services). This integration facilitated efficient
                        tracking and settlement of payments directly from the
                        merchant's e-commerce platform.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Accordion
                    expanded={
                      expanded === "Develop a fees configuration feature"
                    }
                    onChange={handleChange(
                      "Develop a fees configuration feature"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "Develop a fees configuration feature" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Develop a fees configuration feature
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        Initially, modifying the system's commissions and fees
                        necessitated extra development and redeployment efforts.
                        However, leveraging TheQRPay's integrated fees and
                        limits management feature, a tailored solution was
                        adopted, enabling real-time adjustments to commission
                        fees without the need for altering the source code and
                        redeploying.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <Accordion
                    expanded={
                      expanded ===
                      "Develop a scalable architectural solution to accommodate future growth"
                    }
                    onChange={handleChange(
                      "Develop a scalable architectural solution to accommodate future growth"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Develop a scalable architectural solution to accommodate future growth" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Develop a scalable architectural solution to accommodate
                        future growth
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        TheQRPay solution seamlessly replaced the outdated
                        legacy system and accounting model, entirely avoiding
                        data migration or reliance on obsolete components. This
                        enabled the new system to be constructed on a
                        contemporary architecture, leveraging state-of-the-art
                        technology stack.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          )}
          {active === "Challenges for a CFO" && (
            <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                {" "}
                <div data-aos="fade-up" data-aos-delay="300">
                  <Accordion
                    expanded={
                      expanded ===
                      "Acquire a dependable data repository for all transaction records"
                    }
                    onChange={handleChange(
                      "Acquire a dependable data repository for all transaction records"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Acquire a dependable data repository for all transaction records" ? (
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
                        Acquire a dependable data repository for all transaction
                        records
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        The current system lacked the capability to connect
                        accepted payment sums with merchant IBANs, preventing
                        comparison with bank-provided data for payouts.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Accordion
                    expanded={
                      expanded ===
                      "Establish the commission rate and determine the profit figure"
                    }
                    onChange={handleChange(
                      "Establish the commission rate and determine the profit figure"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Establish the commission rate and determine the profit figure" ? (
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
                        Establish the commission rate and determine the profit
                        figure
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        The purpose was to organize the merchant payment data
                        sent to the bank, track the commissions they paid, and
                        gain insights into the customer's profits.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <Accordion
                    expanded={
                      expanded ===
                      "Adjust fees and limits seamlessly without the need for altering the source code"
                    }
                    onChange={handleChange(
                      "Adjust fees and limits seamlessly without the need for altering the source code"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Adjust fees and limits seamlessly without the need for altering the source code" ? (
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
                        Adjust fees and limits seamlessly without the need for
                        altering the source code
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        Initially, configuring personalized commissions for
                        particular transactions posed challenges. The customer
                        sought a user-friendly, integrated feature to
                        effortlessly adjust fees and limits, aligning with the
                        company's unique business requirements.
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
                      "Establish access controls at the product level"
                    }
                    onChange={handleChange(
                      "Establish access controls at the product level"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Establish access controls at the product level" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Establish access controls at the product level
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        This crucial step aimed to safeguard sensitive business
                        data, uphold the "four-eyes principle," and streamline
                        daily workflows for team members by effectively
                        distributing operational and financial responsibilities.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Accordion
                    expanded={
                      expanded === "Enhance the process of financial reporting"
                    }
                    onChange={handleChange(
                      "Enhance the process of financial reporting"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Enhance the process of financial reporting" ? (
                          <RemoveIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography className="subtitle_bold">
                        Enhance the process of financial reporting
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular mb6">
                        The company maintained a strategic outlook on product
                        and company development.
                      </p>
                      <p className="text_body_small_regular  ">
                        By implementing comprehensive reporting and monitoring
                        capabilities, the system enables end-to-end process
                        tracking, swift handling of operational exceptions
                        without altering the source code, and significantly
                        reduces manual efforts in financial performance
                        monitoring.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          )}
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Why did our customers choose TheQRPay?
            </h3>
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
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">The work process</h3>
            <p className="text_body_medium center mt10 mb60">
              A team of seasoned specialists from TheQRPay and the customer
              company's personnel, as well as the company's advanced
              requirements, called for the development of bespoke features on
              top of the existing TheQRPay platform.
            </p>
            <p className="title_semibold_small center">
              Key milestones on the roadmap
            </p>
          </div>
          <div className="card_holder">
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  1
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  Connecting with the POS network of the business to create
                  payments within the new transaction accounting system.
                </p>
              </div>
            </div>
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  2
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  By incorporating a flexible fee and commission configuration
                  feature, you can easily determine your company's profits.
                </p>
              </div>
            </div>
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  3
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  Establishing a merchant's back-office system that provides
                  immediate access to account balances, POS listings etc.
                </p>
              </div>
            </div>
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  4
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  Integrating an automated payment reconciliation system.
                </p>
              </div>
            </div>
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  5
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  Automate the process of transferring funds to a merchant's
                  IBAN account once the payment is settled by the bank.
                </p>
              </div>
            </div>
            <div className="card7 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div
                  className="step_number"
                  style={{
                    background: "none",
                    border: "1px Solid #fff",
                    marginBottom: 0,
                  }}
                >
                  6
                </div>
              </div>

              <div className="card3_right card3_right_padding">
                <p className="text_body_small_regular left">
                  Enabling merchants to automatically deduct loan payments from
                  their earnings until the loan is fully repaid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">Business Result</h3>
            <p
              className="text_body_medium center mt10 mb6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              TheQRPay assisted in reinventing the technology and procedures
              underlying the accounting system of the client company and
              launching a scalable, future-proof solution.
            </p>
            <p
              className="text_body_medium center"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-offset="0"
            >
              A new accounting system built on ledger layer software is now
              integrated with a vast network of the customer's POS terminals
              spanning multiple nations in the MENA area thanks to partnership
              with TheQRPay.
            </p>
          </div>
          <div className="menu_button_group_holder" data-aos="fade-up">
            <div className="menu_button_group2">
              <div
                className={`menu_button ${
                  active2 === "Customer’s value" ? "menu_button_active" : ""
                }`}
                onClick={() => setActive2("Customer’s value")}
              >
                Customer’s value
              </div>
              <div
                className={`menu_button ${
                  active2 === "Future prospects" ? "menu_button_active" : ""
                }`}
                onClick={() => setActive2("Future prospects")}
              >
                Future prospects
              </div>
            </div>
          </div>
          {active2 === "Customer’s value" && (
            <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                {" "}
                <div data-aos="fade-up" data-aos-delay="300">
                  <Accordion
                    expanded={expanded === "Enhanced and streamlined"}
                    onChange={handleChange("Enhanced and streamlined")}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "Enhanced and streamlined" ? (
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
                        Enhanced and streamlined
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        TheQRPay's transaction core, equipped with ledgering
                        capabilities, was tailored to gather transaction data
                        from the POS, associate it with specific merchant
                        accounts, and monitor the transaction status until the
                        funds reached the merchant's account.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Accordion
                    expanded={
                      expanded ===
                      "Elevated customer satisfaction and improved user journey"
                    }
                    onChange={handleChange(
                      "Elevated customer satisfaction and improved user journey"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Elevated customer satisfaction and improved user journey" ? (
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
                        Elevated customer satisfaction and improved user journey
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        By integrating the APIs from the new ledger software,
                        the customer company significantly enhanced its user
                        experience. The revamped and user-friendly back office
                        empowers merchants with comprehensive access to
                        real-time information on their balances and
                        transactions, encompassing the entire payment flow, from
                        customer payments to settled payouts and commission
                        amounts received to their IBANs.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <Accordion
                    expanded={
                      expanded ===
                      "Expanded collaborations with financial institutions"
                    }
                    onChange={handleChange(
                      "Expanded collaborations with financial institutions"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Expanded collaborations with financial institutions" ? (
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
                        Expanded collaborations with financial institutions
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        By adopting a new core accounting system, the company
                        overcame bank integration obstacles and expanded its
                        services by collaborating with numerous local banks,
                        catering to customers' diverse banking preferences.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <div data-aos="fade-up" data-aos-delay="400">
                  <Accordion
                    expanded={
                      expanded === "Enhanced capacity for growth and expansion"
                    }
                    onChange={handleChange(
                      "Enhanced capacity for growth and expansion"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Enhanced capacity for growth and expansion" ? (
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
                        Enhanced capacity for growth and expansion
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        TheQRPay solution seamlessly replaced the outdated
                        legacy system and accounting model without the need for
                        data migration or reliance on outdated components. This
                        enabled the implementation of a modern architecture
                        utilizing cutting-edge technology stack, fortified
                        security measures, and robust infrastructure with
                        continuous code quality monitoring.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Accordion
                    expanded={
                      expanded === "Broadened the scope of the target market"
                    }
                    onChange={handleChange(
                      "Broadened the scope of the target market"
                    )}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded ===
                        "Broadened the scope of the target market" ? (
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
                        Broadened the scope of the target market
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        The integration of Mastercard Payment Gateway Services
                        enabled the company to expand, target e-commerce
                        sectors, and attract numerous merchants, establishing
                        itself as a prominent payment acceptance service
                        provider.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div data-aos="fade-up" data-aos-delay="800">
                  <Accordion
                    expanded={expanded === "Limitless potential for expansion"}
                    onChange={handleChange("Limitless potential for expansion")}
                    className="accrodian_style card_shadow"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "Limitless potential for expansion" ? (
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
                        Limitless potential for expansion
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular">
                        By leveraging TheQRPay's software solution to address
                        crucial challenges, the customer can confidently proceed
                        with its envisioned international expansion, assured
                        that the platform will scale seamlessly and remain
                        adaptable to incorporate future components if required.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          )}
          {active2 === "Future prospects" && (
            <Grid container spacing={{ lg: 3, md: 0, sm: 0, xs: 0 }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {" "}
                <div data-aos="fade-up" data-aos-delay="300">
                  <Accordion
                    expanded={expanded === "Possible future expansion"}
                    onChange={handleChange("Possible future expansion")}
                    className="accrodian_style card_shadow mb24"
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "Possible future expansion" ? (
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
                        Possible future expansion
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text_body_small_regular mb6">
                        The redesigned project architecture and efficient
                        transaction processing enabled seamless integration with
                        other platforms in the customer's system, including the
                        merchant management system and payment gateway,
                        resulting in a powerful and unified product ecosystem.
                      </p>
                      <p className="text_body_small_regular">
                        Combined with its cutting-edge technology stack,
                        streamlined Product Development Life Cycle (PDLC), and
                        upgraded infrastructure, TheQRPay system fosters a
                        conducive environment for predictable growth and
                        expansion into uncharted markets.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
            </Grid>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PaymentSolutionProvider;
