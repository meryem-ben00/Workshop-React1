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

    profile: `${ROOTS.DASHOARD}/profile`,

    patients: `${ROOTS.DASHOARD}/patients`
  },

  auth: {
    login: `${ROOTS.AUTH}/login`,
  },
};
