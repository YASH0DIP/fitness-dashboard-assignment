interface ScheduleCardProps {
  day: string;
  title: string;
  time: string;
  tag: string;
}

export default function ScheduleCard({ day, title, time, tag }: ScheduleCardProps) {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:shadow-sm transition text-sm sm:text-base">
      <div>
        <h4 className="font-semibold text-gray-700">{day}</h4>
        <p className="text-sm text-gray-500">
          {title} <span className="text-gray-400">• {time}</span>
        </p>
      </div>
      <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}