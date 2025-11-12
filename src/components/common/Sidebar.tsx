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
  { icon: LayoutDashboard, name: 'Dashboard', path: '/' },
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
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out lg:translate-x-0
          ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:w-20 lg:translate-x-0'}
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo & Toggle */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <span
              className={`font-bold text-2xl text-black transition-all duration-300 ${
                isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              }`}
            >
              Admin Panel
            </span>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors hidden lg:block"
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? (
                <ChevronLeft size={22} className="text-gray-700" />
              ) : (
                <ChevronRight size={22} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`group flex items-center rounded-lg px-3 py-3 transition-all duration-200
                        ${isActive 
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-200' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                        }
                        ${!isSidebarOpen && 'justify-center'}
                      `}
                    >
                      <Icon
                        size={22}
                        className={`flex-shrink-0 transition-colors ${
                          isActive ? 'text-blue-700' : 'text-gray-600 group-hover:text-black'
                        }`}
                      />
                      <span
                        className={`ml-4 font-medium transition-all duration-300 ${
                          isSidebarOpen 
                            ? 'opacity-100' 
                            : 'opacity-0 absolute left-20 bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap z-50'
                        }`}
                        // Tooltip when collapsed
                        {...(!isSidebarOpen && {
                          'data-tooltip': link.name,
                        })}
                      >
                        {isSidebarOpen ? link.name : null}
                      </span>

                      {/* Tooltip for collapsed state */}
                      {!isSidebarOpen && (
                        <div className="absolute left-20 ml-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                            {link.name}
                          </div>
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer (optional) */}
          <div className="border-t border-gray-200 p-4">
            <div className={`text-center text-xs text-gray-500 ${!isSidebarOpen && 'hidden'}`}>
              © 2025 Admin Panel
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;