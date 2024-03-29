import React from "react";
import Chip from "@mui/material/Chip";
import { Box, Grid, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useTheme } from "@mui/material/styles";

const GenderAndAge = ({
  gender,
  setGender,
  min_age,
  setMin_age,
  max_age,
  setMax_age,
}) => {
  const theme = useTheme();
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      {" "}
      <Typography
        variant="h6"
        color="text.main"
        sx={{
          textAlign: "center",

          fontSize: "18px",
          fontWeight: 500,
          color: "#696969",
          mt: 1,
        }}
      >
        Gender
      </Typography>
      <FormControl sx={{ mb: 6, width: "100%" }}>
        {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={gender}
          onChange={handleGender}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 14,
            },
            "& .MuiSvgIcon-root": {
              fontSize: 16,
            },
            justifyContent: "center",
            color: "#696969",
            fontWeight: 500,
          }}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Both" control={<Radio />} label="Both" />
        </RadioGroup>
      </FormControl>
      <Typography
        variant="h6"
        color="text.main"
        sx={{
          textAlign: "center",

          fontSize: "18px",
          fontWeight: 500,
          mb: 2,
          color: "#696969",
        }}
      >
        Age Range
      </Typography>
      <Box sx={{ px: 2 }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Min Age</InputLabel>
                <Select
                  sx={{ color: "#696969" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Min Age"
                  size="small"
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  value={min_age}
                  onChange={(e) => setMin_age(e.target.value)}
                >
                  {[...Array(48)].map((item, i) => (
                    <MenuItem key={i} value={18 + i} sx={{ color: "#696969" }}>
                      {18 + i}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h6"
              color="text.main"
              sx={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: 500,
                color: "#696969",
              }}
            >
              To
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Max Age</InputLabel>
                <Select
                  sx={{ color: "#696969" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="Max Age"
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  value={max_age}
                  onChange={(e) => setMax_age(e.target.value)}
                >
                  {[...Array(48)].map((item, i) => (
                    <MenuItem key={i} value={18 + i} sx={{ color: "#696969" }}>
                      {18 + i}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default GenderAndAge;
