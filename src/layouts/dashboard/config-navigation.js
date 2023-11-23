import { useMemo } from "react";
import { paths } from "../../routes/path";

export const useNavData = () => {
  const data = useMemo(() => [
    {
      items: [
        {
          title: "Dashboard",
          path: paths.dashboard.root,
        },

        {
          title: "Users",
          path: paths.dashboard.users,
        },
        
        {
          title: "Test",
          path: paths.dashboard.test,
        },
      ],
    },
  ]);

  return data;
};