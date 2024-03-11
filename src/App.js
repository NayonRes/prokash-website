import logo from "./logo.svg";
import "./App.css";
import Header from "./compoments/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./compoments/Footer";
import Navigation from "./pages/Navigation";
import Test from "./Test";
import { TabScrollButton } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Fab } from "@mui/material";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import AuthContextProvider from "./context/AuthContext";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ColorPalette from "./color-palette/ColorPalette";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const theme = createTheme({
  typography: {
    // allVariants: {
    //   color: "#464141",
    // },

    fontFamily: ['"Poppins"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: ColorPalette.light.primary.main,
      light: ColorPalette.light.primary.light,
      contrastText: ColorPalette.light.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.light.secondary.main,
      light: ColorPalette.light.secondary.light,
      contrastText: ColorPalette.light.secondary.contrastText,
    },
    success: {
      main: ColorPalette.light.success.main,
      light: ColorPalette.light.success.light,
      contrastText: ColorPalette.light.success.contrastText,
    },
    info: {
      main: ColorPalette.light.info.main,
      light: ColorPalette.light.info.light,
      contrastText: ColorPalette.light.info.contrastText,
    },
    warning: {
      main: ColorPalette.light.warning.main,
      light: ColorPalette.light.warning.light,
      contrastText: ColorPalette.light.warning.contrastText,
    },
    error: {
      main: ColorPalette.light.error.main,
      light: ColorPalette.light.error.light,
      contrastText: ColorPalette.light.error.contrastText,
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
});
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
function ScrollTop(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function App(props) {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const handleClickSignUpOpen = () => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setSignUpOpen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let windowHeight = window.innerHeight;
    // let windowWidth = window.innerWidth;
    // console.log("windowWidth", windowWidth);
    if (windowHeight > 900) {
      windowHeight = 900;
    }
    // console.log(" windowHeight", windowHeight);
    var prevScrollpos = window.pageYOffset;
    // console.log("prevScrollpos", prevScrollpos);
    window.onscroll = function () {
      const divPosition = document.getElementById("header");
      // const mouseAnimation = document.getElementById("mouse-animation");

      // console.log("divPosition", divPosition);
      let y = divPosition.offsetTop;
      // console.log("---------y-----------", y);
      if (y < 80) {
        // document.getElementById("header").style.top = "0px";
        divPosition.style.background = "rgba(0,0,0,0)";
        divPosition.style.backdropFilter = "blur(0px)";
      } else if (y > 80) {
        // console.log(" ------------------else if---------------");

        divPosition.style.background = "rgba(141, 93, 217,.1)";
        divPosition.style.backdropFilter = "blur(70px)";
        // if (windowHeight < y + 120) {
        //   // document.getElementById("header").style.top = "0px";
        //   divPosition.style.background = "rgba(207,227,255,.5)";
        //   divPosition.style.backdropFilter = "blur(5px)";
        // } else {
        //   // document.getElementById("header").style.top = "-90px";
        // }
      }
    };

    AOS.init({
      offset: 300,
      duration: 500,
      // anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
        // reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
      >
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            TransitionComponent={Slide}
          >
            <AuthContextProvider>
              <div
                style={{
                  position: "relative",
                  maxWidth: "100%",
                  margin: "auto",
                  // display: "none",
                }}
              >
                <Header
                  signUpOpen={signUpOpen}
                  setSignUpOpen={setSignUpOpen}
                  handleClickSignUpOpen={handleClickSignUpOpen}
                  handleSignUpClose={handleSignUpClose}
                />
                <div>
                  <Navigation
                    signUpOpen={signUpOpen}
                    setSignUpOpen={setSignUpOpen}
                    handleClickSignUpOpen={handleClickSignUpOpen}
                    handleSignUpClose={handleSignUpClose}
                  />
                </div>
                <div>
                  <Footer />{" "}
                </div>
                <ScrollTop {...props}>
                  <Fab
                    // color="primary"
                    size="small"
                    style={{ background: "#fff" }}
                    aria-label="scroll back to top"
                  >
                    <VerticalAlignTopIcon
                      onClick={scrollToTop}
                      color="#25316"
                    />
                  </Fab>
                </ScrollTop>
              </div>
            </AuthContextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </>
  );
}

export default App;
