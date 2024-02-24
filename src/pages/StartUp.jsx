import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StartUp = () => {
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
                  Use SDK to launch and expand your startup more quickly &nbsp;
                  <span style={{ color: "#CB2027" }}>
                    Fintech platform for finance
                  </span>
                  .
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
              Fintech SaaS solution without initial outlay
            </h3>
            <p className="text_body_medium center mt10 ">
              You're still working on your product roadmap, and you don't want
              to invest until you've identified your market and established that
              there is a need. You won't have to if you use TheQRPay.
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
                    src="/images/Efficient-transaction.svg"
                    alt="Efficient transaction engine"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Efficient transaction engine
                  </p>
                  <p className="text_body_small_regular left">
                    TheQRPay platform, created by seasoned professionals,
                    provides a solid framework for any payment solution.
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
                  <img src="/images/Calendar.svg" alt="Affordable beginning" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Affordable beginning
                  </p>
                  <p className="text_body_small_regular left">
                    You may set up the software correctly, learn all about it,
                    and assess how it fits with your objectives and expectations
                    without making a significant financial commitment at a
                    reasonable price.
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
                    src="/images/Launch.svg"
                    alt="Shortcut for product development"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Shortcut for product development
                  </p>
                  <p className="text_body_small_regular left">
                    Instead of starting from scratch with a unique solution, you
                    may start with a flexible fintech platform and save around a
                    year of active development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">
              Dependable payment platform to fuel your expansion
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
                  src="/images/Cloud_app_distribution.svg"
                  alt=" Cloud app distribution for convenient access"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Cloud app distribution for convenient access
              </p>
              <p className="text_body_small_regular left mb24">
                Major cloud providers offer the QRPay backend app in the cloud
                to assure quick instance setup, save operational expenses, and
                release you from the maintenance schedule.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Combine_your_ideas.svg"
                  alt="Combine your ideas with our experts leads to success"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Combine your ideas with our experts leads to success
              </p>
              <p className="text_body_small_regular left mb24">
                The specifications for creating new fintech products are as
                varied as the goods themselves. Give a description of the
                product you're building, and you'll get professional business
                analysis and execution advice in return.
              </p>
            </div>

            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Making_compliance.svg"
                  alt="Making compliance simpler"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Making compliance simpler
              </p>
              <p className="text_body_small_regular left mb24">
                While we cannot guarantee completely hassle-free compliance or
                supply licenses, we can provide a fix for the compatibility
                problem with cloud solutions. The QRPay cloud application just
                manages transactions; it does not have access to your
                server-hosted database. As a result, you don't break any
                regulations when storing sensitive data.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Streamline_integrations.svg"
                  alt="Streamline integrations to foster innovation"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Streamline integrations to foster innovation
              </p>
              <p className="text_body_small_regular left mb24">
                It takes much less time and resources to create new features,
                integrations, and services for clients because TheQRPay's
                essential functionalities are available through numerous API
                endpoints.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/Solution_that_is.svg"
                  alt="Solution that is flexible and grows with you"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                Solution that is flexible and grows with you
              </p>
              <p className="text_body_small_regular left mb24">
                Thanks to its architecture, TheQRPay software will support your
                growing user base and transaction volume without experiencing
                any system overload concerns.
              </p>
            </div>
            <div
              className="card3"
              data-aos="fade-up"
              style={{ display: "block", padding: 0, background: "none" }}
            >
              <div className="image_box mb24">
                <img
                  src="/images/No_obligation.svg"
                  alt="No obligation, no conditions"
                  width="100%"
                />
              </div>

              <p className="title_semibold_small mb6 left">
                {" "}
                No obligation, no conditions
              </p>
              <p className="text_body_small_regular left mb24">
                We don't bind you to protracted agreements or commitments. You
                have the right to revoke your membership at any time.
              </p>
            </div>
          </div>
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
              Take the steps necessary to launch your MVP
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              TheQRPay handles the grunt work so that early-stage businesses
              like yours have a solid foundation. You can significantly
              accelerate the release process with a motivated team and access to
              TheQRPay's essential software components:
            </p>
            <ul className="text_body_medium bullet_color" data-aos="fade-up">
              <li>A backend software hosted in the cloud with an API layer</li>
              <li>Front-office UI solution for customers that is adaptable</li>
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
              src="/images/Take_the_steps.png"
              alt="Take the steps necessary to launch your MVP"
              className="right_image_style"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StartUp;
