import { Models } from "@/@types";

export const CardMainHome: React.FC<Models.Event> = ({event, teams}) => {
  return (
    <div className="w-[30rem] h-72 rounded-xl bg-black border-black border-2">
      <img
        width={72}
        height={72}
        alt="Logo team basketball"
        aria-label="Logo team basketball"
      ></img>
    </div>
  );
};
