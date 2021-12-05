import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function AddBusiness() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      businessName,
      businessType,
      mobileNumber,
      email,
      address,
    };

    
  };
  return (
    <>
      <h3 className="text-center">Add Business</h3>
      <div className="d-flex justify-content-center">
        <form className="d-flex mt-3 flex-column">
          <div className="d-flex justify-content-around mb-4 gap-5">
            <TextField
              id="outlined-basic"
              className="white-field"
              label="Business Name"
              variant="outlined"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Business Type"
              variant="outlined"
              className="white-field"
              value={businessType}
              onChange={(e) => setBusinessType(this.target.value)}
            />
          </div>
          <div className="d-flex justify-content-around mb-4 gap-5">
            <TextField
              id="outlined-basic"
              className="white-field"
              label="Mobile Number"
              variant="outlined"
              type="number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(this.target.value)}
            />
            <TextField
              id="outlined-basic"
              className="white-field"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-around mb-4">
            <TextField
              fullWidth
              id="outlined-basic"
              className="white-field"
              label="Address"
              variant="outlined"
              multiline
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="border p-4 mb-2">
            {/* <Stack direction="row" spacing={8}> */}
            <h6 className="text-center mb-3">Services</h6>
            <TextField
              id="outlined-basic"
              className="white-field"
              label="Add Your Service"
              variant="outlined"
              size="small"
            />
            {/* </Stack> */}
          </div>
          <div className="text-center">
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBusiness;
