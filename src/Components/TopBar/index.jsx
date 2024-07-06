"use client";
import { Widgets } from "@mui/icons-material";
import { IconButton } from "@mui/joy";
import React from "react";
import AvtarMenu from "../AvtarMenu";
import Logo from "../Logo";
import MenuItems from "../MenuItems";
import Sidebar from "../Sidebar";

const TopBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex justify-between items-center py-2 sm:mx-12 mx-4">
      <IconButton variant="plain" onClick={() => setOpen(true)}>
        <Widgets color="warning" variant="outlined" />
      </IconButton>
      <Sidebar open={open} setOpen={setOpen} />
      <Logo />
      <MenuItems />
      <AvtarMenu />
    </div>
  );
};

export default TopBar;
