import { Models } from "@/@types";
import Link from "next/link";
import { ScoreTable } from "../../atom/scoreTable/ScoreTable";
import { SituationPlay } from "../../atom/situationPlay/SituationPlay";

export const CardMainHome: React.FC<Models.Event> = ({ event, teams }) => {
  const selectedTeams = event.competitions[0].competitors;

  return (
    <section className="w-[30rem] d-0.3:w-[35rem] flex flex-col justify-center gap-3 items-center h-72 rounded-xl bg-black border-black border-2 p-2 d-0.1:p-1">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-2/6">
          <img
            src={selectedTeams[0].team.logo}
            width={72}
            height={72}
            alt={selectedTeams[0].team.name}
            aria-label={selectedTeams[0].team.name}
            className="d-0.1:w-16 d-0.1:h-65"
          ></img>
          <h2 className="text-primary text-xl d-0.1:text-lg">
            {selectedTeams[0].team.name}
          </h2>
          <p className="text-primary text-xs d-0.1:text-[10px]">
            ({selectedTeams[0].records[0].summary},{" "}
            {selectedTeams[0].homeAway === "home"
              ? selectedTeams[0].records[2].summary
              : selectedTeams[0].records[1].summary}{" "}
            {selectedTeams[0].homeAway === "home" ? "Home" : "Away"})
          </p>
        </div>
        <div
          id="score"
          className="text-center flex flex-col gap-2 items-center justify-center w-2/6"
        >
          {event.status.type.name !== "STATUS_SCHEDULED" && (
            <span className="text-primary font-bold text-xl d-0.1:text-base">
              {event.status.type.name === "STATUS_IN_PROGRESS" ||
              event.status.type.name === "STATUS_HALFTIME" ? (
                <img
                  src="/imgs/live.png"
                  alt="Live"
                  aria-label="Live"
                  width={64}
                  height={52}
                  className="d-0.1:w-[3.25rem] d-0.1:h-6"
                ></img>
              ) : (
                "FINAL"
              )}
            </span>
          )}
          <p id="time" className="text-primary">
            {event.status.type.detail.includes("Final")
              ? ""
              : event.status.type.detail}
          </p>
          <p
            id="points"
            className="text-primary font-bold text-4xl d-0.1:text-2xl"
          >
            {selectedTeams[0].score}-{selectedTeams[1].score}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-2/6">
          <img
            src={selectedTeams[1].team.logo}
            width={72}
            height={72}
            alt={selectedTeams[1].team.name}
            aria-label={selectedTeams[1].team.name}
          ></img>
          <h2 className="text-primary text-xl d-0.1:text-lg">
            {selectedTeams[1].team.name}
          </h2>
          <p className="text-primary text-xs d-0.1:text-[10px]">
            ({selectedTeams[1].records[0].summary},{" "}
            {selectedTeams[1].homeAway === "home"
              ? selectedTeams[1].records[2].summary
              : selectedTeams[1].records[1].summary}{" "}
            {selectedTeams[1].homeAway === "home" ? "Home" : "Away"})
          </p>
        </div>
      </div>
      {event.competitions[0].situation && (
        <SituationPlay
          situation={
            event.competitions[0].situation.lastPlay?.text ?? "Waiting info..."
          }
          teamLogo={
            event.competitions[0].situation.lastPlay?.team
              ? teams?.find(
                  (team) =>
                    team.team.id ===
                    event.competitions[0].situation.lastPlay.team.id
                )?.team.logos[0].href
              : null
          }
        />
      )}
      {selectedTeams[0].linescores && <ScoreTable teams={selectedTeams} />}

      {event.status.type.name === "STATUS_FINAL" && (
        <Link
          className="bg-primary d-0.2:text-sm px-4 py-2 d-0.1:py-1 rounded-lg border-2 border-primary hover:border-primary hover:border-2 hover:bg-transparent hover:text-primary duration-300"
          href={event.links[2].href}
          target="_blank"
        >
          Highlights at ESPN
        </Link>
      )}
    </section>
  );
};
