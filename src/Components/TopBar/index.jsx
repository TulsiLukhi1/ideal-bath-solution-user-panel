"use client";
import Logo from "../Logo";
import MenuItems from "../MenuItems";
import AvtarMenu from "../ProfileDropdown";

const TopBar = () => {
  return (
    <div className='flex justify-between items-center mx-12 py-2'>
      <Logo />
      <MenuItems />
      <AvtarMenu />
    </div>
  );
};

export default TopBar;
