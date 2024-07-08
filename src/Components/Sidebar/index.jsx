"use client";

import { TOPBAR_MENU } from "@/utils/constants";
import { Logout } from "@mui/icons-material";
import { Avatar, DialogContent } from "@mui/joy";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export default function Sidebar({ open = false, setOpen = () => {} }) {
  const pathname = usePathname();
  const isActive = (curr) => pathname === curr;

  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              mt: 1,
              mr: 2,
            }}
          >
            <ModalClose id="close-icon" sx={{ position: "initial" }} />
          </Box>

          <div>
            <ul className="flex flex-col justify-between">
              {TOPBAR_MENU.map((menuItem) => {
                return (
                  <Link
                    key={menuItem.href}
                    href={menuItem.href}
                    className={`text-sm uppercase px-5 py-2 flex justify-between items-center gap-x-3 border-b ${
                      isActive(menuItem.href) ? "bg-[#c78022] text-white" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <p className="text-[13px] font-medium">{menuItem.label}</p>
                    <p
                      className={`${
                        isActive(menuItem.href) ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {menuItem.icon}
                    </p>
                  </Link>
                );
              })}
              <li className="text-sm uppercase px-5 py-2 flex justify-between items-center gap-x-3 border-b">
                <p className="text-[13px] font-medium">Logout</p>
                <p className="text-orange-500">{<Logout color="error" />}</p>
              </li>
            </ul>
          </div>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 1.5,
            pb: 2,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Avatar size="lg" />
          <div>
            <Typography level="title-md">Username</Typography>
            <Typography level="body-sm">joined 20 Jun 2023</Typography>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
