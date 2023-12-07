import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";
import DashboardPage from "../../pages/dashboard";
import Patients from "../../pages/Patients/Patients"
import RegisterPatients from "../../pages/Patients/RegisterPatients"
import DoctorProfile from "../../pages/users/DoctorProfile"

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
    ],
  },
];
