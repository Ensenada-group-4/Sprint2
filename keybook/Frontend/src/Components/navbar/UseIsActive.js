import { useLocation } from "react-router-dom";

export function useIsActive() {
  const location = useLocation();

  function isActive(pathname) {
    return location.pathname === pathname;
  }

  return { isActive };
}
