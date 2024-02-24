import React, { useEffect } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MoneyTransfer = () => {
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
                  To create a &nbsp;{" "}
                  <span style={{ color: "#CB2027" }}>P2P payment</span> &nbsp;
                  or &nbsp;{" "}
                  <span style={{ color: "#CB2027" }}>remittance app</span>{" "}
                  &nbsp; that is future-proof, use white-label money transfer
                  software.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  A progressive peer-to-peer transfer system built on top of
                  TheQRPay's payment platform and implemented on-premises or in
                  the cloud can be used to meet the growing market demand for
                  quick and economical money transactions.
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
        <div className="section_style2">
          <div>
            <h3 className="title_semibold_medium center">
              Platform for cloud-based remittances
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
                  <img src="/images/Cloud-instance.svg" alt="Cloud SaaS" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Cloud SaaS</p>
                  <p className="text_body_small_regular left">
                    The backend money transfer app is hosted and maintained by
                    us for a reasonable monthly membership cost. No significant
                    up-front infrastructure expenditures, no commitment.
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
                  <img src="/images/Pazzel-2.svg" alt="Easy compliances" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Easy compliances
                  </p>
                  <p className="text_body_small_regular left">
                    Your database is hosted on your own server, but we host your
                    remittance app in the cloud. Lessening security risks,
                    preventing unauthorized access to consumers' private
                    information, and making it simpler to guarantee regulatory
                    compliance. a win-win situation.
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
                  <img src="/images/api.svg" alt="Platform driven by APIs" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Platform driven by APIs
                  </p>
                  <p className="text_body_small_regular left">
                    With the help of APIs, you may rapidly and affordably
                    integrate your instance of the software with almost any
                    provider or service provided by a third party.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Utilize TheQRPay to carry out your money transfer app idea
            </h3>
            <p className="text_body_medium center mt10">
              There is no one size fits all approach to fintech. Build the
              remittance system that will satisfy THE FINANCIAL NEEDS OF YOUR
              CUSTOMERS AND COMPLY WITH THE REGULATIONS OF YOUR TARGET LOCATION
              using our fintech ledger platform as a strong and trustworthy
              foundation.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Hands-bonding.svg"
                    alt="Digital onboarding"
                  />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Digital onboarding
                </p>
                <p className="text_body_small_regular left">
                  Allow for simple remote signup and authorisation, as well as
                  the option, if needed, to upload papers for the KYC process.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Money-transfer.svg"
                    alt="Accounts for multicurrency"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Accounts for multicurrency
                </p>
                <p className="text_body_small_regular left">
                  Allow your clients to transact in any currency—fiat or
                  otherwise—that you set up in the system. No restrictions on
                  their kind or number.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Efficient-transaction.svg"
                    alt="Borderless remittance support"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Borderless remittance support
                </p>
                <p className="text_body_small_regular left">
                  P2P transfers between app users are available right out of the
                  box. To facilitate transfers across cards, wallets, and
                  mobile, integrate with payment or service providers.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Cradit-Digital-transfer.svg"
                    alt="Bank & card payments"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Bank & card payments
                </p>
                <p className="text_body_small_regular left">
                  Connect to a banking network such as IBAN or SWIFT to offer
                  bank payments, or connect to card vendors to offer card
                  payment capability.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Payment-Slip.svg" alt="Payments of bills" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Payments of bills
                </p>
                <p className="text_body_small_regular left">
                  Offer utility bill payments, mobile top-ups, or any other
                  common payments that benefit your users by integrating with
                  regional service providers.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Tracking-Finding.svg"
                    alt="Tracking of expenses"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Tracking of expenses
                </p>
                <p className="text_body_small_regular left">
                  Utilizing expense classification, assist your consumers in
                  maintaining financial discipline. By displaying a map of
                  transactions based on the place where they were finished, you
                  can increase convenience.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Currency-Exchange.svg"
                    alt="Exchange currencies"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Exchange currencies
                </p>
                <p className="text_body_small_regular left">
                  Allow clients to open accounts in several currencies and swap
                  currencies between them. Control currency exchange rates
                  manually or set up CurrencyCloud's automated rate updates.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Improve the performance of your payment company
            </h3>
          </div>
          <div className="card_holder">
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Marketplace.svg"
                    alt="Market time shortened"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Market time shortened
                  </p>
                  <p className="text_body_small_regular left">
                    Our money transfer platform provides a sort of payment SDK
                    so you may customize it to your company's needs and at least
                    cut the development time in half. You can significantly
                    accelerate the release date without having to start from
                    scratch, giving you a competitive edge.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Flexible.svg" alt="Scalability enhanced" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Scalability enhanced
                  </p>
                  <p className="text_body_small_regular left">
                    Be sure that your software foundation can grow with you and
                    sustain the increasing transaction volume without a hitch as
                    you concentrate on inventing and expanding your money
                    transfer services.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Stack.svg"
                    alt="Modern management of fees and limits"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Modern management of fees and limits
                  </p>
                  <p className="text_body_small_regular left">
                    Utilize the incredibly versatile setup options for service
                    commission fees and restrictions to maximize your revenue
                    and fully monetize your goods.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Cloud-connection.svg"
                    alt="Multiple-language system"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Multiple-language system
                  </p>
                  <p className="text_body_small_regular left">
                    let the user interface as multilingual as possible to let
                    clients from all around the world feel at home.
                  </p>
                </div>
              </div>
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
                expanded === "How can I launch a money transfer company?"
              }
              onChange={handleChange(
                "How can I launch a money transfer company?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded === "How can I launch a money transfer company?" ? (
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
                  How can I launch a money transfer company?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb12">
                  You must complete the following five steps in order to launch
                  a money transfer business with SDK.finance:
                </p>
                <ol className="text_body_small_regular">
                  <li>Make the product needs more clear.</li>
                  <li>Partner with a software vendor like SDK.finance.</li>
                  <li>
                    Select the software's hybrid cloud or on-premises version.
                  </li>
                  <li>Make a tool for money transfers.</li>
                  <li>Start up your money transfer company.</li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Accordion
              expanded={expanded === "How do money transfer companies operate?"}
              onChange={handleChange(
                "How do money transfer companies operate?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded === "How do money transfer companies operate?" ? (
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
                  How do money transfer companies operate?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb12">
                  Businesses that deal in money remittance offer money transfer
                  services, taking money from the sender and giving it to the
                  recipient. A local service within a single nation or an
                  international service between two or more nations are both
                  possible.
                </p>
                <p className="text_body_small_regular mb12">
                  There are 3 steps in the money transfer process:
                </p>
                <ol className="text_body_small_regular">
                  <li>
                    Before a wire transfer can be completed, the recipient's
                    bank account must have the requested amount of money
                    available.
                  </li>
                  <li>
                    Money is sent to the recipient's bank when a transaction is
                    issued.
                  </li>
                  <li>
                    Once the money is in the bank, an exchange rate and a bank
                    fee are applied.
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <Accordion
              expanded={
                expanded === "How do remittance companies generate revenue?"
              }
              onChange={handleChange(
                "How do remittance companies generate revenue?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "How do remittance companies generate revenue?" ? (
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
                  How do remittance companies generate revenue?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular">
                  Businesses involved in remittances generate revenue by
                  charging a fee or commission for the service. The cost varies
                  according to the quantity of money sent. By buying the
                  currency in advance and selling it when transferring at the
                  current rate, remittance companies can also profit.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <Accordion
              expanded={
                expanded ===
                "How can I start a business for internet money transfers?"
              }
              onChange={handleChange(
                "How can I start a business for internet money transfers?"
              )}
              className="accrodian_style card_shadow mb24"
            >
              <AccordionSummary
                expandIcon={
                  expanded ===
                  "How can I start a business for internet money transfers?" ? (
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
                  How can I start a business for internet money transfers?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text_body_small_regular mb12">
                  To start an online money transfer business, adhere to
                  following 6 steps:
                </p>
                <ol className="text_body_small_regular">
                  <li>Consult subject-matter legal professionals.</li>
                  <li>Develop your company plan.</li>
                  <li>Identify a software partner, such as TheQRPay.</li>
                  <li>Acquire a license.</li>
                  <li>Create a program for money transfers.</li>
                  <li>Start up your money transfer company.</li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoneyTransfer;
