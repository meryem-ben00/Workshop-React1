const ROOTS = {
  AUTH: "/auth",
  DASHOARD: "/dashboard",
};

export const paths = {
  dashboard: {
    root: ROOTS.DASHOARD,

    users: `${ROOTS.DASHOARD}/users`,
    chat: `${ROOTS.DASHOARD}/chat`,

    test: `${ROOTS.DASHOARD}/test`,
  },

  auth: {
    login: `${ROOTS.AUTH}/login`,
  },
};
