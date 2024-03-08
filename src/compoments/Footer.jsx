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
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="prokash logo"
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
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <address>
                <p className="footer_title">Contact Us</p>
                <Grid container>
                  <Grid item xs={2}>
                    <EmailOutlinedIcon style={{ color: "#606060" }} />
                  </Grid>
                  <Grid item xs={10}>
                    <p className="footer_item2">
                      <Link to="mailto:hello@prokash.io" className="link_style">
                        hello@prokash.io
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
                <Grid container>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "10px" }}
                  >
                    <rect width="30" height="30" rx="8" fill="#686868" />
                    <path
                      d="M17 16.5H19.5L20.5 12.5H17V10.5C17 9.47 17 8.5 19 8.5H20.5V5.14C20.174 5.097 18.943 5 17.643 5C14.928 5 13 6.657 13 9.7V12.5H10V16.5H13V25H17V16.5Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "10px" }}
                  >
                    <rect width="30" height="30" rx="8" fill="#686868" />
                    <path
                      d="M10.8 5H19.2C22.4 5 25 7.6 25 10.8V19.2C25 20.7383 24.3889 22.2135 23.3012 23.3012C22.2135 24.3889 20.7383 25 19.2 25H10.8C7.6 25 5 22.4 5 19.2V10.8C5 9.26174 5.61107 7.78649 6.69878 6.69878C7.78649 5.61107 9.26174 5 10.8 5ZM10.6 7C9.64522 7 8.72955 7.37928 8.05442 8.05442C7.37928 8.72955 7 9.64522 7 10.6V19.4C7 21.39 8.61 23 10.6 23H19.4C20.3548 23 21.2705 22.6207 21.9456 21.9456C22.6207 21.2705 23 20.3548 23 19.4V10.6C23 8.61 21.39 7 19.4 7H10.6ZM20.25 8.5C20.5815 8.5 20.8995 8.6317 21.1339 8.86612C21.3683 9.10054 21.5 9.41848 21.5 9.75C21.5 10.0815 21.3683 10.3995 21.1339 10.6339C20.8995 10.8683 20.5815 11 20.25 11C19.9185 11 19.6005 10.8683 19.3661 10.6339C19.1317 10.3995 19 10.0815 19 9.75C19 9.41848 19.1317 9.10054 19.3661 8.86612C19.6005 8.6317 19.9185 8.5 20.25 8.5ZM15 10C16.3261 10 17.5979 10.5268 18.5355 11.4645C19.4732 12.4021 20 13.6739 20 15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20C13.6739 20 12.4021 19.4732 11.4645 18.5355C10.5268 17.5979 10 16.3261 10 15C10 13.6739 10.5268 12.4021 11.4645 11.4645C12.4021 10.5268 13.6739 10 15 10ZM15 12C14.2044 12 13.4413 12.3161 12.8787 12.8787C12.3161 13.4413 12 14.2044 12 15C12 15.7956 12.3161 16.5587 12.8787 17.1213C13.4413 17.6839 14.2044 18 15 18C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 14.2044 17.6839 13.4413 17.1213 12.8787C16.5587 12.3161 15.7956 12 15 12Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "10px" }}
                  >
                    <rect width="30" height="30" rx="8" fill="#686868" />
                    <path
                      d="M23.75 9.80963C23.1059 10.0829 22.4148 10.2682 21.6887 10.351C22.4301 9.92585 22.9977 9.25154 23.2667 8.45051C22.5712 8.84421 21.8035 9.13009 20.9855 9.28505C20.3305 8.61597 19.3988 8.19922 18.3653 8.19922C16.3828 8.19922 14.7752 9.73844 14.7752 11.6358C14.7752 11.9049 14.8069 12.1677 14.8682 12.419C11.885 12.2755 9.23973 10.907 7.46928 8.82745C7.1598 9.33425 6.98374 9.92479 6.98374 10.5552C6.98374 11.7478 7.61801 12.8001 8.58033 13.4158C7.992 13.397 7.43866 13.242 6.95423 12.9844V13.0273C6.95423 14.6922 8.19213 16.0816 9.83353 16.3979C9.5328 16.4754 9.21568 16.5183 8.88762 16.5183C8.6558 16.5183 8.43162 16.4963 8.21181 16.4545C8.66889 17.8209 9.99429 18.8146 11.5646 18.8418C10.3366 19.7632 8.78811 20.3109 7.10624 20.3109C6.81647 20.3109 6.53103 20.2941 6.25 20.2638C7.83893 21.2407 9.7253 21.8103 11.7527 21.8103C18.3567 21.8103 21.9664 16.5728 21.9664 12.0305L21.9544 11.5855C22.6597 11.1038 23.2699 10.4986 23.75 9.80963Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="8" fill="#686868" />
                    <path
                      d="M23.3289 23.3347L23.3331 23.334V17.2215C23.3331 14.2312 22.6893 11.9277 19.1935 11.9277C17.5129 11.9277 16.3851 12.85 15.9247 13.7243H15.8761V12.2069H12.5615V23.334H16.0129V17.8243C16.0129 16.3736 16.2879 14.9708 18.0845 14.9708C19.8546 14.9708 19.881 16.6263 19.881 17.9173V23.3347H23.3289Z"
                      fill="white"
                    />
                    <path
                      d="M6.94141 12.207H10.397V23.3341H6.94141V12.207Z"
                      fill="white"
                    />
                    <path
                      d="M8.66838 6.66602C7.56352 6.66602 6.66699 7.56254 6.66699 8.66741C6.66699 9.77227 7.56352 10.6875 8.66838 10.6875C9.77324 10.6875 10.6698 9.77227 10.6698 8.66741C10.6691 7.56254 9.77255 6.66602 8.66838 6.66602Z"
                      fill="white"
                    />
                  </svg>
                </Grid>
              </address>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4}>
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
