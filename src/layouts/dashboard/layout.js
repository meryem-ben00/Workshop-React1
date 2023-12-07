import PropTypes from "prop-types";
import NavDashboard from "../components/nav/nav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavDashboard />

<<<<<<< HEAD
      <div className="">{children}</div>
=======
      {/* Change Here remove mt-6 */}
      <div className="mx-auto max-w-7xl px-2">{children}</div>
>>>>>>> 9c03b96eafc523dc14289bab9ba34a9005e68e92
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
