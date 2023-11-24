import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
import AdministrationsPage from "../../pages/users/administration-users/administrations-page";
import DoctorsPage from "../../pages/users/doctors-users/doctors-page";
import UsersPage from "../../pages/users/users-page";

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
        element: <UsersPage />,
        children: [
          {
            path: "doctors",
            element: <DoctorsPage />
          },
          {
            path: "administrations",
            element: <AdministrationsPage />
          }
        ]
      },

      {
        path: "test",
        element: <h1>Test page</h1>,
      },
    ],
  },
];
