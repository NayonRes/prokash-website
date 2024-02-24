import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutUs = () => {
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
                  We provide solutions for high-quality payment and
                  <br className="hideForMobileViewOnly" /> &nbsp;
                  <span style={{ color: "#CB2027" }}>banking products</span>.
                </h2>

                <p
                  className="text_body_medium mt40"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-offset="0"
                >
                  TheQRPay offers a comprehensive fintech banking and payment
                  engine, serving as a software shortcut for businesses aiming
                  to launch their fintech products. This solution caters to a
                  wide range of customers, including startups and enterprises,
                  enabling the development of digital wallets and neobanks.
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
                    Get a cot code
                  </Button>
                </div> */}
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
            <h3 className="title_semibold_medium">Story of TheQRPay</h3>
            <p
              className="title_semibold_small mt40 mb12"
              style={{ color: "#303030" }}
            >
              The scheme
            </p>
            <p className="text_body_medium mb40" data-aos="fade-up">
              Having gained experience from successfully launching several
              fintech projects, we understand the challenges faced by fintech
              entrepreneurs. Developing each project from scratch proved to be
              time-consuming and resource-intensive. Finding a team with
              adequate expertise in digital payment software posed significant
              difficulties, and retaining talent and managing product
              development were also challenging aspects.
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
              src="/images/story-of-theqrpay.png"
              alt="The scheme"
              className="right_image_style"
            />
          </Grid>
        </Grid>

        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">TheQRPay statistics</h3>
          </div>
          <div className="card_holder">
            <div
              className="card2_non_hover"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card2_content">
                <div className="circle_img_holder">
                  <img src="/images/api.svg" alt="api icon" />
                </div>
                <div className="card_text_box center">
                  <p className="card_number">400+</p>
                  <p className="text_body_small_regular">RESTful APIs</p>
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
                  <img src="/images/Stack.svg" alt="stack icon" />
                </div>
                <div className="card_text_box center">
                  <p className="card_number">60+</p>
                  <p className="text_body_small_regular">
                    Cutting-edge stack technology
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
                  <img src="/images/Adjustable.svg" alt="Adjustable icon" />
                </div>
                <div className="card_text_box center">
                  <p className="card_number">40+</p>
                  <p className="text_body_small_regular">
                    Strong and flexible infrastructure
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
                    alt="designed security icon"
                  />
                </div>
                <div className="card_text_box center">
                  <p className="card_number">9+</p>
                  <p className="text_body_small_regular">Years on marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid container alignItems="center" className="section_style">
          <Grid item xs={12} sm={12} md={12} lg={6}>
            {" "}
            <img
              src="/images/our-objective.svg"
              alt="Our objective"
              className="left_image_style"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} data-aos="fade-up">
            <h3 className="title_semibold_medium mb12" data-aos="fade-up">
              Our objective
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              By offering core software that enables the rapid and efficient
              launch of digital-only banking and payment solutions, we hope to
              facilitate fully digital banking for everyone and make digital
              financial services available to every citizen of the world while
              ensuring excellent customer experience and fostering lifelong
              loyalty.
            </p>
          </Grid>
        </Grid>
        <div className="section_style">
          <div data-aos="fade-up">
            <h3 className="title_semibold_medium center">Our superintendents</h3>
            <p className="text_body_medium center mt10">
              The experienced executive and leadership team at TheQRPay are the
              driving force behind our commitment to pioneering innovation and
              providing exceptional client service.
            </p>
          </div>
          <div className="card_holder">
            <div
              className="card5 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="mb12">
                  <img
                    src="/images/superintendent1.svg"
                    alt="Jonathan Stan"
                    className="card5_image"
                  />
                </div>
                <div className="card_text_box">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs="auto">
                      {" "}
                      <h4 className="title_semibold_small left">Jonathan Stan</h4>
                    </Grid>
                    <Grid item xs="auto">
                      {" "}
                      <div className="card_line"></div>
                    </Grid>
                    <Grid item xs="auto">
                      {" "}
                      <img
                        src="/images/linkedIn-Icon2.svg"
                        alt="linkedIn icon"
                        style={{ display: "block" }}
                      />
                    </Grid>
                  </Grid>

                  <p
                    className="text_body_medium mb12 left"
                    // style={{ fontWeight: 500 }}
                  >
                    Founder & CTO
                  </p>
                  <p
                    className="text_body_medium left"
                    style={{ fontWeight: 500 }}
                  >
                    Principal thinker and solution architect at TheQRPay with
                    extensive knowledge of digital payments and the introduction
                    of numerous fintech products.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="card5 card_shadow"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div>
                <div className="mb12">
                  <img
                    src="/images/superintendent2.svg"
                    alt="Christopher James"
                    className="card5_image"
                  />
                </div>
                <div className="card_text_box">
                  <Grid container alignItems="center" spacing={3}>
                    <Grid item xs="auto">
                      {" "}
                      <h4 className="title_semibold_small left">
                        Christopher James
                      </h4>
                    </Grid>
                    <Grid item xs="auto">
                      {" "}
                      <div className="card_line"></div>
                    </Grid>
                    <Grid item xs="auto">
                      {" "}
                      <img
                        src="/images/linkedIn-Icon2.svg"
                        alt="linkedIn icon"
                        style={{ display: "block" }}
                      />
                    </Grid>
                  </Grid>

                  <p
                    className="text_body_medium mb12 left"
                    style={{ fontWeight: 500 }}
                  >
                    Co-founder
                  </p>
                  <p
                    className="text_body_medium left"
                    style={{ fontWeight: 500 }}
                  >
                    Principal thinker and solution architect at TheQRPay with
                    extensive knowledge of digital payments and the introduction
                    of numerous fintech products.
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
            <h3 className="title_semibold_medium center">Our values</h3>
          </div>
          <div className="card_holder">
            <div
              className="card6 card_shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div>
                <div className="square_img_holder mb12">
                  <img src="/images/Pazzel-2.svg" alt="Puzzel icon" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Development system
                  </p>
                  <p className="text_body_small_regular left">
                    At TheQRPay, we emphasize a robust software development
                    system that follows API-driven development principles. This
                    approach enables us to deliver high-quality products that
                    bring tangible benefits to our customers.
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
                  <img src="/images/Payment-Slip.svg" alt="Payment slip icon" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    High necessity
                  </p>
                  <p className="text_body_small_regular left">
                    When describing our items, our consumers frequently mention
                    their exceptional quality. We use a technology stack to
                    ensure great performance in every area of our work and to
                    make our solutions future-proof.
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
                  <img src="/images/Launch2.svg" alt="Launch icon" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Professionalism
                  </p>
                  <p className="text_body_small_regular left">
                    We value and welcome personnel whose skills will enrich the
                    company because we are a team of seasoned fintech
                    specialists, from developers to business analysts.
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
                  <img src="/images/Verification.svg" alt="Verification icon" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Respect</p>
                  <p className="text_body_small_regular left">
                    Strong, long-term relationships with both consumers and
                    staff are important to us. The foundation of our
                    interactions with one another, the planet, and at work is
                    respect.
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
                  <img src="/images/Adjustable.svg" alt="Adjustable icon" />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">Innovation</p>
                  <p className="text_body_small_regular left">
                    We encourage and adopt innovation to offer clients
                    cutting-edge technological features or solutions and drive
                    product progression, following the direction of our
                    executives.
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
                    src="/images/Hands-bonding.svg"
                    alt="Hands bonding icon"
                  />
                </div>
                <div className="card_text_box">
                  <p className="title_semibold_small mb6 left">
                    Long-term vision
                  </p>
                  <p className="text_body_small_regular left">
                    Instead of just focusing on the short-term financial
                    objectives, we are motivated by the opportunity to develop
                    long-term cooperative connections and make a difference with
                    our products.
                  </p>
                </div>
              </div>
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
              Join our team
            </h3>
            <p className="text_body_medium mb40" data-aos="fade-up">
              We're seeking talented individuals that will be a perfect fit for
              our team. TheQRPay's team is expanding if you're interested in
              working for a business with professionals, creatives, diverse, and
              purpose-driven workers who make excellent finance products. See if
              you can find the ideal position!
            </p>
            {/* <Button
              data-aos="fade-up"
              variant="outlined"
              color="error"
              endIcon={<ArrowForwardIcon />}
              className="outlined_buttton"
              disableElevation
              onClick={scrollToTop}
            >
              Get in touch
            </Button> */}
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
              src="/images/join-our-team.svg"
              alt="join our team icon"
              className="right_image_style"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
