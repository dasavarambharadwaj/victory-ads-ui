import "./App.scss";
import Header from "./components/Header";
import AppRouter from "./routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AppStyles } from "./styles/globalStyles"
import { Container, Paper } from "@mui/material";
import FooterNavigation from "./components/footerNavigator";

function App() {
  
  return (
    <ThemeProvider theme={AppStyles}>
      <Paper>
        <BrowserRouter>
          <Container>
            <Header />
            <AppRouter />
          </Container>
          <FooterNavigation />
        </BrowserRouter>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
