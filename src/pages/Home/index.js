import { CircularProgress, InputAdornment, OutlinedInput, Paper, Popover, TextField, textFieldClasses, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.scss";
import { useState } from "react";
import ApiServices from "../../services/apiServices";
function Home() {
  const [open, setOpen] = useState(false);
  const [anchorPos, setAnchorPos] = useState(null);
  const [popupWidth, setpopupWidth] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [debounceTimeoutHandle, setDebounceTimeoutHandle] = useState(null);
  let apiServices = new ApiServices();
  const handleShow = (e) => {
    if(!open) {
      setAnchorPos({
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 5,
        left: e.currentTarget.offsetLeft,
      });
      setpopupWidth(e.currentTarget.offsetWidth);
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getDataOnSearch = async (event) => {
    if (debounceTimeoutHandle) {
      clearTimeout(debounceTimeoutHandle);
      setDebounceTimeoutHandle(null);
    }
    if (event.target?.value?.length > 2) {
      setLoading(true);
      setDebounceTimeoutHandle(
        setTimeout(async () => {
          let result = await apiServices.get(
            process.env.REACT_APP_BACKEND_URL + "/customers",
            { search: event.target.value }
          );
          setLoading(false);
          setNoData(result.data.length === 0);
          setSearchResults(result.data);
          setOpen(true);
        }, 300)
      );
    } else {
      setNoData(false);
      setLoading(false);
      setSearchResults([]);
    }
  };
  return (
    <div className="text-center">
      <div className="w-75 mx-auto mt-5 pt-5">
        <TextField
          className="mt-3 w-100 remove-label"
          onInput={handleShow}
          placeholder="Search"
          variant="outlined"
          onChange={(event) => {
            getDataOnSearch(event);
          }}
          InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          )}}
          aria-describedby="search-popup"
        ></TextField>
        <Popover
          id="search-popup"
          anchorReference="anchorPosition"
          className="w-100"
          open={open}
          onClose={handleClose}
          anchorPosition={anchorPos}
          disableAutoFocus
        >
          <Paper
            style={{ width: popupWidth }}
            className="popover-results-container p-2"
          >
            {noData ? (
              <div className="d-flex">
                <span className="mx-auto">{window.configJson.noDataMessage}</span>
              </div>
            ) : loading ? (
              <div className="d-flex">
                <CircularProgress className="mx-auto" />
              </div>
            ) : (
              searchResults.map((item,index) => (
                <div key={index} className="w-100 d-flex p-2">
                  <span className="my-auto">{item.name}</span>
                  {item.category && (
                    <span className={"category-box py-2 my-auto px-3 mx-2 category-box-" + item.category.toLowerCase()}>
                      {item.category}
                    </span>
                  )}
                </div>
              ))
            )}
          </Paper>
        </Popover>
      </div>
    </div>
  );
}

export default Home;
