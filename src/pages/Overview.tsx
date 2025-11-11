import Card from "../components/Card";
import ScheduleCard from "../components/ScheduleCard";
import GoalCard from "../components/GoalCard";
import { Activity, Flame, Footprints } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", workout: 80, calories: 50, steps: 40 },
  { name: "Tue", workout: 50, calories: 60, steps: 30 },
  { name: "Wed", workout: 90, calories: 70, steps: 60 },
  { name: "Thu", workout: 60, calories: 40, steps: 70 },
  { name: "Fri", workout: 70, calories: 50, steps: 50 },
  { name: "Sat", workout: 50, calories: 60, steps: 40 },
  { name: "Sun", workout: 60, calories: 70, steps: 80 },
];

export default function Overview() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Column */}
      <div className="col-span-8 space-y-6">
        {/* Banner */}
        <div
  className="relative bg-linear-to-tr from-orange-500 to-orange-300 text-white rounded-xl p-6 overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 opacity-10 bg-right"
    style={{ backgroundImage: "url('/fitness.png')" }}
  />

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col justify-center h-full">
    <h2 className="text-2xl font-semibold">Track Your Daily Activities</h2>
    <p className="text-sm mt-2 opacity-90 max-w-md">
      Stay consistent and track your fitness journey easily!
    </p>
  </div>
</div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card title="Workout" value="4 hrs" icon={<Activity />} color="bg-cyan-500" />
          <Card title="Calories" value="1800 kcal" icon={<Flame />} color="bg-orange-500" />
          <Card title="Steps" value="2200 steps" icon={<Footprints />} color="bg-purple-500" />
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Goal Progress</h2>
            <select className="border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-600">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="workout" fill="#06b6d4" />
              <Bar dataKey="calories" fill="#f97316" />
              <Bar dataKey="steps" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Food Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Food</th>
                <th className="px-6 py-3">Meal</th>
                <th className="px-6 py-3">Calories</th>
                <th className="px-6 py-3">Priorities</th>
                <th className="px-6 py-3">Carbs</th>
              </tr>
            </thead>
            <tbody>
              {[
                { food: "Burrito", meal: "Pizza Burger", cal: "200 kcal", pri: "01:00 AM", carb: "20 gm" },
                { food: "Burger", meal: "Pizza Burger", cal: "180 kcal", pri: "01:00 AM", carb: "18 gm" },
              ].map((item) => (
                <tr key={item.food} className="border-b last:border-none">
                  <td className="px-6 py-3">{item.food}</td>
                  <td className="px-6 py-3">{item.meal}</td>
                  <td className="px-6 py-3">{item.cal}</td>
                  <td className="px-6 py-3">{item.pri}</td>
                  <td className="px-6 py-3">{item.carb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-4 space-y-6">
        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">My Schedule</h3>
            <button className="text-orange-500 text-sm">View All</button>
          </div>
          <div className="space-y-3">
            <ScheduleCard day="Monday" title="Stretch" time="08:00" tag="20 Sets" />
            <ScheduleCard day="Tuesday" title="Back Stretch" time="08:00" tag="10 Rounds" />
            <ScheduleCard day="Wednesday" title="Yoga" time="08:00" tag="20 Min" />
          </div>
        </div>

        {/* Goals */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Goals</h3>
            <button className="text-orange-500 text-sm">View All</button>
          </div>
          <div className="space-y-3">
            <GoalCard title="ABS & Stretch" date="Saturday, April 14 | 08:00 AM" tag="30 Min/Day" />
            <GoalCard title="Push Up" date="Sunday, April 15 | 08:00 AM" tag="50 Sets/Day" />
          </div>
        </div>

        {/* Premium Upgrade */}
        <div className="bg-linear-to-r from-purple-500 to-orange-400 text-white rounded-xl p-5 flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">50% off on Premium Membership</h4>
            <p className="text-sm mt-1 opacity-90">Unlock exclusive workouts and plans.</p>
            <button className="mt-3 bg-white text-purple-700 font-semibold text-sm px-4 py-2 rounded-lg">
              Upgrade
            </button>
          </div>
          <img src="/premium.png" alt="Upgrade" className="w-20" />
        </div>
      </div>
    </div>
  );
}