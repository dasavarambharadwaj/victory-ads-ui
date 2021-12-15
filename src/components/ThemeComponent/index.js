import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
const ThemeComponent = props => {
    const themeValue = useSelector(state=>state.value.theme)
  const AppStyles = createTheme({
    palette: {
      mode: themeValue,
    },
  });
  return (
    <>
    <ThemeProvider theme={AppStyles}>
      {props.children}
    </ThemeProvider>
    </>
  )
}
export default ThemeComponent
