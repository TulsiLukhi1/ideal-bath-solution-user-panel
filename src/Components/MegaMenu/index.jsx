"use client";

const MegaMenu = ({
  isOpen = false,
  options = [{ name: "", href: "" }],
  children,
}) => {
  return (
    <div
      className={`w-[50rem] mt-2 bg-white border rounded-2xl border-gray-200 shadow-lg transition-transform duration-500 ease-in-out transform absolute right-0 top-10 ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="grid grid-cols-3 gap-4 p-4">{children}</div>
    </div>
  );
};

export default MegaMenu;
