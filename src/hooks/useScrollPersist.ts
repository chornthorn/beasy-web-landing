import { useEffect } from "react";

export const useScrollPersist = () => {
  useEffect(() => {
    // Restore scroll position on page load
    const savedScrollPosition = localStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      localStorage.removeItem("scrollPosition");
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};
