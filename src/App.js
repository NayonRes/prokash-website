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
const theme = createTheme({
  typography: {
    // allVariants: {
    //   color: "#464141",
    // },

    fontFamily: ['"Poppins"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      // main: "#40739e",
      main: "#834BFF",
      contrastText: "#fff",
    },
    // secondary: {
    //   main: "#8A8C90",
    // },
    error: {
      main: "#cb2027",
      contrastText: "#fff",
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

        divPosition.style.background = "rgba(207,227,255,.5)";
        divPosition.style.backdropFilter = "blur(5px)";
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
      <ThemeProvider theme={theme}>
        {/* <Test /> */}
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            margin: "auto",
            // display: "none",
          }}
        >
          <Header />
          <div>
            <Navigation />
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
              <VerticalAlignTopIcon onClick={scrollToTop} color="#25316" />
            </Fab>
          </ScrollTop>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
