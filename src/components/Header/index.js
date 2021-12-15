import { Link } from "react-router-dom";
import { Button, Drawer, IconButton, Paper, Typography, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Header = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="d-flex pt-3 justify-content-between">
      <Link to="/">
        <Button className="fw-bold fs-4" color="primary" variant="text">VICTORY ADS</Button>
      </Link>
      {!isMobile && (
      <React.Fragment>
        <IconButton>
          <MenuIcon onClick={()=>{setOpenMenu(true)}} fontSize="large" />
        </IconButton>
        <Drawer
          open={openMenu}
          anchor="right"
          onClose={()=>{setOpenMenu(false)}}
        >
          <Box className="d-flex mb-2 mt-2 mx-2" style={{maxWidth:"600px", minWidth:"20vw"}}>
            <Paper className="w-100">
              <Link to="/create" className="w-100 m-auto">
                <Button onClick={()=>{setOpenMenu(false)}} className="fw-bold p-4 w-100">Add Your Business</Button>
              </Link>
            </Paper>
          </Box>
          <Box className="d-flex mb-2 mx-2">
            <Paper className="w-100">
              <ToggleButtonGroup
                color="primary"
                exclusive
                className="w-100"
              >
                <ToggleButton value="dark" className="w-50 py-4 fw-bold" >
                  Dark
                </ToggleButton>
                <ToggleButton value="light" className="w-50 py-4 fw-bold">
                  Light
                </ToggleButton>
              </ToggleButtonGroup>
            </Paper>
          </Box>
          <Box className="d-flex mb-2 mx-2">
            <Paper className="w-100">
              <Link to="/about"className="w-100 m-auto">
                <Button onClick={()=>{setOpenMenu(false)}} className="fw-bold p-4 w-100">About</Button>
              </Link>
            </Paper>
          </Box>
        </Drawer>
      </React.Fragment>
      )}
    </div>
  );
};

export default Header;
