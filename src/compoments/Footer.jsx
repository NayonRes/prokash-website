import React from "react";
import "./Footer.css";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MySlider from "./MySlider";
import MessageForm from "./MessageForm";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
// console.log("year", new Date().getFullYear());
const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">{/* <MessageForm /> */}</Container>
      {/* <MySlider /> */}
      <footer style={{ borderTop: "1px solid #f4f4f4" }}>
        <Container maxWidth="lg" style={{ padding: "56px 24px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={3.5}>
              <Link to="/">
                <img
                  src="/images/logo.svg"
                  alt="the qrpay logo"
                  className="footer_logo_style"
                />
              </Link>
              <p
                className="footer_item"
                style={{ marginTop: "13px", fontWeight: 400 }}
              >
                Simplify boosting for Bangladeshi SMBs. Our web service
                eliminates complexities, allowing businesses to boost posts
                seamlessly without the need for ad accounts.
              </p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <address>
                <p className="footer_title">Contact Us</p>
                <Grid container>
                  <Grid item xs={2}>
                    <EmailOutlinedIcon style={{ color: "#606060" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p className="footer_item2">
                      <Link
                        to="mailto:info@theqrpay.com"
                        className="link_style"
                      >
                        oho@onlineheadoffice.com
                      </Link>
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}>
                    <LocalPhoneSharpIcon style={{ color: "#606060" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p className="footer_item2">
                      <Link
                        to="href=“tel:+880 164 447 0793”"
                        className="link_style"
                      >
                        +880 164 447 0793
                      </Link>
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}>
                    <RoomOutlinedIcon style={{ color: "#606060" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p className="footer_item2">
                      1151, Road-10, Ave-11, Mirpur DOHS, Dhaka, Bangladesh
                    </p>
                  </Grid>
                </Grid>
                {/* <Grid container>
                  <img
                    src="/images/facebookIcon.svg"
                    alt="facebook icon"
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src="/images/instagramIcon.svg"
                    alt="instagram icon"
                    style={{ marginRight: "10px" }}
                  />
                  <img
                    src="/images/twitterIcon.svg"
                    alt="twitter icon"
                    style={{ marginRight: "10px" }}
                  />
                  <img src="/images/linkedinIcon.svg" alt="linkedin icon" />
                </Grid> */}
              </address>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2.5}>
              <p className="footer_title">Menu 1</p>
              <ul className="footer_item">
                <li>
                  {/* <Link to="/platform" className="link_style"> */}
                  Item 1{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/startup" className="link_style"> */}
                  Item 2{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/about-us" className="link_style"> */}
                  Item 3{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/terms-and-conditions" className="link_style"> */}
                  Item 4{/* </Link> */}
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={3}>
              <p className="footer_title">Menu 2</p>
              <ul className="footer_item">
                <li>
                  {/* <Link to="/platform" className="link_style"> */}
                  Item 1{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/startup" className="link_style"> */}
                  Item 2{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/about-us" className="link_style"> */}
                  Item 3{/* </Link> */}
                </li>
                <li>
                  {/* <Link to="/terms-and-conditions" className="link_style"> */}
                  Item 4{/* </Link> */}
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
        <div className="footer_bottom_section_holder">
          <Container maxWidth="lg" style={{ padding: "0px 0px" }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <p className="footer_text_style">
                  &copy; Copyright {new Date().getFullYear()} Prokash.
                </p>
                <p className="footer_text_style showForMobileViewOnly">
                  All Rights Reserved.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                className="hideForMobileViewOnly"
              >
                <p className="footer_text_style" style={{ textAlign: "right" }}>
                  All Rights Reserved.
                </p>
              </Grid>
            </Grid>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
