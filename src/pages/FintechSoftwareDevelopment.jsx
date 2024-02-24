import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FintechSoftwareDevelopment = () => {
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
            <Grid container alignItems="center" className="top_section">
              <Grid item xs={12} className="center">
                <h2
                  className="title_large2"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-offset="0"
                >
                  Services for developing &nbsp;
                  <span style={{ color: "#CB2027" }}>fintech software</span>.
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Use TheQRPay's pre-developed fintech platform to have your
                  digital ledger, e-wallet, payment or banking solution, or
                  multi-asset accounting system produced more quickly and
                  affordably.
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      <Container maxWidth="lg" className="container">
        <div className="section_style2">
          <h3 className="title_semibold_medium center">
            Services for developing fintech software tailored to
            <br />
            payment-focused companies
          </h3>
          <p className="text_body_medium center mt10" data-aos="fade-up">
            For the last few years, TheQRPay has been engaged in the development
            of fintech software solutions. Our primary offering is a versatile
            general ledger layer software that can be applied to various
            business operations. We provide this software as a cloud-based
            Software-as-a-Service (SaaS) product and also offer an on-premise
            option with a source code license.
          </p>
        </div>
        <div className="section_style">
          <h3 className="title_semibold_medium left">
            The ideal combination: Our core fintech platform plus services for
            custom fintech development.
          </h3>
          <p className="text_body_medium left mt10 mb40" data-aos="fade-up">
            The product requirements should come first. Tell us what your
            company needs and what features are missing.
          </p>
          <ul className="text_body_medium bullet_color">
            <li className="mb40" data-aos="fade-up">
              Participate in our business analyst team. We provide no-cost calls
              and consultations for your internal staff. Our experts can assist
              you with your next-step idea because they have experience with
              fintech development and the design of products that rely heavily
              on payments.
            </li>
            <li className="mb40" data-aos="fade-up">
              Select the general ledger layer version, then proceed to the
              discovery stage. Select the system's hybrid cloud or on-premises
              version. They have the same functionality and simply differ in
              terms of deployment style. Then, be specific about the extra
              feature and integration requirements.
            </li>
            <li data-aos="fade-up">
              Map the development steps before moving to the ledger layer setup.
              Get access from TheQRPay to your AWS instance. While you specify
              the development needs for iOS/Android applications, integrations,
              back-office, KYC, or any other software you wish to develop, our
              customer support will assist you with authorisation and database
              setup.
            </li>
          </ul>
        </div>
        <div
          className="card4 section_style"
          style={{ backgroundImage: "none" }}
          data-aos="fade-up"
        >
          <Grid container alignItems="center" className="idea_card">
            <Grid item xs={12} sm={8.5} md={9} lg={8}>
              <div className="margin_left_50">
                <h3 className="title_semibold_medium mb6">
                  Are you prepared to begin developing &nbsp;
                  <span style={{ color: "#CB2027" }}>your solution?</span>
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
                alt="developing"
                className="card_image"
                width="90%"
              />
            </Grid>
          </Grid>
        </div>

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
              Our teams who create fintech are skilled in:
            </h3>
            {/* <p className="text_body_medium mb40" data-aos="fade-up">
              We're seeking talented individuals that will be a perfect fit for
              our team. TheQRPay's team is expanding if you're interested in
              working for a business with professionals, creatives, diverse, and
              purpose-driven workers who make excellent finance products. See if
              you can find the ideal position!
            </p> */}
            <ul
              className="title_semibold_small bullet_color mb6"
              data-aos="fade-up"
            >
              <li>E-wallet solutions</li>
            </ul>
            <p className="text_body_medium mb24 left" data-aos="fade-up">
              Developing on-premises solutions and cloud wallets as a service.
            </p>
            <ul
              className="title_semibold_small bullet_color mb6"
              data-aos="fade-up"
            >
              <li>Payment focused products</li>
            </ul>
            <p className="text_body_medium mb24 left" data-aos="fade-up">
              solutions for managing clients, handling payments, and offering
              financial services.
            </p>
            <ul
              className="title_semibold_small bullet_color mb6"
              data-aos="fade-up"
            >
              <li>Digital ledger with multiple assets</li>
            </ul>
            <p className="text_body_medium left" data-aos="fade-up">
              Solutions for storing your company's data online and integrating
              with networks for POS terminals or payments.
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
              src="/images/SkilledDeveloper.svg"
              alt="Our teams who create fintech are skilled"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              These steps helps to build fintech software
              <br /> more effectively
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
                  <img src="/images/Peoples.svg" alt="Extensive group of experts" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Extensive group of experts
                  </p>
                  <p className="text_body_small_regular left">
                    Our dedicated and experienced fintech development team
                    creates strong, efficient, and secure solutions. Led by our
                    CTO and team leads, we ensure a well-designed and supervised
                    development and integration process tailored to your
                    specific needs.
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
                  <img src="/images/Team.svg" alt="Customer success support" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Customer success support
                  </p>
                  <p className="text_body_small_regular left">
                    Our team of Business Analysts will provide comprehensive
                    guidance throughout the entire product development process,
                    ensuring that the resulting solution fulfills all your
                    requirements for the foreseeable future, and beyond.
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
                  <img src="/images/Pazzel.svg" alt="Adaptability in the development of products" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Adaptability in the development of products
                  </p>
                  <p className="text_body_small_regular left">
                    TheQRPay software platform offers a wide range of API
                    endpoints and is specifically designed to facilitate
                    seamless integrations with payment gateways and other
                    essential third-party service providers.
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
                  <img src="/images/Design.svg" alt="Built in software core" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Built in software core
                  </p>
                  <p className="text_body_small_regular left">
                    Utilize TheQRPay's pre-built modules for the product you
                    want to develop to speed up time to market and lower
                    development expenses. Along with our solution, you can also
                    acquire custom financial software development services.
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
                  <img src="/images/Tracking-Finding.svg" alt="Tailored to specific industries and regions" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Tailored to specific industries and regions
                  </p>
                  <p className="text_body_small_regular left">
                    Our software solutions have empowered our customers to
                    achieve remarkable outcomes by replat forming their
                    operations. This has enabled them to expand their reach and
                    make significant strides in both the MENA region and
                    international markets.
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
                  <img src="/images/Launch2.svg" alt="Stack of modern softwares" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Stack of modern softwares
                  </p>
                  <p className="text_body_small_regular left">
                    To produce enterprise products, we adhere to the most
                    cutting-edge technological requirements. Our present
                    solution utilizes PostgreSQL 13, Java SE 16, and MongoDB 4.
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

export default FintechSoftwareDevelopment;
