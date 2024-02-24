import React from "react";
import "./Test.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Grid, IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const Test = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <>
      <div className="circle1">
        <div className="circle2">
          <img src="/images/icon-3.svg" alt="" className="circle2_img1" />
          <img src="/images/icon-4.svg" alt="" className="circle2_img2" />
        </div>
        <div className="circle3">
          <img src="/images/icon-1.svg" alt="" className="circle3_img1" />
          <img src="/images/icon-2.svg" alt="" className="circle3_img2" />
        </div>
        <div className="circle4">
          <img src="/images/icon.svg" alt="" className="circle4_img1" />
          <div className="circle5"></div>
        </div>
      </div>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        className="demo_dialog"
      >
        <DialogContent style={{ padding: "0px" }}>
          <Grid container>
            <Grid
              item
              md={6}
              className="demo_dialog_left  hideForTabViewOnly hideForMobileViewOnly"
            >
              <p
                className="demo_form_title center"
                style={{ marginTop: "80px" }}
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
              md={6}
              style={{ padding: "40px", position: "relative" }}
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
    </>
  );
};

export default Test;
