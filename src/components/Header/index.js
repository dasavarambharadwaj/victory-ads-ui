import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="d-flex pt-3 justify-content-between">
      <Link className="fs-2" to="/">
        {location.pathname !== "/" && (
          <span className="fw-bold">VICTORY ADS</span>
        )}
      </Link>
      <Link className="fs-1" to="/create">
        {location.pathname !== "/create" && (
          <span className="fw-bold">ADD BUSINESS</span>
        )}
      </Link>
    </div>
  );
};

export default Header;
