import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function AddBusiness() {
  return (
    <>
      <h3 className="text-center">Add Business</h3>
      <div className="d-flex justify-content-center">
        <form className="d-flex mt-3 flex-column">
          <div className="d-flex justify-content-around mb-4 gap-5">
            <TextField
              id="outlined-basic"
              label="Business Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Business Type"
              variant="outlined"
            />
          </div>
          <div className="d-flex justify-content-around mb-4 gap-5">
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              type="number"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div className="d-flex justify-content-around mb-4">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Address"
              variant="outlined"
              multiline
              rows={2}
            />
          </div>
          <div className="border p-4 mb-2">
            <h6 className="text-center mb-3">Services</h6>
            <TextField
              id="outlined-basic"
              label="Add Your Service"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="text-center">
            <Button variant="outlined">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBusiness;
