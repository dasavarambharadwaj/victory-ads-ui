import Box from "@mui/material/Box";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Button, Drawer, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {change} from '../../services/state'
export default function FooterNavigation() {
  const [value, setValue] = React.useState(0);
	const [showMenu, setShowMenu] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const navigate = useNavigate();
  const gotoPath = (path) => {
    navigate(path)
  }
	const dispatch = useDispatch();
  return (
		<> { isMobile &&
			(<Paper
				sx={{ 
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
				}}
				elevation={3}
			>
				<Box>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}} 
					>
						<BottomNavigationAction label="Home" icon={<HomeIcon onClick={()=> gotoPath("/")} />} />
						<BottomNavigationAction label="Add Business" icon={<AddCardIcon onClick={()=> gotoPath("/create")} />} />
						<BottomNavigationAction label="Menu" icon={<MenuIcon onClick={()=> setShowMenu(true)} />} />
					</BottomNavigation>
				</Box>
			</Paper>)}
			<React.Fragment>
        <Drawer
          open={showMenu}
          anchor="right"
          onClose={()=>{setShowMenu(false)}}
        >
          <Box className="d-flex mb-2 mx-2" style={{maxWidth:"600px", minWidth:"40vw"}}>
            <Paper className="w-100">
              <ToggleButtonGroup
                color="primary"
                exclusive
                onChange={(event)=>{
                  dispatch(change({key:"theme",value:event.target.value}))
                }}
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
          <Box className="d-flex mb-2 mx-2" style={{maxWidth:"600px", minWidth:"40vw"}}>
            <Paper className="w-100">
              <Link to="/about"className="w-100 m-auto">
                <Button onClick={()=>{setShowMenu(false)}} className="fw-bold p-4 w-100">About</Button>
              </Link>
            </Paper>
          </Box>
        </Drawer>
      </React.Fragment>
		</>
  );
}
