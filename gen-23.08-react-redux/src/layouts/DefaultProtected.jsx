import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function DefaultProtected({ isAuthorized }) {
  return isAuthorized ? <Outlet /> : <Navigate to={"/login"} />;
}

DefaultProtected.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default DefaultProtected;
