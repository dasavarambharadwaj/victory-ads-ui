import Typography from "@mui/material/Typography";
import {
  Input,
  InputAdornment,
  OutlinedInput,
  Paper,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.scss";
import { useState } from "react";
function Home() {
  const [open, setOpen] = useState(false);
  const [anchorPos, setAnchorPos] = useState(null);
  const [popupWidth, setpopupWidth] = useState(0);

  const handleShow = (event) => {
    let element = document.querySelectorAll(".search-field")[0];
    setAnchorPos({
      top: element.offsetTop + element.offsetHeight + 5,
      left: element.offsetLeft,
    });
    setpopupWidth(element.offsetWidth);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorPos(null);
    setOpen(false);
  };
  return (
    <div className="text-center">
      <div className="mt-5 fs-5 fw-bold">
        <span>VICTORY ADS</span>
      </div>
      <div className="w-75 mx-auto">
        <OutlinedInput
          className="mt-3 search-field"
          placeholder="Search"
          onFocus={handleShow}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          }
          aria-describedby="search-popup"
        ></OutlinedInput>
        <Popover
          id="search-popup"
          anchorReference="anchorPosition"
          className="w-100"
          open={open}
          onClose={handleClose}
          anchorPosition={anchorPos}
          disableAutoFocus
        >
          <Paper style={{ width: popupWidth }} className="p-2">
            Content of the popover
          </Paper>
          <Paper style={{ width: popupWidth }} className="p-2">
            Content of the popover
          </Paper>
        </Popover>
      </div>
    </div>
  );
}

export default Home;
