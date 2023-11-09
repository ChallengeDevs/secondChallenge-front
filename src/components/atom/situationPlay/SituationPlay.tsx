import React from "react";
import { Models } from "@/@types";

export const SituationPlay: React.FC<Models.Situation> = ({
  situation,
  teamLogo,
}) => {
  return (
    <>
      {teamLogo && (
        <img
          src={teamLogo}
          width={56}
          height={56}
          alt="Logo"
          aria-aria-label="Logo"
        />
      )}
      <p>{situation}</p>
    </>
  );
};
