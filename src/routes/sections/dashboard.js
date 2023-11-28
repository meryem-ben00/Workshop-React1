import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
import DoctorProfile from "../../pages/users/DoctorProfile";

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
        element: <DoctorProfile/>,
      },
      {
        path: "test",
        element: <h1>Test page</h1>,
      },
    ],
  },
];
