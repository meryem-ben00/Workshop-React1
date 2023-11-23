import { Navigate, useRoutes } from "react-router-dom";
import { paths } from "../path";
import { dashboardRoutes } from "./dashboard";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={paths.dashboard.root} replace />,
    },

    // Dasboard Routes
    ...dashboardRoutes,
  ]);
}
