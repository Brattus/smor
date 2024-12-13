"use client";

import Image from "next/image";
import { useState } from "react";
import { Incident } from "@/types/incident";
import { ImageModal } from "./image-modal";

interface IncidentCardProps {
  incident: Incident;
}

export function IncidentCard({ incident }: IncidentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={incident.imageUrl}
            alt={`Incident from ${incident.date}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <time className="text-lg font-medium text-white">
            {new Date(incident.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={incident.imageUrl}
        date={incident.date}
      />
    </>
  );
}