import "./App.scss";
import Header from "./components/Header";
import AppRouter from "./routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <div className="container">
          <BrowserRouter>
            <Header />
            <AppRouter />
          </BrowserRouter>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
export default App;
