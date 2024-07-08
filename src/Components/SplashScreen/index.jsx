"use client";
import { useWindowWidth } from "@react-hook/window-size";
import anime from "animejs";
import { useEffect, useState } from "react";
import Logo from "../Logo";

const SplashScreen = ({ finishLoading }) => {
  const [ismounted, setIsmounted] = useState(false);
  const screenWidth = useWindowWidth();
  const logoWidth = screenWidth >= 768 ? 500 : screenWidth >= 568 ? 200 : 170;

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsmounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex h-screen items-center justify-center"
      ismounted={`${ismounted}`}
    >
      <Logo fixedWidth={logoWidth} className="logo-circulate" />
      {/* <Image id="logo" src="/light-logo.png" alt="" width={60} height={60} /> */}
    </div>
  );
};

export default SplashScreen;
