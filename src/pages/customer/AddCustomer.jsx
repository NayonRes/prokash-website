import React, { useState, useEffect, useContext, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { AuthContext } from "../../context/AuthContext";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const AddCustomer = ({ handleSignUpClose }) => {
  const theme = useTheme();
  const { prokash_user, logout, login } = useContext(AuthContext);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [token, setToken] = useState();
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const validation = () => {
    let isError = false;
    // if (!name.trim()) {
    //   handleSnakbarOpen("Please enter user name", "error");
    //   document.getElementById("name").focus();
    //   return (isError = true);
    // }
    // if (!mobileNo.trim()) {
    //   handleSnakbarOpen("Please enter mobile number", "error");
    //   document.getElementById("mobileNo").focus();
    //   return (isError = true);
    // }
    // if (!email.trim()) {
    //   handleSnakbarOpen("Please enter email address", "error");
    //   document.getElementById("email").focus();
    //   return (isError = true);
    // } else if (
    //   !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    //     email
    //   )
    // ) {
    //   handleSnakbarOpen("Invalid email address", "error");
    //   document.getElementById("email").focus();
    //   return (isError = true);
    // }

    // if (!password.trim()) {
    //   handleSnakbarOpen("Please enter password", "error");
    //   document.getElementById("password").focus();
    //   return (isError = true);
    // }
    if (password.trim().length < 8) {
      handleSnakbarOpen(
        "The password field must be at least 8 characters.",
        "error"
      );
      document.getElementById("password").focus();
      return (isError = true);
    }
    if (!confirmPassword.trim()) {
      handleSnakbarOpen("Please enter confirm password", "error");
      document.getElementById("confirmPassword").focus();
      return (isError = true);
    }
    if (password.trim() !== confirmPassword.trim()) {
      handleSnakbarOpen("password and confirm password doesn't match", "error");

      return (isError = true);
    }

    return isError;
  };

  const handleVerify = () => {
    console.log("111");
  };
  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      handleSnakbarOpen("Execute recaptcha not yet available", "error");
      return;
    }

    const token = await executeRecaptcha("register");
    // console.log("token", token);
    return token;
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  const doSomething = () => {
    /* do something like submit a form and then refresh recaptcha */
    setRefreshReCaptcha((r) => !r);
  };
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = validation();
    // let err = false;
    setErrors({});
    // let recaptcha_token = "testing";
    let recaptcha_token = await handleReCaptchaVerify();
    if (recaptcha_token) {
      if (err) {
        return;
      } else {
        setLoading(true);
        try {
          let data = {
            name,
            email,
            mobile: "+880" + mobileNo,
            password: password,
            password_confirm: confirmPassword,
            recaptcha_token: recaptcha_token,
          };
          let response = await axios({
            url: "/api/auth/register",
            method: "post",
            data: data,
            // headers: {
            //   Authorization: `Bearer ${prokash_user.token}`,
            // },
          });
          console.log("response", response);
          if (response?.status > 199 && response?.status < 300) {
            handleSnakbarOpen("Successful", "success");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setMobileNo("");
            login(response?.data.data);
            handleSignUpClose();
          }
        } catch (error) {
          console.log("error", error);
          setLoading(false);

          if (
            error?.response?.status === 401 ||
            error?.response?.status === 403
          ) {
            logout();
            return;
          }
          if (error?.response?.status === 500) {
            handleSnakbarOpen(error?.response?.statusText, "error");
          } else {
            if (error.response.data?.errors?.recaptcha_token?.length > 0) {
              handleSnakbarOpen(
                error.response.data?.errors?.recaptcha_token[0],
                "error"
              );
            }
            setErrors(error.response.data.errors);
          }
          // handleSnakbarOpen(error.response.data.messages.toString(), "error");
          // if (error.response.data.errors.length < 1) {
          //   handleSnakbarOpen("Something went wrong", "error");
          // }
        }
        setLoading(false);
      }
    }
  };
  const formStyle = {
    borderRadius: "100vw",
    px: 3,
    py: 1,
    // textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      "& .MuiSvgIcon-root": {
        fontSize: "14px",
      },
    },
  };
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="center">
        <form
          style={
            {
              // width: "400px",
            }
          }
          onSubmit={handleSubmit}
        >
          {/* <Typography
            variant="h5"
            component="div"
            className="demo_form_title"
            style={{ marginBottom: "30px", textAlign: "center" }}
          >
            Add Customer
          </Typography> */}

          <Box sx={{ marginBottom: "18px" }}>
            <Typography variant="base" htmlFor="name">
              Name *
            </Typography>
            <TextField
              required
              id="name"
              // label="Name"
              fullWidth
              size="small"
              className="demo_form_input_style"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <Typography variant="small" color="error.main">
                {errors.name}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography variant="base" htmlFor="mobileNo">
              Mobile No *{" "}
              {/* <span
                style={{ color: theme.palette.text.light, fontSize: "12px" }}
              >
                (ex : 01XXX-XXX-XXX)
              </span> */}
            </Typography>
            <Grid container alignItems="center" spacing={2}>
              <Grid item style={{ width: "100px" }}>
                <Box
                  className="demo_form_text_box_style"
                  sx={{ border: "1px solid #cfe3ff" }}
                >
                  +880
                </Box>
              </Grid>
              <Grid item style={{ width: "Calc(100% - 100px)" }}>
                <TextField
                  required
                  // label="Mobile No"
                  fullWidth
                  type="number"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  size="small"
                  className="demo_form_input_style"
                  variant="outlined"
                  id="mobileNo"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </Grid>
            </Grid>

            {errors.mobile && (
              <Typography variant="small" color="error.main">
                {errors.mobile}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography variant="base" htmlFor="email">
              Email *
            </Typography>
            <TextField
              required
              type="email"
              // label="Email"
              fullWidth
              size="small"
              className="demo_form_input_style"
              variant="outlined"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <Typography variant="small" color="error.main">
                {errors.email}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "18px" }}>
            <Typography variant="base" htmlFor="password">
              Password *{" "}
              <span
                style={{ color: theme.palette.text.light, fontSize: "12px" }}
              >
                (at least 8 characters)
              </span>
            </Typography>
            <TextField
              required
              // label="Password"
              fullWidth
              size="small"
              className="demo_form_input_style"
              variant="outlined"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <Typography variant="small" color="error.main">
                {errors.password}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "40px" }}>
            <Typography variant="base" htmlFor="confirmPassword">
              Confirm Password *
            </Typography>
            <TextField
              required
              // label="Confirm Password"
              fullWidth
              size="small"
              className="demo_form_input_style"
              variant="outlined"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* {errors.password && (
              <Typography variant="small" color="error.main">
                {errors.password}
              </Typography>
            )} */}
          </Box>
          {/* <Box sx={{ marginBottom: "18px" }}> */}
          {/* <GoogleReCaptchaProvider
              reCaptchaKey="6LeJVocpAAAAAISRk8GeTI3_y6n-HBbtU35Xs_b4"
              // reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
            > */}
          {/* <GoogleReCaptcha
              onVerify={onVerify}
              refreshReCaptcha={refreshReCaptcha}
            /> */}
          {/* </GoogleReCaptchaProvider> */}
          {/* </Box> */}
          <Button
            variant="contained"
            disableElevation
            fullWidth
            sx={{
              marginBottom: "30px",
              minHeight: "60px",
              borderRadius: "8px",
            }}
            disabled={loading}
            // onClick={onSubmit}
            type="submit"
          >
            {loading === false && "Submit"}
            <PulseLoader
              color={"#834BFF"}
              loading={loading}
              size={10}
              speedMultiplier={0.5}
            />{" "}
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default AddCustomer;
