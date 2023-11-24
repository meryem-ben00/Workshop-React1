import PropTypes from "prop-types";
import NavDashboard from "../components/nav/nav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavDashboard />

      {/* Change Here remove mt-6 */}
      <div className="mx-auto max-w-7xl px-2">{children}</div>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
