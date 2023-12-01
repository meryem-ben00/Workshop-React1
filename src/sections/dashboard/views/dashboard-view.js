import ActivityChart from "../activity-chart";
import DashboardPanel from "../dashboard-panel";
import OverviewPatientChart from "../overview-ptient-chart";
import PatientChart from "../patient-chart";
import PatientTableData from "../patient-table-data";

export default function DashboardView() {
  return (
    <>
      <div className="container my-5">
        <DashboardPanel />

        <div className="grid grid-cols-2 gap-12 mt-5">
          <PatientChart />

          <OverviewPatientChart />

          <ActivityChart />

          <PatientTableData />
        </div>
      </div>
    </>
  );
}
