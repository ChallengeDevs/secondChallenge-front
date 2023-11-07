import { handlerScoreRequest } from "@/api/scoreService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// interface RequestTypes {
//   day: object;
//   events: Any;
//   leagues: Array<object>;
//   season: {
//     type: number;
//   };
// }

export const CardMainHome = () => {
  const [getData, setGetData] = useState() as any;

  const fetchData = async () => {
    const data = await handlerScoreRequest();
    setGetData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {getData?.events.map((element) => (
        <div
          key={getData?.day?.date}
          className="w-[30rem] h-72 rounded-xl bg-black border-black border-2"
        >
          <img
            src={element.competitions[0]?.competitors[0]?.team.logo}
            width={72}
            height={72}
            alt="Logo team basketball"
            aria-label="Logo team basketball"
          ></img>
        </div>
      ))}
    </>
  );
};
