// src/hooks/useScrollObserver.ts
import { useEffect } from "react";
import { useScrollSpy } from "../context/scrollspycontext";

export const useScrollObserver = (ids: string[]) => {
  const { setActiveId } = useScrollSpy();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.5 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, setActiveId]);
};
