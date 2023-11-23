import { matchPath, useLocation } from "react-router-dom";

export const useActiveLink = (path) => {
  const { pathname } = useLocation();

  const normalActive = path
    ? !!matchPath({ path, end: true }, pathname)
    : false;

  return normalActive;
};
