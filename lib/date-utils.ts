export interface TimeSince {
  years: number;
  months: number;
  days: number;
}

export function calculateTimeSince(date: Date): TimeSince {
  const now = new Date();
  const incident = new Date(date);
  
  let years = now.getFullYear() - incident.getFullYear();
  let months = now.getMonth() - incident.getMonth();
  let days = now.getDate() - incident.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, incident.getDate());
    days += Math.floor((now.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24));
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}