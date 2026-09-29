"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  type?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = "",
  type = "up",
  delay = 0,
  threshold = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cls = {
      up: "reveal",
      left: "reveal-left",
      right: "reveal-right",
      scale: "reveal-scale",
    }[type];

    el.classList.add(cls);
    if (delay > 0) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [type, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
