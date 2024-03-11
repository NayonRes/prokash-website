import React, { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import {
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MobileDrawer from "./MobileDrawer";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import { useTheme } from "@mui/material/styles";
import AddCustomer from "../pages/customer/AddCustomer";
import { AuthContext } from "../context/AuthContext";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Login from "../pages/user-forms/Login";
const Header = ({
  signUpOpen,
  setSignUpOpen,
  handleClickSignUpOpen,
  handleSignUpClose,
}) => {
  // const { window } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const { prokash_user, logout, login } = useContext(AuthContext);
  console.log("location", location.pathname);
  const [serveOpen, setServeOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const startNowButtonStyle = {
    px: 3,
    py: 1,
    borderRadius: "100vw",
    mr: 2,
    [theme.breakpoints.down("sm")]: {
      mr: 1,
      px: 2,
      fontSize: "8px",
      "& .MuiButton-startIcon": {
        mr: 0.5,
        fontSize: "12px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "12px !important",
      },
    },
  };
  const loginButtonStyle = {
    px: 3,
    py: 1,
    borderRadius: "100vw",
    [theme.breakpoints.down("sm")]: {
      px: 2,
      borderRadius: "100vw",
      fontSize: "8px",
      "& .MuiButton-startIcon": {
        fontSize: "12px",
        mr: 0.5,
      },
      "& .MuiSvgIcon-root": {
        fontSize: "12px !important",
      },
    },
  };

  const navigateRoutes = (routeName) => {
    navigate(routeName, { replace: true });
  };
  const fnLogout = () => {
    logout();
    navigate("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
                  src="/logo.svg"
                  alt="prokash logo"
                  className="header_logo_style"
                />
              </Link>
            </Box>

            <Box>
              {prokash_user?.token ? (
                <>
                  <Button
                    variant="outlined"
                    id="basic-button"
                    aria-controls={menuOpen ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={menuOpen ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      ...loginButtonStyle,
                      textTransform: "none",
                    }}
                    startIcon={<PermIdentityOutlinedIcon />}
                  >
                    {prokash_user?.name}&nbsp;
                  </Button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        color: "#616161",

                        "& .MuiMenuItem-root": {
                          fontSize: "14px",
                          borderBottom: "1px solid #f9f9f9",
                        },
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                      }}
                      sx={
                        {
                          // boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                        }
                      }
                    >
                      <Box
                        sx={{
                          // background: "red",
                          color: "#222",
                          fontWeight: 500,
                        }}
                      >
                        {prokash_user?.name}
                        <Typography
                          sx={{
                            display: "block",
                            color: "#7b7b7b",
                            fontSize: "12px",
                          }}
                        >
                          {prokash_user?.email}
                        </Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        navigateRoutes("/order-list");
                      }}
                    >
                      Order List
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        navigateRoutes("/change-password");
                      }}
                    >
                      Change Password
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        fnLogout();
                      }}
                    >
                      Sign Out
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    disableElevation
                    variant="contained"
                    sx={{
                      ...startNowButtonStyle,
                    }}
                    id="start-now-button"
                    // className="nav_button"
                    // endIcon={<img src="/favicon.svg" alt="prokash favicon" />}
                    onClick={handleClickSignUpOpen}
                    startIcon={<LibraryAddCheckOutlinedIcon />}
                  >
                    Start now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      ...loginButtonStyle,
                    }}
                    // className="nav_button"
                    // endIcon={<img src="/favicon.svg" alt="prokash favicon" />}
                    startIcon={<ExitToAppOutlinedIcon />}
                    onClick={handleClickOpen}
                  >
                    Login
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Dialog
          open={signUpOpen}
          onClose={handleSignUpClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          className="demo_dialog"
        >
          <DialogContent style={{ padding: "0px" }}>
            <Box
              sx={{
                boxSizing: "border-box",
                padding: {
                  xs: "30px 20px",
                  sm: "50px 40px 40px 40px",
                  md: "60px 80px 60px",
                  lg: "60px 80px 60px",
                },
                position: "relative",
                minWidth: { sm: "auto", md: "800px", lg: "1000px" },
              }}
            >
              <IconButton
                onClick={handleSignUpClose}
                className="demo_form_close_button"
              >
                <ClearIcon />
              </IconButton>
              <p
                className="demo_form_title center mb24"
                style={{ marginTop: "0px" }}
              >
                ব্যবসার প্রসারে পাশে আছে প্রকাশ
              </p>

              <Grid container alignItems="center">
                <Grid
                  item
                  md={6}
                  className="hideForMobileViewOnly hideForTabViewOnly"
                >
                  <img
                    src="/hero.png"
                    alt="prokash model"
                    style={{
                      display: "block",
                      margin: "auto",
                      width: "50%",
                      marginBottom: "24px",
                    }}
                  />
                  <h3
                    className="title_semibold_medium mb12 center"
                    // data-aos="fade-up"
                    // data-aos-delay="400"
                  >
                    যেমন বাজেট, তেমন খরচ!
                  </h3>
                  <Box sx={{ width: "65%", margin: "auto" }}>
                    <Grid container className="mb12">
                      <Grid item sx={{ width: "40px" }}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22.9848 3.5564C16.8626 6.96214 14.5419 7.60419 9.40152 15.8545C9.22137 16.1437 8.80995 16.1781 8.58142 15.9255C7.22002 14.4204 5.48773 13.1345 1.06402 12.8685C5.6099 14.6315 6.88561 17.201 8.59396 19.7915C8.79569 20.0974 9.2474 20.0752 9.42887 19.7569C14.4188 11.0036 14.718 9.07434 22.9848 3.5564Z"
                            fill="#834BFF"
                          />
                        </svg>
                      </Grid>
                      <Grid item sx={{ width: "Calc(100% - 40px)" }}>
                        <p
                          className="text_body_xs_regular left"
                          style={{ fontWeight: 500 }}
                        >
                          ফেইসবুক, গুগল কিংবা ইউটিউবে মিনিটের মধ্যে বিজ্ঞাপন
                        </p>
                      </Grid>
                    </Grid>
                    <Grid container className="mb12">
                      <Grid item sx={{ width: "40px" }}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22.9848 3.5564C16.8626 6.96214 14.5419 7.60419 9.40152 15.8545C9.22137 16.1437 8.80995 16.1781 8.58142 15.9255C7.22002 14.4204 5.48773 13.1345 1.06402 12.8685C5.6099 14.6315 6.88561 17.201 8.59396 19.7915C8.79569 20.0974 9.2474 20.0752 9.42887 19.7569C14.4188 11.0036 14.718 9.07434 22.9848 3.5564Z"
                            fill="#834BFF"
                          />
                        </svg>
                      </Grid>
                      <Grid item sx={{ width: "Calc(100% - 40px)" }}>
                        <p
                          className="text_body_xs_regular left"
                          style={{ fontWeight: 500 }}
                        >
                          ফ্রি প্রকাশ একাউন্ট সঠিক কাস্টোমারের কাছে বিজ্ঞাপন
                          প্রচার সর্বোচ্চ ফলাফল ও বিক্রয় বৃদ্ধি এড একাউন্টের
                          প্রয়োজন নেই
                        </p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item sx={{ width: "40px" }}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22.9848 3.5564C16.8626 6.96214 14.5419 7.60419 9.40152 15.8545C9.22137 16.1437 8.80995 16.1781 8.58142 15.9255C7.22002 14.4204 5.48773 13.1345 1.06402 12.8685C5.6099 14.6315 6.88561 17.201 8.59396 19.7915C8.79569 20.0974 9.2474 20.0752 9.42887 19.7569C14.4188 11.0036 14.718 9.07434 22.9848 3.5564Z"
                            fill="#834BFF"
                          />
                        </svg>
                      </Grid>
                      <Grid item sx={{ width: "Calc(100% - 40px)" }}>
                        <p
                          className="text_body_xs_regular left"
                          style={{ fontWeight: 500 }}
                        >
                          বিকাশ দিয়ে পেমেন্ট করার সুবিধা
                        </p>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <AddCustomer handleSignUpClose={handleSignUpClose} />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleSignUpClose}>Disagree</Button>
          <Button onClick={handleSignUpClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        </Dialog>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          className="demo_dialog"
        >
          <DialogContent style={{ padding: "0px" }}>
            <Box
              sx={{
                boxSizing: "border-box",
                padding: {
                  xs: "30px 20px",
                  sm: "50px 40px 40px 40px",
                  md: "60px 80px 60px",
                  lg: "60px 80px 60px",
                },
                position: "relative",
                minWidth: { sm: "auto", md: "450px", lg: "550px" },
              }}
            >
              <IconButton
                onClick={handleClose}
                className="demo_form_close_button"
              >
                <ClearIcon />
              </IconButton>
              <Login handleClose={handleClose} />
              {/* <p
                  className="demo_form_title center"
                  style={{ marginTop: "0px" }}
                >
                  Login
                </p>
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
                      Submit
                    </Button>
                  </Grid>
                </Grid> */}
            </Box>
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
