import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { Grid, ListItemIcon, Menu, MenuItem, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MobileDrawer from "./MobileDrawer";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
const Header = () => {
  // const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location.pathname);
  const [serveOpen, setServeOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
  const [useCaseAnchorEl, setUseCaseAnchorEl] = useState(null);
  const [caseStudiesAnchorEl, setCaseStudiesAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const serviceOpen = Boolean(serviceAnchorEl);
  const useCaseOpen = Boolean(useCaseAnchorEl);
  const caseStudiesOpen = Boolean(caseStudiesAnchorEl);
  const menuOpen = Boolean(menuAnchorEl);

  const checkServeOpen = () => {
    let serveMenus = [
      "/startup",
      "/small-and-medium-sized-business",
      "/enterprise",
    ];
    if (serveMenus.includes(location.pathname)) {
      setServeOpen(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleChange = () => {
    setServeOpen((prev) => !prev);
  };

  const MenuHandleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const MenuHandleClose = () => {
    setServeOpen(false);
    setMenuAnchorEl(null);
  };
  const ServiceHandleClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };
  const ServiceHandleClose = () => {
    setServiceAnchorEl(null);
  };
  const UseCaseHandleClick = (event) => {
    setUseCaseAnchorEl(event.currentTarget);
  };
  const UseCaseHandleClose = () => {
    setUseCaseAnchorEl(null);
  };
  const CaseStudiesHandleClick = (event) => {
    setCaseStudiesAnchorEl(event.currentTarget);
  };
  const CaseStudiesHandleClose = () => {
    setCaseStudiesAnchorEl(null);
  };

  const checkServiceMenuActive = () => {
    let services = [
      "/services/fintech-software-development",
      "/services/ewallet-app-development",
      "/services/p2p-development",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkUseCasesMenuActive = () => {
    let services = [
      "/use-cases",
      "/use-cases/e-wallet",
      "/use-cases/general-ledger",
      "/use-cases/mobile-wallet",
      "/use-cases/money-transfer",
      "/use-cases/neobank",
      "/use-cases/payment-acceptance",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkCaseStudiesMenuActive = () => {
    let services = [
      "/case-studies/payment-solution-provider",
      "/case-studies/digital-wallet-solution",
      "/case-studies/mobile-money-processing",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  const checkWhoWeServeMenuActive = () => {
    let services = [
      "/startup",
      "/small-and-medium-sized-business",
      "/enterprise",
    ];
    if (services.includes(location.pathname)) {
      return true;
    }
  };
  useEffect(() => {
    checkServeOpen();
  }, []);

  return (
    <>
      <div
        // style={{
        //   position: "sticky",
        //   top: 0,
        //   width: "100%",
        //   maxWidth: "2400px",
        //   boxSizing: "border-box",
        //   padding: "0 200px",
        //   margin: "auto",
        //   zIndex: 1000,
        // }}
        id="header"
        className="appbar_holder"
      >
        <AppBar position="sticky" className="appbar_style">
          <Toolbar style={{ paddingRight: 0, paddingLeft: 0 }}>
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { xs: "block", md: "block" } }}
            >
              <Link to="/">
                <img
                  src="/images/logo.svg"
                  alt="the qrpay logo"
                  className="header_logo_style"
                />
              </Link>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <MobileDrawer
                checkServiceMenuActive={checkServiceMenuActive}
                checkUseCasesMenuActive={checkUseCasesMenuActive}
                checkCaseStudiesMenuActive={checkCaseStudiesMenuActive}
                checkWhoWeServeMenuActive={checkWhoWeServeMenuActive}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {/* <Button
                component={Link}
                to="/"
                className={`nav_item ${location.pathname === "/" && "active"}`}
              >
                Home
              </Button> */}
             
           
             
              
          
           
            
            
              <Button
                disableElevation
                variant="contained"
                // className="nav_button"
                // endIcon={<img src="/favicon.svg" alt="prokash favicon" />}
                // onClick={handleClickOpen}
                sx={{mr:2}}
              >
                Start now
              </Button>
              <Button
                variant="outlined"
                // className="nav_button"
                // endIcon={<img src="/favicon.svg" alt="prokash favicon" />}
                // onClick={handleClickOpen}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          className="demo_dialog"
        >
          <DialogContent style={{ padding: "0px" }}>
            <Grid container style={{ maxWidth: "1050px" }}>
              <Grid
                item
                md={5.5}
                className="demo_dialog_left  hideForTabViewOnly hideForMobileViewOnly"
              >
                <p
                  className="demo_form_title center"
                  style={{ marginTop: "114px" }}
                >
                  Request a Demo?
                </p>
                <p className="text_body_medium center">
                  Fill it up. We will contact you
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6.5}
                style={{ padding: "50px 40px 40px 40px", position: "relative" }}
              >
                <IconButton
                  onClick={handleClose}
                  className="demo_form_close_button"
                >
                  <ClearIcon />
                </IconButton>
                <Grid container>
                  <Grid item xs={12}>
                    <p className="demo_form_title center showForTabAndMobileViewOnly">
                      Request a Demo?
                    </p>
                    <p className="text_body_medium showForTabAndMobileViewOnly center">
                      Fill it up. We will contact you
                    </p>

                    <p className="text_body_medium mt16">Name*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Email Address*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Company</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_input_style"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p className="text_body_medium mt16">Message*</p>
                    <TextField
                      fullWidth
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      className="demo_form_textarea_style"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} className="center mt25">
                    <Button
                      variant="contained"
                      color="primary"
                      // endIcon={<ArrowForwardIcon />}
                      className="contained_buttton"
                      style={{ minWidth: "250px" }}
                      disableElevation
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        </Dialog>
      </div>
    </>
  );
};

export default Header;
