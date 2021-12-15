import Box from "@mui/material/Box";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Button, Drawer, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from "react-router-dom";
export default function FooterNavigation() {
  const [value, setValue] = React.useState(0);
	const [showMenu, setShowMenu] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const navigate = useNavigate();
  const gotoPath = (path) => {
    navigate(path)
  }
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
          <Paper>
          <Link to="/about"className="d-block">
            <Button onClick={()=>{setShowMenu(false)}} className="fw-bold fs-2">About</Button>
          </Link>
          </Paper>
        </Drawer>
      </React.Fragment>
		</>
  );
}
