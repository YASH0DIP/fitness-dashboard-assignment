import type { ReactNode } from "react";
import clsx from "classnames";

interface CardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
}

export default function Card({ title, value, icon, color }: CardProps) {
  return (
    <div className={clsx("rounded-xl p-4 text-white flex-1", color)}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm opacity-80">{title}</h3>
          <p className="text-xl font-semibold mt-1">{value}</p>
        </div>
        <div className="opacity-70">{icon}</div>
      </div>
    </div>
  );
}