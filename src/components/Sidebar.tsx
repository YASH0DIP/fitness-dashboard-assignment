import { Dumbbell, X, LayoutDashboard, Activity, List, Target, Calendar, BarChart, LogOutIcon, HelpCircleIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/" },
  { name: "Workout", icon: Activity, path: "/not-found" },
  { name: "Diet Plan", icon: List, path: "/not-found" },
  { name: "Goals", icon: Target, path: "/not-found" },
  { name: "My Schedule", icon: Calendar, path: "/not-found" },
  { name: "Progress", icon: BarChart, path: "/not-found" },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-white shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between px-6 py-4 text-orange-500 text-xl font-bold">
          <div className="flex items-center gap-2">
            <Dumbbell /> Fitness
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="mt-4 space-y-2 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 font-semibold px-6 rounded-xl py-3 hover:bg-orange-500 hover:text-gray-100 transition ${isActive ? "bg-orange-500 text-white" : "text-gray-600"
                }`
              }
            >
              <item.icon size={18} />
              <span className="text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <div className="flex gap-2 px-6 py-4 text-sm text-gray-500">
          <HelpCircleIcon/><button className="hover:text-orange-600">Help</button>
        </div>
        <div className="flex gap-2 px-6 py-4 border-t text-sm text-gray-500">
          <LogOutIcon/><button className="hover:text-orange-600">Logout</button>
        </div>
      </div>
    </aside>
  );
}