import { Models } from "@/@types";
import React from "react";

export const ScoreTable: React.FC<Models.ScoreTable> = ({ teams }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 gap-1">
      <span className="w-full h-[1px] bg-primary rounded-2xl"></span>
      <div className="w-full flex items-center justify-between">
        <h5 className="text-primary text-sm font-bold d-0.1:text-xs d-0.2:text-[.65rem]">
          Team
        </h5>
        <ol className="flex w-60 d-0.2:w-36 items-center justify-end text-primary gap-6 d-0.2:gap-2 text-xs d-0.2:text-[.65rem]">
          {teams[0]?.linescores?.map((line, i: number) => (
            <li
              className="w-5 text-center font-bold text-sm d-0.1:text-xs d-0.2:text-[.65rem]"
              key={i}
            >
              {i + 1}
            </li>
          ))}
          <li className="w-5 text-center font-bold text-sm d-0.1:text-xs d-0.2:text-[.65rem]">
            T
          </li>
        </ol>
      </div>
      <div className="w-full flex items-center justify-between">
        <p
          id="team"
          className="text-primary text-sm font-bold d-0.1:text-xs d-0.2:text-[.65rem]"
        >
          {teams[0].team.displayName}
        </p>
        <ol className="flex w-60 d-0.2:w-36 items-center justify-end text-primary gap-6 d-0.2:gap-2 text-sm d-0.1:text-xs d-0.2:text-[.65rem]">
          {teams[0]?.linescores?.map((line, i: number) => (
            <li className="w-5 text-center" key={i}>
              {line.value}
            </li>
          ))}
          <li className="w-5 text-center">{teams[0]?.score}</li>
        </ol>
      </div>
      <div className="w-full flex items-center justify-between">
        <p
          id="team"
          className="text-primary text-sm font-bold d-0.1:text-xs d-0.2:text-[.65rem]"
        >
          {teams[1].team.displayName}
        </p>
        <ol className="flex w-60 d-0.2:w-36 items-center justify-end text-primary gap-6 d-0.2:gap-2 text-sm d-0.1:text-xs d-0.2:text-[.65rem]">
          {teams[1]?.linescores?.map((line, i: number) => (
            <li className="w-5 text-center" key={i}>
              {line.value}
            </li>
          ))}
          <li className="w-5 text-center">{teams[1]?.score}</li>
        </ol>
      </div>
      <span className="w-full h-[1px] bg-primary rounded-2xl"></span>
    </section>
  );
};
