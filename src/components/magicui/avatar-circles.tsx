"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  displayFirst?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  displayFirst = 4,
  avatarUrls,
}: AvatarCirclesProps) => {
  const displayedAvatars = avatarUrls.slice(0, Math.max(displayFirst, 1));
  const remainingPeople = numPeople ? numPeople - displayedAvatars.length : 0;

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {displayedAvatars.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {remainingPeople > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{remainingPeople}
        </a>
      )}
    </div>
  );
};

export default AvatarCircles;
