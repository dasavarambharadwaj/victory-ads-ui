import { TextField, Button, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useState } from "react";

function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({ err: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (businessName === "") {
      let err = errors;
      err.businessName = "value is required";
    }
    console.log("hello");

    const customer = {
      businessName,
      businessType,
      mobileNumber,
      email,
      address,
    };
  };
  const checkRequiredValidations = (value, key) => {
    const err = errors;
    if (value === "") {
      err[key] = "value is required";
      setErrors(err);
    } else {
      err[key] = "";
      setErrors(err);
    }
  };
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
              autoCompleteOff
              error={errors["businessName"] !== ""}
              id="outlined-basic"
              className="white-field w-100"
              label="Business Name"
              variant="outlined"
              name="businessName"
              value={businessName}
              helperText={errors.businessName}
              onChange={(e) => {
                setBusinessName(e.target.value);
                checkRequiredValidations(e.target.value, e.target.name);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error
              id="outlined-basic"
              label="Business Type"
              variant="outlined"
              className="white-field w-100"
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error

              id="outlined-basic"
              className="white-field w-100"
              label="Mobile Number"
              variant="outlined"
              type="number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              // error
              id="outlined-basic"
              className="white-field w-100"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}

export default AddBusiness;
