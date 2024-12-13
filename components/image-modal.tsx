"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  date: string;
}

export function ImageModal({ isOpen, onClose, imageUrl, date }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={`Incident from ${date}`}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <time className="text-lg font-medium text-gray-700">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </DialogContent>
    </Dialog>
  );
}