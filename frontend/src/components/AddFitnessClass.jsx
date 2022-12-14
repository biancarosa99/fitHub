import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "../styles/AddFitnessClass.css";

const AddFitnessClass = () => {
  const [location, setLocation] = useState("");
  const [fitnessClass, setFitnessClass] = useState("");
  const [value, setValue] = React.useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFitnessClassChange = (event) => {
    setFitnessClass(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="add-class-container">
        <form className="form-container">
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#f45b69 !important",
              }}
            >
              Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleLocationChange}
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: "pink !important",
                  },
                },
              }}
              labelStyle={{ color: "#f45b69" }}
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                ".MuiSvgIcon-root ": {
                  fill: "#f45b69 !important",
                },
                "label.Mui-focused": {
                  color: "#f45b69 !important",
                },
                "&:focus label": {
                  color: "#f45b69",
                },
                ".MuiFormLabel-focus": {
                  color: "#f45b69",
                },
              }}
            >
              <MenuItem value={"FitHub1"}>FitHub 1</MenuItem>
              <MenuItem value={"FitHub2"}>FitHub 2</MenuItem>
              <MenuItem value={"FitHub3"}>FitHub 3</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#f45b69 !important",
              }}
            >
              Class
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              variant="outlined"
              id="demo-simple-select"
              value={fitnessClass}
              label="Class"
              onChange={handleFitnessClassChange}
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    backgroundColor: "pink !important",
                  },
                },
              }}
              labelStyle={{ color: "#f45b69" }}
              sx={{
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f45b69",
                },
                ".MuiSvgIcon-root ": {
                  fill: "#f45b69 !important",
                },
                "label.Mui-focused": {
                  color: "#f45b69 !important",
                },
                "&:focus label": {
                  color: "#f45b69",
                },
                ".MuiFormLabel-focus": {
                  color: "#f45b69 ",
                },
              }}
            >
              <MenuItem value={"Kangoo Jumps"}>Kangoo Jumps</MenuItem>
              <MenuItem value={"Tabata Fitness"}>Tabata Fitness</MenuItem>
              <MenuItem value={"Fitbalance"}>Fitbalance</MenuItem>
              <MenuItem value={"Legs&Butt"}>Legs&butt</MenuItem>
              <MenuItem value={"Cycling"}>Cycling</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <DateTimePicker
              renderInput={(props) => (
                <TextField
                  {...props}
                  className="myDatePicker"
                  sx={{
                    ".myDatePicker .Mui-focused fieldset.MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#f45b69 !important",
                      },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f45b69",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f45b69",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#f45b69",
                    },
                    ".MuiSvgIcon-root ": {
                      fill: "#f45b69 !important",
                    },
                    "label.Mui-focused": {
                      color: "#f45b69 !important",
                    },
                    "&:focus label": {
                      color: "#f45b69 !important",
                    },
                    ".MuiFormLabel-focus": {
                      color: "#f45b69 !important",
                    },
                    ".MuiFormLabel-root": {
                      color: "#f45b69 !important",
                    },
                  }}
                />
              )}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            ></DateTimePicker>
          </FormControl>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default AddFitnessClass;
