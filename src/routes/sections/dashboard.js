import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
import AccountSettingPage from "../../pages/settings/account-setting/account-setting-page";
import EmailPage from "../../pages/settings/email/email-page";
import PasswordPage from "../../pages/settings/password/password-page";
import SettingsPage from "../../pages/settings/settings-page";
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
        path: "users/:type",
        element: <UsersPage />,
      },

      {
        path: "settings",
        element: <SettingsPage />,
        children: [
          {
            path: "account-setting",
            element: <AccountSettingPage />,
          },
          {
            path: "password",
            element: <PasswordPage />,
          },
          {
            path: "email",
            element: <EmailPage />,
          }
        ]
      },

    ],
  },
];
