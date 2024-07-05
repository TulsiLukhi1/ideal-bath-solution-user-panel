import { TOPBAR_MENU } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const path = usePathname();

  return (
    <div className="p-4">
      <div className="flex gap-x-6 relative">
        {TOPBAR_MENU.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.href}
              menuItem={menuItem}
              isActive={path === menuItem.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;

function MenuItem({
  menuItem = { label: "", href: "", icon: <></> },
  isActive = false,
}) {
  return (
    <div className="relative group cursor-pointer">
      <Link href={menuItem.href} className="text-black font-medium text-lg">
        <p className="flex justify-between items-center gap-x-1 mb-1">
          <span className={isActive ? "text-orange-500" : "text-gray-500"}>
            {menuItem.icon}
          </span>{" "}
          {menuItem.label}
        </p>
        <span className="first-letter:text-orange-600"></span>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        {isActive ? (
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500"></span>
        ) : null}
      </Link>
    </div>
  );
}
