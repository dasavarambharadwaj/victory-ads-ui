import { InputAdornment, List, ListItem,ListItemButton, ListItemText, Paper, Popover, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const DropdownComponent = ({value,label,onChange,className}) => {
    const [open, setOpen] = useState(false);
    const [anchorPos, setAnchorPos] = useState(null);
    const [popupWidth, setpopupWidth] = useState(0);
    const [search,setSearch] = useState("")
    const handleShow = (e) => {
      setAnchorPos({
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 5,
        left: e.currentTarget.offsetLeft,
      });
      setpopupWidth(e.currentTarget.offsetWidth);
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
          <div className={className}>
            <TextField
            id="outlined-basic"
            className="w-100"
            value={search}
            label={label}
            name="email"
            variant="outlined"
            onClick={handleShow}
            onChange={(e)=>{setSearch(e.target.value)}}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon></SearchIcon>
                </InputAdornment>
            }
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
              className="p-2">
                {search && (
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={()=>{
                        let newList = value
                        newList.push(search)
                        setSearch("")
                        handleClose()
                        onChange(newList)
                      }}>
                        <ListItemText primary={`add "${search}"`} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                )}
              </Paper>
            </Popover>
          </div>
        </>
     );
}
 
export default DropdownComponent;