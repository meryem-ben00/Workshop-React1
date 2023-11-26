import { Helmet } from "react-helmet-async";
import DashboardView from "../../sections/dashboard/views/dashboard-view";

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <DashboardView />
    </>
  );
}
