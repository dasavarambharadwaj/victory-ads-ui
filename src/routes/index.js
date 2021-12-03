import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Home from '../pages/Home'
import AddBusiness from '../pages/AddBusiness'
const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/create" element={<AddBusiness />} />
    </Routes>
  );
}
export default AppRouter