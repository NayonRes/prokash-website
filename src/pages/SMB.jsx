import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SMB = () => {
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
                  With our solutions, you can create everything &nbsp;
                  <br className="hideForMobileViewOnly" />
                  <span style={{ color: "#CB2027" }}>your company wants</span>.
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  We are aware of the difficulties in beginning a new company.
                  Therefore, our goal is to prepare you for a quick launch that
                  doesn't take significant time and financial resources. You can
                  utilize the pro-level fintech SDK on TheQRPay cloud platform
                  to realize all of your product ideas.
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
              The advantages of TheQRPay software for startups
              <br /> and small enterprises
            </h3>
            <p className="text_body_medium center mt10 ">
              Our organization created a cloud-based ledger layer that can
              accomplish numerous business goals and challenges with a single
              software instance. We created it to be straightforward,
              dependable, and flexible so that after you deploy it, you can use
              its features right away.
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
                    src="/images/API_Doc.svg"
                    alt="Free API & thorough documentation"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Free API & thorough documentation
                  </p>
                  <p className="text_body_small_regular left">
                    We describe how to create setups and integrations using
                    straightforward use cases.
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
                    src="/images/Database.svg"
                    alt="A database working for you"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    A database working for you
                  </p>
                  <p className="text_body_small_regular left">
                    We don't receive the info from you, and we don't store it
                    either. Therefore, we adhere to ISO standards and your local
                    laws.
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
                    src="/images/Cloud-instance.svg"
                    alt="The cloud holds everything"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    The cloud holds everything
                  </p>
                  <p className="text_body_small_regular left">
                    The AWS cloud is where our ledger layer is set up. You will
                    be given access for management and integrations along with
                    receiving your own instance.
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
                    src="/images/Hands-clapping.svg"
                    alt="One set of hands is required"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    One set of hands is required
                  </p>
                  <p className="text_body_small_regular left">
                    To connect the databases and TheQRPay solutions, you will
                    require one developer with between two and three years of
                    experience. Setting up is easy to understand.
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
                    src="/images/Peoples.svg"
                    alt="Phase of discovery and customer support"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Phase of discovery and customer support
                  </p>
                  <p className="text_body_small_regular left">
                    We assist you in identifying the shortcomings and problems
                    with your current software so that we may provide a software
                    solution to fix them. Even when you stop using our product,
                    we continue to communicate with you.
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
                    src="/images/Payment-Slip.svg"
                    alt="Membership at a set cost"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Membership at a set cost
                  </p>
                  <p className="text_body_small_regular left">
                    With a monthly membership, you can start using your general
                    ledger layer instance. Expand your business and learn more
                    about our software's features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              What issues can our cloud-based general ledger
              <br /> layer help you with?
            </h3>
            <p className="text_body_medium center mt10 ">
              There are many useful uses for the general ledger layer. It can
              function as a simple cloud-based e-wallet or a multi-asset. Your
              understanding of the functionality you can combine or integrate
              with will be aided by our use cases.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Pazzel-2.svg"
                    alt="Convert platforms/entities/POS into one system & admin it"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Convert platforms/entities/POS into one system & admin it
                  </p>
                  <p className="text_body_small_regular left">
                    The general ledger layer enables the registration of
                    multiple entities with unique IDs in the system, allowing
                    for the collection and presentation of data for each entity.
                    This includes various entities such as cash-in payment , POS
                    systems, or merchants.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/api.svg"
                    alt="A method for managing user ledgers"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    A method for managing user ledgers, accounts, and
                    reconciliation operations
                  </p>
                  <p className="text_body_small_regular left">
                    Within the system, you can create personalized profiles for
                    your clients and introduce services to them. This involves
                    setting up the ledger with client information, tracking
                    service consumption, and maintaining a transaction history.
                    Additionally, you can reconcile balances and transactions
                    across multiple banks and vendors registered in the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Payment-Slip.svg"
                    alt="Logging, auditing, and reporting "
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Logging, auditing, and reporting of transactions are done to
                    provide financial services.
                  </p>
                  <p className="text_body_small_regular left">
                    The ledger layer enables the connection of service providers
                    and facilitates the setup of commissions for these services.
                    The software solution then links the service provider to the
                    transaction log associated with the service. This ensures
                    that your databases contain comprehensive transaction
                    information, simplifying reconciliation, auditing, and
                    real-time issue reporting processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img
                    src="/images/Security.svg"
                    alt="A method for offering cross-platform payment services"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    A method for offering cross-platform payment services
                  </p>
                  <p className="text_body_small_regular left">
                    Integrate payment providers into your ecosystem using the
                    general ledger layer. Upload the list of banks and their
                    tokens to the system, and configure the available payment
                    methods for your clients. This can include transfers from
                    accounts to IBANs, card-to-card transfers within and outside
                    the system, and service payments. You can also create
                    currencies and set exchange rates. Ensure your services are
                    accessible on both mobile and desktop platforms, with
                    TheQRPay software often integrated with iOS and Android
                    application interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="card3" data-aos="fade-up">
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Launch.svg" alt="Re-platform or develop" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Re-platform or develop a new platform with a focus on
                    payments
                  </p>
                  <p className="text_body_small_regular left">
                    Transition from outdated software with inherent development
                    issues to a more robust solution. The flexible API module
                    allows seamless integration and offers new functionalities
                    that were previously unattainable with the old software and
                    its limited technology stack. TheQRPay ledger layer is
                    designed to handle high transaction volumes, ensuring it can
                    effectively meet your business requirements and keep pace
                    with your operational demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SMB;
