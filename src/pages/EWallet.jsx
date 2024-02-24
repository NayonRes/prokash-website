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

const EWallet = () => {
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
                  A customizable digital wallet software platform that can be
                  branded and tailored to &nbsp;
                  <span style={{ color: "#CB2027" }}>
                    fit your specific needs
                  </span>
                  .
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  TheQRPay offers a flexible and scalable ledger layer software
                  that enables you to either build a standalone digital wallet
                  or enhance your existing product with electronic asset
                  accounting functionality. By utilizing TheQRPay ewallet
                  software, you can expedite your time-to-launch and expand into
                  new markets efficiently.
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Container maxWidth="lg" className="container">
        <div className="section_style2">
          <div>
            <h3 className="title_semibold_medium center">
              Start quickly with our cloud-hosted digital wallet software
              solution
            </h3>
            <p className="text_body_medium center mt10 ">
              Experience the convenience of a flexible pay-as-you-go pricing
              model without any long-term commitments or large upfront
              investments. Entrust us with the maintenance of your eWallet app
              engine while you focus on your core business.
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
                  <img src="/images/Cloud-instance.svg" alt="Native-cloud" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Native-cloud</p>
                  <p className="text_body_small_regular left">
                    TheQRPay team manages and maintains the cloud-deployed and
                    hosted backend application for the wallet, ensuring its
                    smooth operation without requiring any effort or resources
                    from your end.
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
                    src="/images/Cloud-connection.svg"
                    alt="Works anywhere"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Works anywhere
                  </p>
                  <p className="text_body_small_regular left">
                    With your company's server hosting the database, you gain
                    the advantage of easier regulatory compliance regardless of
                    the location.
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
                  <img src="/images/API_Doc.svg" alt="Driven API" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Driven API</p>
                  <p className="text_body_small_regular left">
                    With an extensive range of API endpoints, the digital wallet
                    allows you to seamlessly connect your payment solution to a
                    wide variety of customer services in a quick and
                    cost-effective manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
              <div data-aos="fade-up" data-aos-delay="500">
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
              <div data-aos="fade-up" data-aos-delay="700">
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div data-aos="fade-up" data-aos-delay="400">
                <Accordion
                  expanded={expanded === "Frequently-used payment methods"}
                  onChange={handleChange("Frequently-used payment methods")}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Frequently-used payment methods" ? (
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
                      Frequently-used payment methods
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Incorporate local vendors into the system to enable
                      convenient payment options for utility bills, broadband
                      services, mobile phone recharge, and other popular
                      services.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <Accordion
                  expanded={
                    expanded ===
                    "Expense visualization or visual representation of expenditures"
                  }
                  onChange={handleChange(
                    "Expense visualization or visual representation of expenditures"
                  )}
                  className="accrodian_style card_shadow mb24"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded ===
                      "Expense visualization or visual representation of expenditures" ? (
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
                      Expense visualization or visual representation of
                      expenditures
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Enhance your customers' expense tracking experience with
                      visual charts and graphs, and further convenience them by
                      providing a transaction map based on the location of each
                      transaction.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <Accordion
                  expanded={expanded === "Foreign exchange of currencies"}
                  onChange={handleChange("Foreign exchange of currencies")}
                  className="accrodian_style card_shadow"
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "Foreign exchange of currencies" ? (
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
                      Foreign exchange of currencies
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text_body_small_regular">
                      Empower customers to create wallets in various currencies
                      and conduct currency conversions seamlessly within their
                      accounts.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Electronic wallet for unlimited growth
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
                  src="/images/Both_for_customers.svg"
                  alt="Both for customers and businesses"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Both for customers and businesses
              </p>
              <p className="text_body_small_regular left mb24">
                Serve both individual and commercial customers, assisting them
                in making purchases and paying for them online, in person, or
                even on the go.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Introducing_the_new.svg"
                  alt="Introducing the new markets"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Introducing the new markets
              </p>
              <p className="text_body_small_regular left mb24">
                Take advantage of the chance to reach the underserved population
                in regions (such the Middle East and Africa) where the demand
                for digital wallet services is increasing and well-known payment
                providers don't operate. Utilize skills for several languages
                and currencies to attract clients from any location.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Open_up_new.svg"
                  alt="Open up new sources of income"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Open up new sources of income
              </p>
              <p className="text_body_small_regular left mb24">
                To mention a few applications, our virtual wallet software can
                be used to create a loyalty or rewards program, provide staff
                lunch coupons, gift prepaid cards, etc. Profit from each
                consumer category by using adjustable commissions, operating
                costs, and cap sizes. Find a way to reconcile providing clients
                with value with growing your profit line.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Increasing_team.svg"
                  alt="Increasing team output"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Increasing team output
              </p>
              <p className="text_body_small_regular left mb24">
                Your team can accomplish more by using the backoffice of the
                QRPay digital wallet platform. To affect total customer
                satisfaction and encourage revenue growth, provide each staff
                member the freedom to concentrate on crucial business activities
                rather than dealing with the mundane.
              </p>
            </div>
          </div>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center" data-aos="fade-up">
            Use cases for the digital wallet provided by TheQRPay
          </h3>
          <p className="text_body_medium center mt10 " data-aos="fade-up">
            Our eWallet platform is flexible and adaptable, making it suitable
            for a range of businesses and sectors. Just a few instances of how
            it can be used to create new revenue streams for established firms
            are provided below.
          </p>

          <div className="card_holder">
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Marketplace.svg"
                    alt="Retail and e-commerce marketplaces"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Retail and e-commerce marketplaces
                  </p>
                  <p className="text_body_small_regular left">
                    By allowing P2P transfers between them in different
                    currencies, you may connect buyers and sellers. To secure
                    the funds, establish an intermediate function akin to escrow
                    where the money is held after it has been paid until the
                    buyer is satisfied with the transaction.
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
                  <img src="/images/Peoples.svg" alt="Loyalty initiative" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Loyalty initiative
                  </p>
                  <p className="text_body_small_regular left">
                    Construct a rewards scheme around a closed-wallet setup. You
                    can introduce prepaid, gift, or bonus cards, keeping track
                    of every transaction and instantly updating balances, which
                    will benefit your consumers or staff more.
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
                  <img src="/images/Telecom.svg" alt="Telecommunications" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Telecommunications
                  </p>
                  <p className="text_body_small_regular left">
                    Utilize a digital wallet provider's software to establish a
                    new revenue stream. Give clients a substitute for bank
                    accounts by enabling them to send and receive money as well
                    as make payments using their mobile balances.
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
                    src="/images/Tracking-Finding.svg"
                    alt="Asset management"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Asset management
                  </p>
                  <p className="text_body_small_regular left">
                    Add a ledger layer for asset accounting to your current
                    service or product. Give each individual machine, car, or
                    appliance a wallet, and use it to store, transfer, and keep
                    an eye on any asset of your choosing.
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
                  <img src="/images/Contacts-Paper.svg" alt="Banks" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Banks</p>
                  <p className="text_body_small_regular left">
                    Keep up with the competition and earn more money by offering
                    your clients mobile wallet services round-the-clock.
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
                  <img src="/images/Adjustable.svg" alt="Gaming sector" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Gaming sector</p>
                  <p className="text_body_small_regular left">
                    For ease and more engagement, allow your clients to store
                    their assets in their wallets and make payments with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center" data-aos="fade-up">
              One-stop shop for digital wallets
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
                  <img
                    src="/images/Launch.svg"
                    alt="Shortened time to market"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Shortened time to market
                  </p>
                  <p className="text_body_small_regular left">
                    There isn't a one eWallet that fits all, but TheQRPay
                    simplifies the creation procedure. Use the cloud-hosted
                    version of your eWallet software or install it on your own
                    servers for a quicker start. There is no need to start from
                    scratch, which drastically reduces the expenses and time of
                    development.
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
                  <img src="/images/Cloud-instance.svg" alt="Simple start" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Simple start</p>
                  <p className="text_body_small_regular left">
                    The delivery of our digital wallet technology uses the cloud
                    and a subscription-based business model. No commitment or
                    huge upfront investments. Take advantage of cloud-hosted
                    software without having to deal with maintenance issues.
                    However, we also provide on-premise software if that's what
                    you're after.
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
                    alt="Powerful transactions"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Powerful transactions
                  </p>
                  <p className="text_body_small_regular left">
                    The strong ledger on our eWallet API platform was created
                    using the most recent financial software development
                    techniques. It can manage the increase in operations and
                    users so that your team can concentrate on building the
                    specific functionality without having to tinker with the
                    code.
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
                    src="/images/Pazzel.svg"
                    alt="Independent or Integrated"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Independent or Integrated
                  </p>
                  <p className="text_body_small_regular left">
                    Launch a full-featured digital wallet product or integrate
                    an e-wallet payment solution into your current offering to
                    maximize your product's revenue-generating potential.
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
                  <img src="/images/Flexible.svg" alt="Extremely scalable" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Extremely scalable
                  </p>
                  <p className="text_body_small_regular left">
                    TheQRPay has you covered whether you process 10, ten
                    thousand, or ten million transactions per day. We are able
                    to continue growth as an eWallet provider at any rate,
                    allowing you to concentrate on expanding your business.
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
                  <img src="/images/api.svg" alt="Improved integrations" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Improved integrations
                  </p>
                  <p className="text_body_small_regular left">
                    Using our global API, you can provide your eWallet product
                    new features. Integrate with virtually every available
                    solution to quickly meet consumer requests and beat out the
                    competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">Case studies</h3>
            <p className="text_body_medium center mt10 ">
              TheQRpay assisted businesses who deal with payments in building
              their payment solutions on
              <br /> top of our platform for virtual wallets.
            </p>
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
                    TheQRPay is a wallet-compatible
                    <br />
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
                    A MENA PSP updates the system for <br /> transaction
                    accounting
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
        <div className="section_style">
          <div data-aos="fade-up" className="mb60">
            <h3 className="title_semibold_medium center">
              Select the best virtual wallet software option
            </h3>
            <p className="text_body_medium center mt10 ">
              For creating flexible solutions or enhancing ones that currently
              exist, our eWallet SDK can be applied in a number of different
              ways. Select the pricing and delivery options that are best for
              your company.
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
                      <p className="title_semibold_small">Hybrid cloud Saas</p>
                      Best startup fit
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="table_header_box">
                      <p className="title_semibold_small">
                        Source code with license
                      </p>
                      Best for enterprise level business
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Source code license
                  </TableCell>
                  <TableCell align="center"> --</TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "#fff" }}>
                  <TableCell>Price</TableCell>
                  <TableCell align="center">from 600/month</TableCell>
                  <TableCell align="center">200,000 flat fee</TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    {" "}
                    Customer features
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Digital onboarding</TableCell>
                  <TableCell align="center">Advanced</TableCell>
                  <TableCell align="center">Advanced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Multiple currency accounts
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Assets transfers
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    View history of transactions
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Account balance view
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Exchange currency
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Export transaction history
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Popular payments
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Payment gateways
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "none" }}>
                    Balance visualizations
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    {" "}
                    Currencies
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Currency & status management</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell>Currency exchange rates input</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    {" "}
                    Customer support & CRM system
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Profile & status management</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell>Account status management</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>All statuses transaction logs</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Advanced activity logs</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    {" "}
                    Back end features
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Operational database system</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customizable back end</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>System management through API</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ready clusterization</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multiple ready tenancies</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customizable web ui (end users)</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customizable web ui (team)</TableCell>
                  <TableCell align="center">Features limited</TableCell>
                  <TableCell align="center">Features limited</TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    {" "}
                    Fees & limits
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "none" }}>
                  <TableCell>Configurable</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "#fff" }}>
                  <TableCell>Creation of contacts</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    Users, roles & permission management
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "none" }}>
                  <TableCell>Back end status management</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "#fff" }}>
                  <TableCell>Default roles for back end users</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow style={{ background: "none" }}>
                  <TableCell>Back end user’s log history</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <br />
                <TableRow>
                  <TableCell colSpan={3} className="table_subtitle_bold">
                    Integrations
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back end status management</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Default roles for back end users</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back end user’s log history</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Default roles for back end users</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                  <TableCell align="center">
                    <img src="/images/check.svg" alt="check icon" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center mb60" data-aos="fade-up">
            TheQRPay digital wallet solution FAQs
          </h3>

          <div data-aos="fade-up" data-aos-delay="300">
            <Accordion
              expanded={
                expanded ===
                "What are the advantages of using the source code for TheQRPay's digital wallet?"
              }
              onChange={handleChange(
                "What are the advantages of using the source code for TheQRPay's digital wallet?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "What are the advantages of using the source code for TheQRPay's digital wallet?" ? (
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
                  What are the advantages of using the source code for
                  TheQRPay's digital wallet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  You can make whatever changes you want after purchasing the
                  source code license for the digital wallet. Your team can
                  modify the pre-made eWallet software to ensure that it
                  complies with all legal, security, and compliance
                  requirements. You already have a key component of your
                  solution in place: a reliable wallet engine that can be
                  expanded almost without boundaries through integrations. There
                  is only one one-time charge to pay, and there are no ongoing
                  subscription costs to worry about.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Accordion
              expanded={
                expanded === "Can I request a demo of your digital wallet?"
              }
              onChange={handleChange(
                "Can I request a demo of your digital wallet?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Can I request a demo of your digital wallet?" ? (
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
                  Can I request a demo of your digital wallet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  Yes, we provide an interactive sandbox demo environment at our
                  product Demo page. It’s available there and then, no need to
                  send a demo request and wait.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <Accordion
              expanded={
                expanded ===
                "What integrations is the TheQRPay eWallet software capable of supporting?"
              }
              onChange={handleChange(
                "What integrations is the TheQRPay eWallet software capable of supporting?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "What integrations is the TheQRPay eWallet software capable of supporting?" ? (
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
                  What integrations is the TheQRPay eWallet software capable of
                  supporting?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  TheQRPay architecture enables seamless integration of
                  third-party tools at every stage of the customer journey.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <Accordion
              expanded={expanded === "How does using an eWallet work?"}
              onChange={handleChange("How does using an eWallet work?")}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded === "How does using an eWallet work?" ? (
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
                  How does using an eWallet work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb6">
                  Let's think about the subsequent processes to better
                  understand how an e-wallet works for payments:
                </p>
                <p className="text_body_small_regular">
                  A payment service provider, such as Apple Pay, receives the
                  card information from the customer (cardholder). Following
                  that, a token service like VISA or VisaNet via a token
                  requestor encrypts the card information.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="700">
            <Accordion
              expanded={
                expanded ===
                "Is TheQRPay an eWallet system that is open-source?"
              }
              onChange={handleChange(
                "Is TheQRPay an eWallet system that is open-source?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "Is TheQRPay an eWallet system that is open-source?" ? (
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
                  Is TheQRPay an eWallet system that is open-source?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  TheQRPay e-wallet system is not open source
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EWallet;
