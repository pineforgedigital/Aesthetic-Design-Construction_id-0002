"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    // Scroll to top or to hash on route change
    if (lenisRef.current) {
      if (window.location.hash) {
        // Give it a tiny delay to ensure DOM is ready and layout is rendered
        setTimeout(() => {
          const target = document.querySelector(window.location.hash);
          if (target) {
            lenisRef.current?.scrollTo(target, { immediate: false, offset: -100 });
          }
        }, 100);
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    } else {
      if (window.location.hash) {
        setTimeout(() => {
          const target = document.querySelector(window.location.hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
