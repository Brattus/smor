import { TimeCounter } from "@/components/time-counter";
import { IncidentGrid } from "@/components/incident-grid";
import { calculateTimeSince } from "@/lib/date-utils";
import { getLatestIncident } from "@/lib/incident-utils";
import incidentsData from "@/data/incidents.json";

export default function Home() {
  const latestIncident = getLatestIncident(incidentsData.incidents);
  const timeSince = calculateTimeSince(new Date(latestIncident.date));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Tid sida sist smørpikk
          </h1>
          <div className="mx-auto max-w-3xl">
            <TimeCounter timeSince={timeSince} />
          </div>
        </div>

        <section>
          <h2 className="mb-8 text-2xl font-semibold text-gray-900">
            Historiske smørpikka
          </h2>
          <IncidentGrid incidents={incidentsData.incidents} />
        </section>
      </div>
    </main>
  );
}