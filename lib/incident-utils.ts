import { Incident } from "@/types/incident";

export function sortIncidentsByDateDesc(incidents: Incident[]): Incident[] {
  return [...incidents].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestIncident(incidents: Incident[]): Incident {
  return sortIncidentsByDateDesc(incidents)[0];
}