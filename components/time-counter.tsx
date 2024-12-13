import { TimeSince } from "@/lib/date-utils";
import { CounterDigit } from "@/components/ui/counter-digit";

interface TimeCounterProps {
  timeSince: TimeSince;
}

export function TimeCounter({ timeSince }: TimeCounterProps) {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8">
      <CounterDigit value={timeSince.years} label="Years" />
      <CounterDigit value={timeSince.months} label="Months" />
      <CounterDigit value={timeSince.days} label="Days" />
    </div>
  );
}