"use client";

import SplashScreen from "@/Components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainLayout from "../MainLayout";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <div className="layout-wrapper">
      {isLoading && isHome ? (
        <div className="splash-screen-div">
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        </div>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </div>
  );
};

export default LayoutWrapper;
