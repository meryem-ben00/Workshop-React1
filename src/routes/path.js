const ROOTS = {
  AUTH: "/auth",
  DASHOARD: "/dashboard",
};

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
  },

  dashboard: {
    root: ROOTS.DASHOARD,
    users: `${ROOTS.DASHOARD}/users`,

    test: `${ROOTS.DASHOARD}/test`,
  },
};
