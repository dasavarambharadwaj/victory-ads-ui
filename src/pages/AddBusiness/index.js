import {
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useState } from "react";

const businessTypes = [
  {
    value: "Groceries",
  },
  {
    value: "Hospital",
  },
  {
    value: "Gym",
  },
  {
    value: "others",
  },
];

function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  // const [businessType, setBusinessType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (businessName === "") {
      let err = errors;
      err.businessName = "value is required";
    }
    console.log("hello");

    // const customer = {
    //   businessName,
    //   businessType,
    //   mobileNumber,
    //   email,
    //   address,
    // };
  };
  // const checkRequiredValidations = (value, key) => {
  //   const err = errors;
  //   if (value === "") {
  //     err[key] = "value is required";
  //     setErrors(err);
  //   } else {
  //     err[key] = "";
  //     setErrors(err);
  //   }
  // };
  return (
    <>
      <h3 className="text-center">Add Business</h3>
      <form onSubmit={handleSubmit} autocomplete="off">
        <Grid
          container
          // maxWidth="sm"
          // text-center
          spacing={2}
          className="w-75 mx-auto"
          // direction="row"
          // justifyContent="center"
          // alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <TextField
              // error={errors["businessName"] !== ""}
              error={Boolean(errors?.businessName)}
              helperText={errors?.businessName}
              id="outlined-basic"
              className="white-field w-100"
              label="Business Name"
              variant="outlined"
              name="businessName"
              value={businessName}
              // helperText={errors.businessName}
              // onChange={(e) => {
              //   setErrors("");
              //   setBusinessName(e.target.value);
              //   // checkRequiredValidations(e.target.value, e.target.name);
              // }}
              onChange={(e) => {
                setErrors("");
                setBusinessName(e.target.value);
                const reg = new RegExp(/^[a-zA-Z'-]+$/).test(e.target.value);
                console.log(reg);
                if (!reg) {
                  setErrors({ businessName: "please enter a  correct name" });
                  console.log(e.target.value);
                }
                // checkRequiredValidations(e.target.value, e.target.name);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error
              id="outlined-basic"
              // label="Business Type"
              select
              label="Select Business Type"
              variant="outlined"
              className="white-field w-100"
              name="businessType"
              // value={businessType}
              // onChange={(e) => setBusinessType(e.target.value)}
            >
              {businessTypes.map((option) => (
                <MenuItem value={option.value} className="white-field">
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error
              error={Boolean(errors?.mobileNumber)}
              helperText={errors?.mobileNumber}
              id="outlined-basic"
              className="white-field w-100"
              label="Mobile Number"
              variant="outlined"
              // type="number"
              value={mobileNumber}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className="white-field">
                    +91
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setErrors({ mobileNumber: "" });
                setMobileNumber(e.target.value);
                const reg = new RegExp(/^\d*$/).test(e.target.value);
                console.log(reg);
                if (!reg) {
                  setErrors({ mobileNumber: "please enter a  correct number" });
                  console.log(e.target.value);
                }
                // checkRequiredValidations(e.target.value, e.target.name);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error
              error={Boolean(errors?.email)}
              helperText={errors?.email}
              id="outlined-basic"
              className="white-field w-100"
              label="Email"
              name="email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setErrors("");
                setEmail(e.target.value);
                // const reg = new RegExp(
                //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                // ).test(e.target.value);
                // console.log(reg);
                // if (!reg) {
                //   setErrors({ email: "please enter a correct Email" });
                //   console.log(e.target.value);
                // }
                // checkRequiredValidations(e.target.value, e.target.name);
              }}
              onBlur={(e) => {
                const reg = new RegExp(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                ).test(e.target.value);
                console.log(reg);
                if (!reg) {
                  setErrors({ email: "please enter a correct Email" });
                  console.log(e.target.value);
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              // error
              fullWidth
              id="outlined-basic"
              className="white-field w-100"
              label="Address"
              variant="outlined"
              multiline
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
          <Grid item md={12} className="text-center">
            {/* <div className="d-flex justify-content-center"> */}
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>

          {/* </div> */}
        </Grid>
      </form>
    </>
  );
}

export default AddBusiness;
