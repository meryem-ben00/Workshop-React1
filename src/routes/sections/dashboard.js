import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import Patients from "../../pages/Patients/Patients";
import RegisterPatients from "../../pages/Patients/RegisterPatients";
import ChatPage from "../../pages/chat";
import DashboardPage from "../../pages/dashboard";
import AccountSettingPage from "../../pages/settings/account-setting/account-setting-page";
import EmailPage from "../../pages/settings/email/email-page";
import PasswordPage from "../../pages/settings/password/password-page";
import SettingsPage from "../../pages/settings/settings-page";
import AdhdPage from "../../pages/test/adhd/adhd-page";
import TestPage from "../../pages/test/test-page";
import DoctorProfile from "../../pages/users/DoctorProfile";
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
        path: "users/*",

        children: [
          {
            path: "Profile",
            element: <DoctorProfile />,
          },
          { path: ":type", element: <UsersPage /> },
        ],
      },

      {
        path: "chat",
        element: <ChatPage />,
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
          },
        ],
      },

      {
        path: "Patients",
        children: [
          {
            index: true,
            element: <Patients />,
          },
          {
            path: "Register",
            element: <RegisterPatients />,
          },
        ],
      },

      {
        path: "test",
        element: <TestPage />,
        children: [
          {
            path: "ADHD",
            element: <AdhdPage />,
          },
        ],
      },

    ],
  },
];
/* 
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
      },
    ],
  },
*/