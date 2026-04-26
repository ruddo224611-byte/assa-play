import type { AxisScores, Axis } from "@/types/quiz";

const AXES: Axis[] = ["인정", "회피", "희생", "선", "양보"];

export default function AxisBars({ scores }: { scores: AxisScores }) {
  return (
    <div className="space-y-3">
      {AXES.map((axis) => (
        <div key={axis}>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-slate-700">{axis}</span>
            <span className="font-semibold text-slate-900">{scores[axis]}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-brand-600 transition-all"
              style={{ width: `${Math.min(Math.max(scores[axis], 0), 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
