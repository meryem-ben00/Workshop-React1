import { Navigate, useRoutes } from "react-router-dom";
import { paths } from "../path";
import { dashboardRoutes } from "./dashboard";
import { authRoutes } from "./auth";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={paths.dashboard.root} replace />,
    },

    // Dasboard Routes
    ...dashboardRoutes,

    ...authRoutes,

    { path: "*", element: <h1>Not found 404</h1> },
  ]);
}
