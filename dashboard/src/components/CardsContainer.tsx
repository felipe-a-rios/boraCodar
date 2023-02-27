import { MonthlyGoal } from "./MonthlyGoal";
import { NPS } from "./NPS";
import { Sales } from "./Sales";
import { WeekSales } from "./WeekSales";

export function CardsContainer() {
  return (
    <>
      <div className="flex justify-center gap-8">
        <NPS />
        <Sales />
        <MonthlyGoal />
      </div>
      <div className="flex justify-center gap-8">
        <WeekSales />
      </div>
    </>
  );
}
