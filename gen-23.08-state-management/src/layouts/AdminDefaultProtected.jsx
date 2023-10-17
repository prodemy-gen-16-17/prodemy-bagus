import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function AdminDefaultProtected({ isAuthorized }) {
  return isAuthorized ? <Outlet /> : <Navigate to={"/admin/login"} />;
}

AdminDefaultProtected.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default AdminDefaultProtected;
