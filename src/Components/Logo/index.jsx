"use client";
import logo from "@/assets/images/logo.jpeg";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

const Logo = () => {
  const screenWidth = useWindowWidth();
  const logoWidth = screenWidth >= 768 ? 120 : screenWidth >= 568 ? 100 : 70;
  return (
    <div className="rounded-xl image-container">
      <Image
        src={logo}
        width={logoWidth}
        className="border rounded responsive-logo"
      />
    </div>
  );
};

export default Logo;
