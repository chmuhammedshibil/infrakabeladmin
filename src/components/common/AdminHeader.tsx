import React from 'react';
import { Menu, Search, Bell, UserCircle } from 'lucide-react';

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700 lg:hidden"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu size={24} />
      </button>

      {/* Spacer for desktop */}
      <div className="hidden lg:block"></div>

      {/* Right-side items */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-gray-500">
          <Search size={20} />
        </button>
        <button className="text-gray-400 hover:text-gray-500">
          <Bell size={20} />
        </button>
        <button className="text-gray-400 hover:text-gray-500">
          <UserCircle size={24} />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;