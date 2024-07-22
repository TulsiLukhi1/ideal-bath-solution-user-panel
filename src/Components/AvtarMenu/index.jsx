"use client";
import { Logout } from "@mui/icons-material";
import { Avatar } from "@mui/joy";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import ProfileDrawer from "../ProfileDrawer";

const AvtarMenu = () => {
  const [open, setOpen] = React.useState(false);
  const screenWidth = useWindowWidth();
  const avtarSize =
    screenWidth >= 768 ? "lg" : screenWidth >= 568 ? "md" : "sm";

  return (
    <div className="relative text-left">
      <div className="flex gap-x-2 items-center cursor-pointer">
        <div onClick={() => setOpen(true)}>
          <Avatar
            className="shadow hover:shadow-md"
            variant="solid"
            size={avtarSize}
          />
        </div>
        <Logout color="action" className="hover:text-orange-600 log-out-btn" />
        <ProfileDrawer open={open} setOpen={setOpen} profile={null} />
      </div>
    </div>
  );
};

export default AvtarMenu;
