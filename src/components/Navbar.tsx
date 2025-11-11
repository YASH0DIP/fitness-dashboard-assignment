import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm">
      <div>
        <h2 className="text-sm text-gray-500">Good Morning</h2>
        <h1 className="text-lg font-semibold">Welcome Back!</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-9 pr-3 py-2 rounded-md bg-gray-100 focus:outline-none"
          />
        </div>
        <Bell className="text-gray-600" />
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
}