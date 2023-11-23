import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },

      {
        path: "users",
        element: <h1>Users</h1>,
      },
      {
        path: "test",
        element: <h1>Test page</h1>,
      },
    ],
  },
];
