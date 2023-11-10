"use client";

import { Models } from "@/@types";
import {
  handlerGithubServiceEric,
  handlerGithubServiceLucas,
} from "@/api/githubService";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";
import Atropos from "atropos/react";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import "atropos/css";

export default function TeamPage() {
  const [gitEric, setGitEric] = useState<Models.GithubInfo>();
  const [gitLucas, setGitLucas] = useState<Models.GithubInfo>();

  useEffect(() => {
    const fetchData = async () => {
      const dataEric = (await handlerGithubServiceEric()) as Models.GithubInfo;
      const dataLucas =
        (await handlerGithubServiceLucas()) as Models.GithubInfo;

      setTimeout(() => {
        setGitEric(dataEric);
        setGitLucas(dataLucas);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Team" />
      {gitEric && gitLucas ? (
        <main className="flex flex-col items-center justify-center py-20 gap-8 bg-gradient-to-t from-gradient2 to-gradient1">
          <Atropos className="w-1/2 d-0.01:w-3/4 d-0.2:w-[95%] rounded-xl my-atropos">
            <div className="bg-black w-full rounded-xl p-8 d-0.2:p-4 d-0.2:flex-col flex gap-6 items-center">
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={gitEric?.avatar_url}
                  alt="Avatar do Github"
                  aria-label="Avatar do Github"
                  width={80}
                  height={80}
                />
                <p className="text-primary">@{gitEric?.login}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-primary text-lg font-bold">
                  {gitEric?.name}
                </p>
                <p className="text-primary d-0.2:text-sm">{gitEric?.bio}</p>
                <div className="flex gap-4 w-full items-center justify-start">
                  <span className="text-black text-center text-sm bg-gray w-28 py-1 px-2 rounded-xl d-0.2:text-xs">
                    {gitEric?.location}
                  </span>
                  <Link
                    href={gitEric ? gitEric?.html_url : "/"}
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:transform hover:scale-125 duration-300"
                      src="/imgs/github.png"
                      alt="Github Icon"
                      aria-label="Github Icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/erickunzel/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:transform hover:scale-125 duration-300"
                      src="/imgs/linkedin.png"
                      alt="Linkedin Icon"
                      aria-label="Linkedin Icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Atropos>

          <Atropos className="my-atropos w-1/2 d-0.01:w-3/4 d-0.2:w-[95%]">
            <div className="bg-black w-full rounded-xl p-8 d-0.2:p-4 flex gap-6 d-0.2:flex-col items-center">
              <div className="flex flex-col gap-2 items-center">
                <img
                  src={gitLucas?.avatar_url}
                  alt="Avatar do Github"
                  aria-label="Avatar do Github"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <p className="text-primary">@{gitLucas?.login}</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="text-primary text-lg font-bold">
                  {gitLucas?.name}
                </p>
                <p className="text-primary d-0.2:text-sm">{gitLucas?.bio}</p>
                <div className="flex gap-4 w-full items-center justify-start">
                  <span className="text-black text-center text-sm bg-gray w-32 py-1 px-2 rounded-xl d-0.2:text-xs">
                    {gitLucas?.location}
                  </span>
                  <Link
                    href={gitLucas ? gitLucas?.html_url : "/"}
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:transform hover:scale-125 duration-300"
                      src="/imgs/github.png"
                      alt="Github Icon"
                      aria-label="Github Icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/osmaclean/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:transform hover:scale-125 duration-300"
                      src="/imgs/linkedin.png"
                      alt="Linkedin Icon"
                      aria-label="Linkedin Icon"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Atropos>
          <Link
            className="bg-black rounded-lg font-bold text-lg px-8 py-2 text-primary border-black hover:bg-transparent border-2 duration-300 hover:text-black hover:border-black"
            href="/home"
          >
            Go Back
          </Link>
        </main>
      ) : (
        <div className="w-full flex items-center justify-center py-20">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            colors={["#2D2D2D", "#CED4DA"]}
          />
        </div>
      )}
    </div>
  );
}
