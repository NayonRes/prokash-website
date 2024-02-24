import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Enterprise = () => {
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
                  Licensed source code for an enterprise &nbsp;
                  <span style={{ color: "#CB2027" }}>financial solution</span>.
                </h2>

                <p
                  className="text_body_medium mt40 mb6"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  Utilize TheQRPay fintech engine to construct a payment, money
                  transfer, or transaction product and significantly reduce the
                  development timeline by at least one year. This approach not
                  only saves valuable time but also minimizes expenses and
                  conserves your team's resources.
                </p>
                <p
                  className="text_body_medium "
                  data-aos="fade-down"
                  data-aos-delay="800"
                  data-aos-offset="0"
                >
                  Expand your product offerings and unlock new market
                  possibilities by leveraging a robust payment platform with an
                  exclusive licensing agreement. With this solution, you can
                  enhance your core offering, cater to a wider range of customer
                  segments, and seize additional growth opportunities in the
                  market.
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
              Get the best financial software you can for your
              <br />
              upcoming breakthrough
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
                  src="/images/Separation_from_the.svg"
                  alt="Separation from the vendor"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Separation from the vendor
              </p>
              <p className="text_body_small_regular left mb24">
                You will be provided with a comprehensive solution crafted by
                experienced fintech professionals, accompanied by detailed
                documentation and a knowledge transfer period for your team.
                Moreover, you will be granted a source code license, granting
                you complete autonomy in terms of updates and modifications
                aligned with your product roadmap and at a pace that suits your
                preferences.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/white-label.svg"
                  alt="100% white-label"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left"> 100% white-label</p>
              <p className="text_body_small_regular left mb24">
                Our software effortlessly handles all the complex tasks behind
                the scenes, allowing you to focus on your core objectives. You
                have the flexibility to customize it to meet your specific
                requirements, giving you the opportunity to rebrand it and take
                full credit for the exceptional service you provide. This helps
                to enhance customer loyalty and build a strong reputation in the
                market.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Future_proof_approach.svg"
                  alt="Future-proof approach"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Future-proof approach
              </p>
              <p className="text_body_small_regular left mb24">
                As customer experience expectations continue to evolve, it
                becomes increasingly challenging to meet them using outdated
                technology. However, by building your product on a platform that
                leverages a state-of-the-art tech stack, you safeguard it from
                becoming obsolete in the near future.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/unlimited_scaled_growth.svg"
                  alt="Unlimited scaled growth"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Unlimited scaled growth
              </p>
              <p className="text_body_small_regular left mb24">
                Simply staying competitive is no longer sufficient; continuous
                evolution and surpassing the competition are key to outpacing
                your rivals. Take advantage of our scalable fintech system,
                which can seamlessly grow and expand in tandem with your
                business, allowing you to maintain a competitive edge in the
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Innovative replacement for software development from scratch
            </h3>
            <p className="text_body_medium center mt10 ">
              Whether you're embarking on a digital transformation journey,
              diversifying your product offerings, or venturing into a new
              market segment, there isn't a one-size-fits-all solution that can
              completely eliminate the need for custom software development
              within your own team. However, TheQRPay fintech software,
              accompanied by a source code license, provides an ideal balance
              between in-house development and outsourcing.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Reduce_the_development.svg"
                  alt="Reduce the development resource spending"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Reduce the development resource spending
              </p>
              <p className="text_body_small_regular left mb24">
                Rather than starting from scratch, you will be provided with a
                solid foundation of payment software to build upon.
                Additionally, you will have the source code license, granting
                you the freedom to customize and tailor the solution according
                to your specific needs. This will save you approximately 12
                months of active development, resulting in significant savings
                in terms of both financial resources and team efforts.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Increase_the_release.svg"
                  alt="Increase the release date's speed"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Increase the release date's speed
              </p>
              <p className="text_body_small_regular left mb24">
                TheQRPay payment platform serves as a development cycle
                accelerator, bringing you closer to your product launch in a
                shorter timeframe. This allows you to transition from the
                initial years of development to the initial years of expanding
                your customer base and generating revenue.
              </p>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div>
            <h3 className="title_semibold_medium center">
              Enhancing the dependable transactional core
            </h3>
            <p className="text_body_medium center mt10 ">
              Our advanced fintech platform is built using cutting-edge
              technology by a team of highly skilled experts who have extensive
              experience in developing fintech products. It is specifically
              designed to handle high volumes of users and transactions,
              providing your team with a robust foundation to build upon. With
              our platform, you can focus on creating custom functionality
              without the need to delve into the technical complexities
              underlying the system.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img
                    src="/images/Cloud-instance.svg"
                    alt="Cloud instance icon"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">API-first approach</p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Stack.svg" alt="stack icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Innovative stack technology
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Adjustable.svg" alt="Adjustable icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Adjustable & strong infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Security.svg" alt="Security icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Design with security
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Pazzel-2.svg" alt="Puzzel icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">Flexible CI/CD</p>
                </div>
              </div>
            </div>
            <div
              className="card6"
              style={{ display: "block" }}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/Tolerance.svg" alt="Tolerance icon" />
                </div>
                <div className="card_text_box center">
                  <p className="text_body_small_regular">
                    Fault tolerance capability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Get top-notch implementation consulting and support from experts
            </h3>
            <p className="text_body_medium center mt10">
              Starting from your initial email, we will accompany you throughout
              the entire process, ensuring that we find the most optimal
              approach to utilize our software and surpass your expectations.
            </p>
          </div>
          <div className="card_holder">
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Tracking-Finding.svg" alt="Determination" />
                </div>
              </div>

              <div className="card3_right">
                <p className="title_semibold_small mb6 left">Determination</p>
                <p className="text_body_small_regular left">
                  Provide us with your requirements and vision, and our team of
                  business analysts and technical experts will develop a
                  detailed implementation strategy for your product, leveraging
                  TheQRPay platform.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Managed.svg"
                    alt="Audit & knowledge transfer"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Audit & knowledge transfer
                </p>
                <p className="text_body_small_regular left">
                  Allow your team to thoroughly examine the platform and receive
                  comprehensive hands-on training to effectively utilize it.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img src="/images/Launch.svg" alt="Transfer of source code" />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Transfer of source code
                </p>
                <p className="text_body_small_regular left">
                  Once the software aligns with your requirements, it becomes
                  yours upon signing a source code agreement.
                </p>
              </div>
            </div>
            <div className="card3 card_shadow" data-aos="fade-up">
              <div className="card3_left">
                <div className="square_img_holder">
                  <img
                    src="/images/Payment-Slip.svg"
                    alt="Post-purchase support"
                  />
                </div>
              </div>
              <div className="card3_right">
                <p className="title_semibold_small mb6 left">
                  {" "}
                  Post-purchase support
                </p>
                <p className="text_body_small_regular left">
                  Once you obtain the license for TheQRPay platform, we will be
                  available to provide support and assistance for any
                  platform-related inquiries for a period of 9 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Enterprise;
