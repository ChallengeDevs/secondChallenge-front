import { Models } from "@/@types";
import React from "react";

export const SituationPlay: React.FC<Models.Situation> = ({
  situation,
  teamLogo,
}) => {
  return (
    <div className="flex gap-4 items-center justify-center w-full px-6">
      {teamLogo && (
        <img
          src={teamLogo}
          width={32}
          height={32}
          alt="Logo"
          aria-aria-label="Logo"
        />
      )}
      <p className="text-primary text-sm d-0.3:text-xs">{situation}</p>
    </div>
  );
};
