import "./App.scss";
import Header from "./components/Header";
import AppRouter from "./routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ThemeComponent from "./components/ThemeComponent";
import { Container, Paper } from "@mui/material";
import FooterNavigation from "./components/footerNavigator";

function App() {
  
  return (
    <ThemeComponent>
      <Paper square={true}>
        <BrowserRouter>
          <Container>
            <Header />
            <AppRouter />
          </Container>
          <FooterNavigation />
        </BrowserRouter>
      </Paper>
    </ThemeComponent>
  );
}
export default App;
