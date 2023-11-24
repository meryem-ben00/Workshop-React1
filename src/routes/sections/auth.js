import { Outlet } from "react-router-dom";
import LoginPage from "../../pages/auth/login";

export const authRoutes = [
  {
    path: "auth",
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];
