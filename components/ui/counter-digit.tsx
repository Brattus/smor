"use client";

interface CounterDigitProps {
  value: number;
  label: string;
}

export function CounterDigit({ value, label }: CounterDigitProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg">
      <span className="text-4xl font-bold text-gray-900 md:text-6xl">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="mt-2 text-sm font-medium text-gray-600 md:text-base">
        {label}
      </span>
    </div>
  );
}