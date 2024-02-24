import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Platform = () => {
  const scrollToTop = () => {
    const scrollableDiv = document.getElementById("message-form");
    console.log("scrollableDiv", scrollableDiv);
    scrollableDiv.scrollIntoView({
      top: 0,
      behavior: "smooth",
      block: "end",
      // inline: "center",
    });
    // if (scrollableDiv) {
    //   scrollableDiv.scrollTop = 0;
    // }
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
                  Create an exceptional payment product using TheQRPay's
                  <br className="hideForMobileViewOnly" /> &nbsp;
                  <span style={{ color: "#CB2027" }}>
                    cloud-based fintech platform
                  </span>
                  .
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Build a cost-effective cloud-based SaaS solution for your
                  customers, boosting revenue and loyalty with a
                  customer-centric experience using our platform. You can skip
                  the initial development stage and rely on our transactional
                  core for your finance product's foundation. Simply customize
                  our ledger layer solution and add your unique touch.
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
            <h3 className="title_semibold_medium mb12">
              Develop and trust in the pro
              <br /> payment TheQRPay
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              By using a powerful and reliable layer of ledger software
              developed by a team of experienced financial technology experts as
              a starting point, you can build a successful product.
            </p>

            <ul className="text_body_medium bullet_color" data-aos="fade-up">
              <li>
                Cloud-based backend application that includes an API layer.
              </li>
              <li>Customer front-office UI bundle with customizability.</li>
              <li>Team back-office UI package that is customizable</li>
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
              src="/images/relax.svg"
              alt=" Develop and trust in the pro payment TheQRPay"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Take advantage of the technology designed for developers
            </h3>
            <p className="text_body_medium center mt10">
              By utilizing TheQRPay's financial platform, your development team
              will have a solid base upon which to grow, easy integrations, and
              the ability to concentrate on improving user and product
              experiences.
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
                  <img src="/images/api.svg" alt="API-first approach" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">API-first approach</p>
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
                  <img
                    src="/images/Stack.svg"
                    alt="Innovative stack technology"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Innovative stack
                    <br /> technology
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
                  <img
                    src="/images/Adjustable.svg"
                    alt="Adjustable & strong infrastructure"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Adjustable & strong infrastructure
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
                  <img
                    src="/images/Designed-Security.svg"
                    alt="Design with security"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Design with security
                  </p>
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
                  <img src="/images/Pazzel.svg" alt="Flexible CI/CD" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Flexible CI/CD</p>
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
                  <img src="/images/Security.svg" alt="Secured database" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Secured database</p>
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
                  <img
                    src="/images/Tolerance.svg"
                    alt="Fault tolerance capability"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Fault tolerance
                    <br /> capability
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
                  <img
                    src="/images/Database2.svg"
                    alt="Improved data storage"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Improved data
                    <br /> storage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="center" data-aos="fade-up">
            <Button
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </div> */}
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Discover the main capabilities of the platform
            </h3>
            <p className="text_body_medium center mt10">
              Take a look at the platform features and internal tools to
              customize essential payment product operations and
              <br /> services to fit your requirements.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card2_non_hover card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Verification.svg" alt="Customer" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Customer</p>
                  <ul
                    className="text_body_small_regular bullet_color"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Both Merchants and individuals</li>
                    <li className="mb6">Registration by oneself</li>
                    <li className="mb6">Two-step authentication</li>
                    <li className="mb6">Upload KYC documents</li>
                    <li className="mb6">
                      Welcoming and familiarizing a new customer
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover card_shadow"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Wallet-manage.svg" alt="Account" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Account</p>
                  <ul
                    className="text_body_small_regular bullet_color"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Support for multiple currencies</li>
                    <li className="mb6">Ability to create accounts</li>
                    <li className="mb6">Display of account balances</li>
                    <li className="mb6">Access to transaction history</li>
                    <li className="mb6">
                      Account management options such as blocking/unblocking and
                      closure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover card_shadow"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Cradit-transfer.svg" alt="Transactions" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Transactions</p>
                  <ul
                    className="text_body_small_regular bullet_color"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">P2P money transfer</li>
                    <li className="mb6">Payment processing</li>
                    <li className="mb6">Issuing and processing invoices</li>
                    <li className="mb6">Depositing and withdrawing funds</li>
                    <li className="mb6">Currency conversion</li>
                    <li className="mb6">Generating and redeeming vouchers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="card2_non_hover card_shadow"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Team.svg" alt="Administration" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Administration
                  </p>
                  <ul
                    className="text_body_small_regular bullet_color"
                    style={{ paddingLeft: "28px" }}
                  >
                    <li className="mb6">Management of customers</li>
                    <li className="mb6">Tracking of transactions</li>
                    <li className="mb6">Monitoring of activity logs</li>
                    <li className="mb6">Oversight of user management</li>
                    <li className="mb6">Control of currency management</li>
                    <li className="mb6">Management of fees and limits</li>
                    <li className="mb6">Administration of KYC processes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="center" data-aos="fade-up">
            <Button
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
            >
              Learn More
            </Button>
          </div> */}
        </div>

        <div className="card4 section_style" data-aos="fade-up">
          <Grid container alignItems="center" className="idea_card">
            <Grid item xs={12} sm={8} md={8} lg={7} xl={7}>
              <div className="margin_left_50">
                <h3 className="title_semibold_medium">
                  Got a brilliant fintech product idea?
                  <br />
                  <span style={{ color: "#CB2027" }}>Let's talk it over!</span>
                </h3>
                <Button
                  variant="outlined"
                  color="error"
                  endIcon={<ArrowForwardIcon />}
                  className="outlined_buttton mt40"
                  disableElevation
                  onClick={scrollToTop}
                >
                  Contact Us
                </Button>
              </div>
            </Grid>
            <Grid
              item
              xs={0}
              sm={0}
              md={4}
              lg={5}
              xl={5}
              style={{ textAlign: "right" }}
            >
              {/* <img src="/images/Boy.svg" alt="" /> */}
            </Grid>
          </Grid>
        </div>

        <div className="section_style" data-aos="fade-up">
          <h3 className="title_semibold_medium center">
            You can create your own digital financial system using
            <br /> TheQRPay's ledger software
          </h3>
          <p className="text_body_medium center mt10">
            To meet the financial requirements of your customers and comply with
            regulations, use our fintech ledger platform as a strong foundation
            to build a personalized remittance system. In fintech, there is no
            universal solution that fits all.
          </p>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center" data-aos="fade-up">
            Bring new users on board & build
            <br /> long-term relationships
          </h3>

          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Verification.svg"
                    alt="Monitor the KYC procedure"
                  />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  Monitor the KYC procedure
                </p>
                <p className="text_body_small_regular left">
                  Gather the KYC information, save it in the system, and
                  integrate it with the chosen KYC tool to allow you to approve
                  or reject customer applications based on the information you
                  supply.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Team.svg"
                    alt="Knowing your consumer’s specifics"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Knowing your consumer’s specifics
                </p>
                <p className="text_body_small_regular left">
                  View every aspect of every customer's profile, including their
                  accounts, activity log, personal information and documents,
                  transactions, and statuses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium center" data-aos="fade-up">
            Include the features for the best possible
            <br />
            customer experience
          </h3>

          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Money-transfer.svg" alt="Payments" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">Payments</p>
                <p className="text_body_small_regular left">
                  Use an API to integrate with third-party suppliers and offer
                  card payments as well as bank payments using IBAN and SWIFT.
                  Adapt to various consumer categories to boost your turnover.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Cradit-transfer.svg" alt="Money transfer" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left"> Money transfer</p>
                <p className="text_body_small_regular left">
                  From internal P2P transfers that are available right out of
                  the box to cross-border remittances via integration with
                  payment- and service providers, let your customers send and
                  receive money quickly and easily.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Payment-Slip.svg"
                    alt="Templates & bill payments"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Templates & bill payments
                </p>
                <p className="text_body_small_regular left">
                  Help people save time with convenient payment templates
                  available through API interaction with the local vendors for
                  everything from utility bills to cell top-ups and other
                  payments.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Tracking-Finding.svg"
                    alt="Tracking expenses"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Tracking expenses
                </p>
                <p className="text_body_small_regular left">
                  Help consumers keep track of their spending with expense
                  graphs and charts, and for added convenience, offer to display
                  transactions on a map.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Cloud-connection.svg"
                    alt="Multiple Currencies"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Multiple Currencies
                </p>
                <p className="text_body_small_regular left">
                  Create as many currencies as you like within the system. Allow
                  users to manage any assets, including diamonds, reward points,
                  and fiat money.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Currency-Exchange.svg"
                    alt="Exchange Currency"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Exchange Currency
                </p>
                <p className="text_body_small_regular left">
                  Offer choices for currency buying and selling, as well as
                  smooth currency exchange between customer accounts within the
                  system (according to the pre-configured exchange rate).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Generate revenue from your payment product
            </h3>
            <p className="text_body_medium center mt10">
              Your one location for handling customer price agreements, provider
              contracts, and payment gateway agreements. Utilize every chance
              you have to increase your revenue and provide value to clients.
            </p>
          </div>

          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Card-manage.svg" alt="Payment portals" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">Payment portals</p>
                <p className="text_body_small_regular left">
                  Organize gateways and operations, set commissions and
                  restrictions for every operation, momentarily turn off a
                  gateway or its associated operation, and add new operations to
                  the list.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Managed.svg" alt="Internal employees" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Internal employees
                </p>
                <p className="text_body_small_regular left">
                  Internal processes including P2P transfers, withdrawals,
                  top-ups, voucher production, monthly fees, cash desk charges,
                  etc. can be activated or deactivated.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Stack.svg" alt="Service companies" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Service companies
                </p>
                <p className="text_body_small_regular left">
                  Manage providers and services, set fees and limitations for a
                  variety of factors, create new services, or temporarily
                  disable existing ones.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Contacts-Paper.svg" alt="Contacts" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left"> Contacts</p>
                <p className="text_body_small_regular left">
                  Generate fresh contracts by merging particular regulations for
                  transaction types, commission fees, and limits. Obtain
                  comprehensive information about existing contracts, fees,
                  limits for providers, payment gateways & currency exchange
                  rates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/Illustration.svg"
              alt="Cloud hybridization for simpler compliance"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
            <h3 className="title_semibold_medium mb12" data-aos="fade-up">
              Cloud hybridization for simpler
              <br /> compliance
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              Many cloud payment software solutions face challenges with
              regulatory compliance, but TheQRPay overcomes these via a hybrid
              cloud delivery approach.
            </p>

            <ul className="text_body_medium bullet_color" data-aos="fade-up">
              <li>
                Our staff updates the TheQRPay backend app, which is stored on
                the servers of the main cloud providers.
              </li>
              <li>
                To guarantee data security and conformity with data
                location-related rules, your database is kept on your servers.
              </li>
            </ul>
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
          >
            <h3 className="title_semibold_medium mb40" data-aos="fade-up">
              Achieve a quicker launch at a <br />
              significantly reduced cost
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              Confused between costly, market-ready software and time-consuming
              internal development? Our platform's SaaS approach allows it to
              achieve the ideal balance. You reduce the infrastructure,
              maintenance, and development costs for the fintech product, and
              you significantly accelerate the delivery date.
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
              src="/images/Developer2.svg"
              alt="Achieve a quicker launch at"
              className="right_image_style"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Platform;
