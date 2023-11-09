"use client";
import { Models } from "@/@types";
import { handlerScoreRequest, handlerTeamRequest } from "@/api/scoreService";
import { CardMainHome } from "@/components/molecule/cardMainHome/CardMainHome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export const MainHome = () => {
  const [scoreboard, setScoreboard] = useState<Models.Events>();
  const [teams, setTeams] = useState<Models.Teams[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;
  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  let totalPages = 0;

  if (scoreboard) {
    totalPages =
      Math.ceil(scoreboard.events.length / eventsPerPage) === 0
        ? 1
        : Math.ceil(scoreboard.events.length / eventsPerPage);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await handlerScoreRequest();
      const dataTeams = await handlerTeamRequest();
      setTimeout(() => {
        setScoreboard(data);
        setTeams(dataTeams.sports[0].leagues[0].team);
      }, 2000);
      setTimeout(fetchData, 10 * 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      {scoreboard ? (
        <main className="flex h-[86.5vh] flex-wrap items-start justify-center px-20 gap-4 bg-gradient-to-t from-gradient2 to-gradient1">
          {scoreboard?.events
            .slice(firstEventIndex, lastEventIndex)
            .map((event, key: number) => (
              <CardMainHome key={key} event={event} teams={teams} />
            ))}
          <div className="w-full flex items-center justify-center gap-28 p-2">
            {currentPage > 1 ? (
              <Image
                src="/imgs/left.png"
                width={24}
                height={24}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="cursor-pointer hover:opacity-70 duration-300"
                alt="Pagination left button"
                aria-label="Pagination left button"
              />
            ) : (
              <Image
                src="/imgs/left.png"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-70 duration-300"
                alt="Pagination left button"
                aria-label="Pagination left button"
              />
            )}
            {currentPage < totalPages ? (
              <Image
                src="/imgs/right.png"
                width={24}
                height={24}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="cursor-pointer hover:opacity-70 duration-300"
                alt="Pagination right button"
                aria-label="Pagination left button"
              />
            ) : (
              <Image
                src="/imgs/right.png"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-70 duration-300"
                alt="Pagination right button"
                aria-label="Pagination left button"
              />
            )}
          </div>
        </main>
      ) : (
        <div className="w-full flex items-center justify-center py-20">
          <Triangle
            height="104"
            width="104"
            color="#2D2D2D"
            ariaLabel="triangle-loading"
            visible={true}
          />
        </div>
      )}
    </>
  );
};
