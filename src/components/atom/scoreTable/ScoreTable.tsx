import React from "react";
import { Models } from "@/@types";

export const ScoreTable: React.FC<Models.ScoreTable> = ({ teams }) => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center px-6 gap-2">
        <span className="w-full h-[1px] bg-primary rounded-2xl"></span>
        <div className="w-full flex items-center justify-between">
          <h5 className="text-primary text-xs font-bold">Team</h5>
          <ol className="flex items-center justify-between text-primary gap-6 text-xs">
            {teams[0]?.linescores?.map((line, i: number) => (
              <li key={i}>{i + 1}</li>
            ))}
            <li>T</li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-between">
          <p id="team" className="text-primary text-xs font-bold">
            {teams[0].team.displayName}
          </p>
          <ol className="flex items-center justify-between text-primary gap-6 text-xs">
            {teams[0]?.linescores?.map((line, i: number) => (
              <li key={i}>{line.value}</li>
            ))}
            <li>{teams[0]?.score}</li>
          </ol>
        </div>
        <div className="w-full flex items-center justify-between">
          <p id="team" className="text-primary text-xs font-bold">
            {teams[1].team.displayName}
          </p>
          <ol className="flex items-center justify-between text-primary gap-6 text-xs">
            {teams[1]?.linescores?.map((line, i: number) => (
              <li key={i}>{line.value}</li>
            ))}
            <li>{teams[1]?.score}</li>
          </ol>
        </div>
        <span className="w-full h-[1px] bg-primary rounded-2xl"></span>
      </section>
    </>
  );
};
