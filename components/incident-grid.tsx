import { Incident } from "@/types/incident";
import { IncidentCard } from "./incident-card";
import { sortIncidentsByDateDesc } from "@/lib/incident-utils";

interface IncidentGridProps {
  incidents: Incident[];
}

export function IncidentGrid({ incidents }: IncidentGridProps) {
  const sortedIncidents = sortIncidentsByDateDesc(incidents);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {sortedIncidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
}