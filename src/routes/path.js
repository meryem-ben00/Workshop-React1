const ROOTS = {
  AUTH: "/auth",
  DASHOARD: "/dashboard",
};

export const paths = {
  dashboard: {
    root: ROOTS.DASHOARD,

    users: `${ROOTS.DASHOARD}/users`,

    test: `${ROOTS.DASHOARD}/test`,
  },

  auth: {
    login: `${ROOTS.AUTH}/login`,
  },
};
