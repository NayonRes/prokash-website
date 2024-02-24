import React, { useEffect } from "react";
import { Button, Container, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const UseCases = () => {
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
        {/* <div id="mouse-animation" className="mouse_holder" >
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div> */}
        <div className="cloud_box">
          <img src="/images/Cloud3.png" alt="cloud" className="cloud_style" />

          <Container maxWidth="lg" className="container">
            <div data-aos="fade-up">
              <h3 className="title_semibold_medium center">
                Our fintech products are backed by a strong foundation
              </h3>
              <p className="text_body_medium center mt10">
                TheQRPay is a reliable foundation for digital payment solutions.
                It's secure, straightforward and confident. Enjoy a seamless
                <br /> payment experience with TheQRPay!
              </p>
            </div>
            <div className="card_holder" style={{ justifyContent: "center" }}>
              <div
                className="card2"
                //  data-aos="fade-up" data-aos-delay="300"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img src="/images/Wallet.svg" alt="Digital wallet" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Digital wallet</p>
                    <p className="text_body_small_regular">
                      A customizable digital wallet software platform that can
                      be branded and tailored to fit your specific needs.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/e-wallet"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="card2"
                //  data-aos="fade-up" data-aos-delay="500"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img
                      src="/images/Money-transfer.svg"
                      alt="Money transfer"
                    />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Money transfer</p>
                    <p className="text_body_small_regular">
                      To create a P2P payment or remittance app that is
                      future-proof, use white-label money transfer software.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/money-transfer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="card2"
                //  data-aos="fade-up" data-aos-delay="700"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img src="/images/Wallet-Mobile.svg" alt="Mobile wallet" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Mobile wallet</p>
                    <p className="text_body_small_regular">
                      Solution for a white-label digital mobile wallet.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/mobile-wallet"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="card2"
                //  data-aos="fade-up" data-aos-delay="900"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img src="/images/Verification.svg" alt="General ledger" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> General ledger</p>
                    <p className="text_body_small_regular">
                      Software for general ledgers and reporting in business
                      process.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/general-ledger"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="card2"
                // data-aos="fade-up" data-aos-delay="900"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img src="/images/Cradit-deposit.svg" alt="Neobank" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6"> Neobank</p>
                    <p className="text_body_small_regular">
                      The software needed to create a digital retail bank.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/neobank"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div
                className="card2"
                //  data-aos="fade-up" data-aos-delay="900"
              >
                <div className="triangle_left"></div>
                <div className="triangle_right"></div>
                <div className="card2_content">
                  <div className="circle_img_holder">
                    <img src="/images/Managed.svg" alt="Payment acceptance" />
                  </div>
                  <div className="card_text_box center">
                    <p className="title_semibold_small mb6">
                      {" "}
                      Payment acceptance
                    </p>
                    <p className="text_body_small_regular">
                      Platform for accepting payments through the cloud for MSPs
                      and PSPs.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    className="buttton_small2 mt40"
                    disableElevation
                    component={Link}
                    to="/use-cases/payment-acceptance"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
