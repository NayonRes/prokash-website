import React from "react";
import Chip from "@mui/material/Chip";
import { Box, Grid, TextField, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";

import { useTheme } from "@mui/material/styles";
const Location = ({
  location,
  setLocation,
  divisions,
  setDivisions,
  note,
  setNote,
}) => {
  const theme = useTheme();
  const divisionNames = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Barisal",
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
  ];

  const handleLocation = (e) => {
    setLocation(e.target.value);
    if (e.target.value === "ALL Bangladesh") {
      setDivisions(divisionNames);
    } else {
      setDivisions([]);
    }
  };
  const handleChange = (item, i) => {
    // console.log("event.target.checked", item);
    // setDivisions(event.target.checked);
    setLocation("Divisions");
    if (divisions.includes(item)) {
      let newDivisions = divisions.filter((res) => res !== item);
      setDivisions(newDivisions);
    } else {
      setDivisions([...divisions, item]);
    }
    // console.log("divisions", divisions);
  };
  return (
    <div>
      <Typography
        variant="h6"
        color="text.main"
        sx={{
          //   textAlign: "center",

          fontSize: "18px",
          fontWeight: 500,
          color: "#696969",
          mb: 1,
        }}
      >
        Location
      </Typography>
      <FormControl sx={{ pl: 3 }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={location}
          onChange={handleLocation}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: 14,
              fontWeight: 500,
              color: "#696969",
            },
            "& .MuiSvgIcon-root": {
              fontSize: 18,
            },
          }}
        >
          <FormControlLabel
            value="ALL Bangladesh"
            control={<Radio />}
            label="ALL Bangladesh"
          />
          <FormControlLabel
            value="Divisions"
            control={<Radio />}
            label="Divisions"
          />
        </RadioGroup>
      </FormControl>
      <FormGroup sx={{ ml: 6 }}>
        {divisionNames?.map((item, i) => (
          <FormControlLabel
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 16 },
              "& .MuiFormControlLabel-label": {
                fontSize: 14,
                color: "#696969",
                fontWeight: 400,
              },
            }}
            key={i}
            control={<Checkbox />}
            label={item}
            checked={divisions.includes(item)}
            onChange={() => {
              handleChange(item, i);
            }}
          />
        ))}
      </FormGroup>
      <TextField
        sx={{ mt: 1 }}
        label="Note"
        fullWidth
        className="demo_form_input_style2"
        variant="outlined"
        id="note"
        multiline
        rows={2}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      {/* <FormControl sx={{ pl: 3 }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={promotion_objective}
          onChange={handleChange}
        >
          {obectives?.map((item, i) => (
            <FormControlLabel
              value={item?.title}
              control={<Radio />}
              label={item?.title}
            />
          ))}
        </RadioGroup>
      </FormControl> */}
    </div>
  );
};

export default Location;
