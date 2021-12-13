import { Link, useLocation } from "react-router-dom";
import { Button, Drawer, IconButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const location = useLocation();
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className="d-flex pt-3 justify-content-between">
      <Link to="/">
        <Button className="fw-bold fs-4" color="primary" variant="text">VICTORY ADS</Button>
      </Link>
      
      <React.Fragment>
        <IconButton>
          <MenuIcon onClick={()=>{setOpenMenu(true)}} fontSize="large" />
        </IconButton>
        <Drawer
          open={openMenu}
          anchor="right"
          onClose={()=>{setOpenMenu(false)}}
        >
          <Paper>
          <Link to="/create" className="d-block">
            <Button onClick={()=>{setOpenMenu(false)}} className="fw-bold fs-2">Add Business</Button>
          </Link>
          <Link to="/about"className="d-block">
            <Button onClick={()=>{setOpenMenu(false)}} className="fw-bold fs-2">About</Button>
          </Link>
          </Paper>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Header;
