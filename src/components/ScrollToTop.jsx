import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi URL (pathname) badlega, window upar scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}