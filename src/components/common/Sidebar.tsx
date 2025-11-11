import React from 'react';
import {
  LayoutDashboard,
  Blocks,
  Package,
  FileText,
  History,
  Building,
  MessageSquareQuote,
  Newspaper,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { icon: LayoutDashboard, name: 'Dashboard', path: '/admin' },
  { icon: Blocks, name: 'Category', path: '/admin/category' },
  { icon: Package, name: 'Product', path: '/admin/product' },
  { icon: History, name: 'Order History', path: '/admin/orders' },
  { icon: Newspaper, name: 'Blog', path: '/admin/blog' },
  { icon: MessageSquareQuote, name: 'Testimonials', path: '/admin/testimonials' },
  { icon: Building, name: 'Company Details', path: '/admin/company' },
  { icon: FileText, name: 'Legal Pages', path: '/admin/legal' },
];

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out lg:translate-x-0
          ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:w-20'}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo and Collapse Button */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700">
            <span className={`font-bold text-xl transition-opacity duration-200 ${!isSidebarOpen && 'opacity-0'}`}>
              Admin
            </span>
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white hidden lg:block"
            >
              {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden pt-4">
            <ul className="space-y-2 px-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-4 rounded-md p-3 transition-colors duration-200
                      ${
                        location.pathname === link.path
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }
                      ${!isSidebarOpen && 'justify-center'}
                    `}
                  >
                    <link.icon size={20} className="flex-shrink-0" />
                    <span
                      className={`transition-opacity duration-200 ${
                        !isSidebarOpen && 'opacity-0 absolute'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-gray-700 p-4">
            
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;