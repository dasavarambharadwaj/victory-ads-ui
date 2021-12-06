import { CircularProgress, InputAdornment, OutlinedInput, Paper, Popover } from "@mui/material";
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
  const handleShow = () => {
    let element = document.querySelectorAll(".search-field")[0];
    setAnchorPos({
      top: element.offsetTop + element.offsetHeight + 5,
      left: element.offsetLeft,
    });
    setpopupWidth(element.offsetWidth);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getDataOnSearch = async (event) => {
    if (debounceTimeoutHandle) {
      clearTimeout(debounceTimeoutHandle);
      setDebounceTimeoutHandle(null);
    }
    if (event.target.value !== "") {
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
      <div className="mt-5 fs-5 fw-bold">
        <span>VICTORY ADS</span>
      </div>
      <div className="w-75 mx-auto">
        <OutlinedInput
          className="mt-3 search-field"
          placeholder="Search"
          onClick={handleShow}
          onChange={(event) => {
            getDataOnSearch(event);
          }}
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
            ) : searchResults.length === 0 ? (
              <div className="d-flex">
                <span className="mx-auto">Search for business</span>
              </div>
            ) : (
              searchResults.map((item) => (
                <div key={item.id} className="w-100 d-flex p-2">
                  <span className="my-auto">{item.name}</span>
                  {item.category && (
                    <span className={"category-box py-2 px-3 ms-2 category-box-" + item.category.toLowerCase()}>
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
