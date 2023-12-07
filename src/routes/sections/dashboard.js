import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
<<<<<<< HEAD
import Patients from "../../pages/Patients/Patients"
import RegisterPatients from "../../pages/Patients/RegisterPatients"
import DoctorProfile from "../../pages/users/DoctorProfile"
=======
import AccountSettingPage from "../../pages/settings/account-setting/account-setting-page";
import EmailPage from "../../pages/settings/email/email-page";
import PasswordPage from "../../pages/settings/password/password-page";
import SettingsPage from "../../pages/settings/settings-page";
import UsersPage from "../../pages/users/users-page";
>>>>>>> 9c03b96eafc523dc14289bab9ba34a9005e68e92

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
<<<<<<< HEAD
        path: "users/",
        
        children: [
          {
            path: "Profile",
            element: <DoctorProfile/>,
          }]
      },
    ],
  },
  {
    path: "Patients",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <Patients/>,
      },
      {
        path: "Register",
        element:<RegisterPatients/>,
      }
=======
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

>>>>>>> 9c03b96eafc523dc14289bab9ba34a9005e68e92
    ],
  },
];
