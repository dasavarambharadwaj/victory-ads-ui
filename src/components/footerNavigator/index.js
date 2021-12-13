import Box from "@mui/material/Box";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AddCardIcon from '@mui/icons-material/AddCard';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function FooterNavigation() {
  const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
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
						<BottomNavigationAction label="Home" icon={<HomeIcon />} />
						<BottomNavigationAction label="Add Business" icon={<AddCardIcon />} />
						<BottomNavigationAction label="Menu" icon={<MenuIcon />} />
					</BottomNavigation>
				</Box>
			</Paper>)}
		</>
  );
}
