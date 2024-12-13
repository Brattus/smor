import Image from "next/image";
import { Incident } from "@/types/incident";

interface IncidentCardProps {
  incident: Incident;
}

export function IncidentCard({ incident }: IncidentCardProps) {
  const severityColors = {
    low: "bg-yellow-100 text-yellow-800",
    medium: "bg-orange-100 text-orange-800",
    high: "bg-red-100 text-red-800"
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={incident.imageUrl}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityColors[incident.severity]}`}>
            {incident.severity}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{incident.description}</p>
        <time className="text-sm text-gray-500">
          {new Date(incident.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </time>
      </div>
    </div>
  );
}
