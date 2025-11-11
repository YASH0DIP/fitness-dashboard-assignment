import { Search, Bell, Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-white px-4 sm:px-6 py-3 shadow-sm sticky top-0 z-30">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-gray-800"
        >
          <Menu size={22} />
        </button>
        <div>
          <h2 className="text-xs sm:text-sm text-gray-500">Good Morning</h2>
          <h1 className="text-base sm:text-lg font-semibold">Welcome Back!</h1>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-9 pr-3 py-2 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>
        <Bell className="text-gray-600 cursor-pointer" />
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
}