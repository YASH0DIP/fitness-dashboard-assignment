import { Dumbbell, LayoutDashboard, Activity, List, Target, Calendar, BarChart } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/" },
  { name: "Workout", icon: Activity, path: "/workout" },
  { name: "Diet Plan", icon: List, path: "/diet-plan" },
  { name: "Goals", icon: Target, path: "/goals" },
  { name: "My Schedule", icon: Calendar, path: "/schedule" },
  { name: "Progress", icon: BarChart, path: "/progress" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-6 py-4 text-orange-500 text-xl font-bold">
          <Dumbbell /> Fitness
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 hover:bg-orange-50 transition ${
                  isActive ? "bg-orange-100 text-orange-600" : "text-gray-700"
                }`
              }
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-6 py-4 border-t text-sm text-gray-500">
        <button className="hover:text-orange-600">Logout</button>
      </div>
    </aside>
  );
}