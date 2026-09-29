"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = "none";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, [pathname]);

  return (
    <div ref={ref} style={{ willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}
