"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setLoadingProgress(35);
    const t1 = setTimeout(() => setLoadingProgress(85), 100);
    const t2 = setTimeout(() => setLoadingProgress(100), 260);
    const t3 = setTimeout(() => setLoadingProgress(0), 450);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <>
      {loadingProgress > 0 && (
        <div className="fixed top-0 inset-x-0 z-50 h-1 bg-transparent pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#2454BE] via-amber-400 to-[#2454BE] transition-all duration-200 shadow-[0_0_8px_rgba(36,84,190,0.8)]"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(2px)" }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}