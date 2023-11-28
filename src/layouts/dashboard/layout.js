import NavDashboard from "../components/nav/nav";
import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavDashboard />

      <div className="">{children}</div>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
