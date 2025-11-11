interface GoalCardProps {
  title: string;
  date: string;
  tag: string;
}

export default function GoalCard({ title, date, tag }: GoalCardProps) {
  return (
    <div className="flex justify-between items-center shadow-xl bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:shadow-sm transition text-sm sm:text-base">
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}