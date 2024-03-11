import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
// import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSnackbar } from "notistack";
import PulseLoader from "react-spinners/PulseLoader";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { handlePostData } from "../../services/PostDataService";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Box } from "@mui/material";
import axios from "axios";
// const useStyles = makeStyles((theme) => ({
//   main: {
//     width: "1100px !important",
//     padding: "10px 30px",
//     background: "#fff",
//     borderRadius: "10px",
//     textAlign: "center",

//     boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
//     boxSizing: "border-box",
//   },
//   formStyle: {
//     padding: "50px",
//   },
// }));

const Login = ({ handleClose }) => {
  // const classes = useStyles();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const validation = () => {
    let isError = false;
    if (!email.trim()) {
      handleSnakbarOpen("Please enter email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email.trim()
      )
    ) {
      handleSnakbarOpen("Invalid email address", "error");
      document.getElementById("email").focus();
      return (isError = true);
    }

    if (!password.trim()) {
      handleSnakbarOpen("Please enter password", "error");
      document.getElementById("password").focus();
      return (isError = true);
    }
    return isError;
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let err = validation();
    if (err) {
      return;
    } else {
      setLoading(true);
      try {
        let url = `/api/auth/login`;
        let data = {
          email: email.trim(),
          password: password.trim(),
        };
        // let res = await handlePostData(url, data);
        let res = await axios({
          url: url,
          method: "post",
          data: data,
        });
        console.log("res -----------------", res.data);

        if (res?.status > 199 && res?.status < 300) {
          handleSnakbarOpen("Successfull", "success");
          login(res?.data.data);
          handleClose();
        }
        setLoading(false);

        // login(data);
        // setLoading(false);
        // navigate("/dashboard");
      } catch (error) {
        setLoading(false);
        console.log("catch error", error);
        if (error?.response?.status === 500) {
          handleSnakbarOpen(error?.response?.statusText, "error");
        } else {
          console.log("error.response.data.errors", error.response.data.errors);
          setErrors(error.response.data.errors);
        }
      }
    }
  };
  return (
    <React.Fragment>
      <form
        // className={classes.formStyle}
        onSubmit={onSubmit}
        // style={{ padding: "50px" }}
      >
        <img
          src="/logo.svg"
          alt=""
          style={{ display: "block", margin: "auto", maxWidth: "155px" }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ margin: "10px 0px 30px", textAlign: "center" }}
        >
          Sign-In to continue{" "}
        </Typography>
        <Box sx={{ marginBottom: "30px" }}>
          <TextField
            className="demo_form_input_style"
            autoFocus
            placeholder="Enter your email address"
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineRoundedIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          {errors?.email && (
            <Typography
              variant="small"
              color="error.main"
              sx={{ textAlign: "left" }}
            >
              {errors.email.toString()}
            </Typography>
          )}
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <FormControl
            fullWidth
            variant="outlined"
            className="demo_form_input_style"
          >
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {errors?.password && (
            <Typography
              variant="small"
              color="error.main"
              sx={{ textAlign: "left" }}
            >
              {errors.password.toString()}
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          disableElevation
          fullWidth
          style={{ marginBottom: "20px", minHeight: "37px" }}
          className="contained_buttton"
          disabled={loading}
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

        <Typography
          variant="subtitle1"
          component="div"
          style={{
            color: "#F91351",
            textAlign: "right",
            cursor: "pointer",
          }}
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </Typography>
      </form>
    </React.Fragment>
  );
};

export default Login;
