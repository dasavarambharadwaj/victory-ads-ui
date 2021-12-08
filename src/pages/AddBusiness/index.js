import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import ApiServices from "../../services/apiServices";
import { useState } from "react";

const business = [
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
  const [businessType, setBusinessType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!businessName && !businessType && !mobileNumber && !email && !address) {
      setErrors({
        businessName: "please enter a  correct name",
        mobileNumber: "please enter a  correct number",
        email: "please enter a correct Email",
        address: "please enter a your address",
      });
      console.log("error");
    } else {
      console.log({ businessName, businessType, mobileNumber, email, address });
      // setTimeout(async () => {
      //   await ApiServices.post("http://localhost:3001/customers", {
      //     businessName,
      //     businessType,
      //     mobileNumber,
      //     email,
      //     address,
      //   });
      // }, 1000);
    }
    setBusinessName("");
    setBusinessType("");
    setMobileNumber("");
    setEmail("");
    setAddress("");
  };
  return (
    <>
      <h3 className="text-center">Add Business</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2} className="w-75 mx-auto">
          <Grid item xs={12} md={6}>
            <TextField
              error={Boolean(errors?.businessName)}
              helperText={errors?.businessName}
              id="outlined-basic"
              className="white-field w-100"
              label="Business Name"
              variant="outlined"
              name="businessName"
              value={businessName}
              onChange={(e) => {
                setErrors({ businessName: "" });
                setBusinessName(e.target.value);
                const reg = new RegExp(/^[a-zA-Z'-]+$/).test(e.target.value);
                console.log(reg);
                if (!reg) {
                  setErrors({ businessName: "please enter a  correct name" });
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              select
              label="Select Business Type"
              variant="outlined"
              className="white-field w-100"
              name="businessType"
              value={businessType}
              onChange={(e) => {
                setBusinessType(e.target.value);
                console.log(e.target.value);
              }}
            >
              {business.map((option) => (
                <MenuItem value={option.value} className="white-field">
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={Boolean(errors?.mobileNumber)}
              helperText={errors?.mobileNumber}
              id="outlined-basic"
              className="white-field w-100"
              label="Mobile Number"
              variant="outlined"
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
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={Boolean(errors?.email)}
              helperText={errors?.email}
              id="outlined-basic"
              className="white-field w-100"
              label="Email"
              name="email"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setErrors({ email: "" });
                setEmail(e.target.value);
                // const reg = new RegExp(
                //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                // ).test(e.target.value);
                // console.log(reg);
                // if (!reg) {
                //   setErrors({ email: "please enter a correct Email" });
                //   console.log(e.target.value);
                // }
              }}
              onBlur={(e) => {
                const reg = new RegExp(
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                ).test(e.target.value);
                console.log(reg);
                if (!reg) {
                  setErrors({ email: "please enter a correct Email" });
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              error={Boolean(errors?.address)}
              helperText={errors?.address}
              fullWidth
              id="outlined-basic"
              className="white-field w-100"
              label="Address"
              variant="outlined"
              multiline
              rows={2}
              value={address}
              // onChange={(e) => {
              //   setAddress(e.target.value);
              // }}
              onChange={(e) => {
                setErrors({ address: "" });
                setAddress(e.target.value);
                const reg = new RegExp(/^[a-zA-Z0-9\s,'-]*$/).test(
                  e.target.value
                );
                console.log(reg);
                if (!reg) {
                  setErrors({ address: "please enter a your address" });
                }
              }}
            />
          </Grid>
          <Grid item md={12} className="text-center">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddBusiness;
