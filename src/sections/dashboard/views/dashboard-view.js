import ChartSpline from "../chart-spline";
import DashboardPanel from "../dashboard-panel";

export default function DashboardView() {
  return (
    <>
      <div className="container mt-5">
        <DashboardPanel />

        <div className="grid grid-cols-2 gap-12 mt-5">
          <ChartSpline />
        </div>
      </div>
    </>
  );
}
