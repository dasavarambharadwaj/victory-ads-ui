import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import ApiServices from "../../services/apiServices";

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
let apiServices = new ApiServices();
function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    let object = {};
    let emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    let phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    object.email = emailRegex.test(email) ? null : "Invalid email address"
    object.businessName = businessName ? null : "This field is required"
    object.businessType = businessType ? null : "This field is required"
    object.mobileNumber = mobileNumber ? phoneExp.test(mobileNumber) ? null : "Invalid mobile number" : "This field is required";
    object.address = address ? null : "This field is required"
    setErrors(object);
    if (Object.keys(object).filter(key => object[key] !== null).length === 0) {
      try {
        let response = await apiServices.post(process.env.REACT_APP_BACKEND_URL + "/customer",
        {
          name: businessName,
          category: businessType,
          phone: [mobileNumber],
          address: address,
          email: email,
          services: []
        });
        console.log(response)
        if(response?.data?.acknowledged) {
          alert("Business Added Successfully")
        }
      } catch(err) {
        alert("Some Error occured");
      }
      
    }
  };
  const requiredValidationOnChange = (value,name) => {
    errors[name] = value ? null : "This field is required";
    setErrors(errors);
  }
  const mobileValidationOnChange = (value,name) => {
    let regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    errors[name] = value ? regExp.test(value) ? null : "Invalid mobile number" : "This field is required";
    setErrors(errors);
  }
  
  return (
    <>
      <h3 className="text-center">Add Business</h3>
      <form autoComplete="off">
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
                setBusinessName(e.target.value);
                requiredValidationOnChange(e.target.value,e.target.name)
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={Boolean(errors?.businessType)}
              helperText={errors?.businessType}
              id="outlined-basic"
              select
              label="Select Business Type"
              variant="outlined"
              className="white-field w-100"
              name="businessType"
              value={businessType}
              onChange={(e) => {
                setBusinessType(e.target.value);
                requiredValidationOnChange(e.target.value,e.target.name)
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
              name="mobileNumber"
              value={mobileNumber}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className="white-field">
                    +91
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setMobileNumber(e.target.value);
                mobileValidationOnChange(e.target.value,e.target.name)
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
                setEmail(e.target.value);
                requiredValidationOnChange(e.target.value,e.target.name)
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
              name="address"
              multiline
              rows={2}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                requiredValidationOnChange(e.target.value,e.target.name)
              }}
            />
          </Grid>
          <Grid item md={12} className="text-center">
            <Button variant="contained" onClick={handleSubmit} color="primary" type="button">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddBusiness;
