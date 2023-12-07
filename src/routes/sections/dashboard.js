import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
import UsersPage from "../../pages/users/users-page";
import ChatPage from "../../pages/chat";

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
        path: "users/:type",
        element: <UsersPage />,
      },

      {
        path: "chat",
        element: <ChatPage />,
      },
    ],
  },
];
