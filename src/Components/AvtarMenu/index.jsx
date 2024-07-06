"use client";
import { Logout } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import ProfileDrawer from "../ProfileDrawer";

const AvtarMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      <div className="flex gap-x-2 items-center cursor-pointer">
        <div onClick={() => setOpen(true)}>
          <Avatar className="shadow hover:shadow-md" />
        </div>
        <Logout color="action" className="hover:text-orange-600" />
        <ProfileDrawer open={open} setOpen={setOpen} profile={null} />
      </div>
    </div>
  );
};

export default AvtarMenu;
