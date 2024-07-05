import { Logout } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Link from "next/link";

const AvtarMenu = () => {
  return (
    <div className="relative inline-block text-left">
      <div className="flex gap-x-2 items-center cursor-pointer">
        <Link href="/profile"><Avatar className="shadow hover:shadow-md" /></Link>
        <Logout color="action" className="hover:text-orange-600" />
      </div>
    </div>
  );
};

export default AvtarMenu;
