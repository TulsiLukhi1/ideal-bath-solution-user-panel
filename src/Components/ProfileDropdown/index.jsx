import { PROFILE_DROPDOWN_MENU } from '@/utils/constants';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';


const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Avatar />
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            {
              PROFILE_DROPDOWN_MENU.map((item) =>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-base hover:bg-gray-100"
                >
                  {item.label}
                </Link>)
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
