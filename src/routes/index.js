import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddBusiness from "../pages/AddBusiness";
import ShowDetails from "../components/ShowDetails";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<AddBusiness />} />
      <Route path="/details/:id" element={<ShowDetails />} />
    </Routes>
  );
};
export default AppRouter;
