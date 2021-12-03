import "./App.scss";
import Header from "./components/Header";
import AppRouter from "./routes";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
