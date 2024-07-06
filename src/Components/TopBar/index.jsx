"use client";
import AvtarMenu from "../AvtarMenu";
import Hamburger from "../Hamburger";
import Logo from "../Logo";
import MenuItems from "../MenuItems";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center py-2 sm:mx-12 mx-4">
      <Hamburger />
      <Logo />
      <MenuItems />
      <AvtarMenu />
    </div>
  );
};

export default TopBar;
