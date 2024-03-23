import React, {  useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IconButton } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";  
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import "./Header.css"; 
const MobileDrawer = ({
  checkServiceMenuActive,
  checkUseCasesMenuActive,
  checkCaseStudiesMenuActive,
  checkWhoWeServeMenuActive,
}) => {
  const location = useLocation();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleChange = (id, route) => {
    // console.log("id", id);
    // console.log("openCollapse", openCollapse);
    if (id === openCollapse) {
      setOpenCollapse("");
    } else {
      setOpenCollapse(id);
    }
    // setOpenCollapse(id);
    navigate(route);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="mobile_drawer_menu">
        <div style={{ position: "relative", padding: "10px 15px 15px" }}>
          <img src="/images/logo.svg" alt="prokash logo" style={{ width: "120px" }} />
          <IconButton
            id="closeButton"
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 7, top: 3 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("Home", "/");
              document.getElementById("closeButton").click();
            }}
            style={{ background: location.pathname === "/" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <img src="/images/home.svg" alt="Home icon" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              document.getElementById("closeButton").click();
              handleChange("Platform", "/platform");
            }}
            style={{
              background: location.pathname === "/platform" ? "#f3f3f3" : "",
            }}
          >
            <ListItemIcon>
              <img src="/images/apk_install.svg" alt="Platform Icon" />
            </ListItemIcon>
            <ListItemText primary="Platform" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleChange("Services")}
            style={{
              background:
                openCollapse === "Services" || checkServiceMenuActive()
                  ? "#b8cbe5"
                  : "",
            }}
          >
            <ListItemIcon>
              <img src="/images/services.svg" alt="Services icon" />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openCollapse === "Services" ? (
              <ExpandLess className="list_item_icon_style" />
            ) : (
              <ExpandMore className="list_item_icon_style" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openCollapse === "Services"}
          timeout="auto"
          unmountOnExit
          style={{ background: "#e2e8f0" }}
        >
          <div
            className="topbar_submenu_menu"
            // onClick={MenuHandleClose}
            onClick={() => {
              handleChange("Services", "/fintech-software-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/fintech-software-development"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Fintech software development</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Services", "/ewallet-app-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/ewallet-app-development"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>eWallet app development</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Services", "/p2p-development");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/p2p-development" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>P2P development</div>
          </div>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleChange("Use cases")}
            style={{
              background:
                openCollapse === "Use cases" || checkUseCasesMenuActive()
                  ? "#b8cbe5"
                  : "",
            }}
          >
            <ListItemIcon>
              <img src="/images/use-cases.svg" alt="Use cases icon" />
            </ListItemIcon>
            <ListItemText primary="Use cases" />
            {openCollapse === "Use cases" ? (
              <ExpandLess className="list_item_icon_style" />
            ) : (
              <ExpandMore className="list_item_icon_style" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openCollapse === "Use cases"}
          timeout="auto"
          unmountOnExit
          style={{ background: "#e2e8f0" }}
        >
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/e-wallet");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background: location.pathname === "/e-wallet" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>eWallet</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/general-ledger");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/general-ledger" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>General ledger</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/mobile-wallet");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/mobile-wallet" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Mobile wallet</div>
          </div>
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/money-transfer");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/money-transfer" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Money transfer</div>
          </div>
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/neobank");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background: location.pathname === "/neobank" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Neobank</div>
          </div>
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Use cases", "/payment-acceptance");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/payment-acceptance" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Payment acceptance</div>
          </div>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleChange("Case studies")}
            style={{
              background:
                openCollapse === "Case studies" || checkCaseStudiesMenuActive()
                  ? "#b8cbe5"
                  : "",
            }}
          >
            <ListItemIcon>
              <img src="/images/case-studies.svg" alt="Case studies icon" />
            </ListItemIcon>
            <ListItemText primary="Case studies" />
            {openCollapse === "Case studies" ? (
              <ExpandLess className="list_item_icon_style" />
            ) : (
              <ExpandMore className="list_item_icon_style" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openCollapse === "Case studies"}
          timeout="auto"
          unmountOnExit
          style={{ background: "#e2e8f0" }}
        >
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Case studies", "/payment-solution-provider");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/payment-solution-provider"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Payment solution provider</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Case studies", "/digital-wallet-solution");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/digital-wallet-solution"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Digital wallet system</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Case studies", "/mobile-money-processing");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background:
                location.pathname === "/mobile-money-processing"
                  ? "#f3f3f3"
                  : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Mobile money processing</div>
          </div>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleChange("Who we serve")}
            style={{
              background:
                openCollapse === "Who we serve" || checkWhoWeServeMenuActive()
                  ? "#b8cbe5"
                  : "",
            }}
          >
            <ListItemIcon>
              <img src="/images/user.svg" alt="Who we serve icon" />
            </ListItemIcon>
            <ListItemText primary="Who we serve" />
            {openCollapse === "Who we serve" ? (
              <ExpandLess className="list_item_icon_style" />
            ) : (
              <ExpandMore className="list_item_icon_style" />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse
          in={openCollapse === "Who we serve"}
          timeout="auto"
          unmountOnExit
          style={{ background: "#e2e8f0" }}
        >
          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Who we serve", "/startup");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background: location.pathname === "/startup" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Start up</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Who we serve", "/smb");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background: location.pathname === "/smb" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>SMB’s</div>
          </div>

          <div
            className="topbar_submenu_menu"
            onClick={() => {
              handleChange("Who we serve", "/enterprise");
              document.getElementById("closeButton").click();
            }}
            style={{
              borderBottom: "1px solid #f3f3f3",
              background: location.pathname === "/enterprise" ? "#f3f3f3" : "",
            }}
          >
            <div>
              <FiberManualRecordIcon style={{ fontSize: "10px" }} />
            </div>
            <div>Enterprise</div>
          </div>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton
            
           
            onClick={() => {
              handleChange("About us", "/about-us");
              document.getElementById("closeButton").click();
            }}
            style={{ background: location.pathname === "/about-us" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <img src="/images/company.svg" alt="About us icon" />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button
            variant="contained"
            disableElevation
            // color="#25316d"
            aria-label="open drawer"
            edge="start"
            color="primary"
            sx={{
              display: { md: "none" },
              padding: "6px 9px",
              minWidth: "0px !important",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileDrawer;
