import NavDashboard from "../components/nav/nav";
import PropTypes from "prop-types";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavDashboard />

      <div className="mx-auto max-w-7xl px-2 mt-6">{children}</div>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
