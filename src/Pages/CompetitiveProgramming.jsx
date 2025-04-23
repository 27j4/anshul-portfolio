import React from "react";
import { allStats } from "../Data/cp";

function CompetitiveProgramming() {
  return (
    <section className="py-10 px-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-10">
        Competitive Programming Profiles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto max-w-6xl">
        {allStats.map((item, index) => (
          <div
            className="rounded-xl shadow-lg overflow-hidden border border-zinc-700  hover:scale-105 transition-transform duration-300"
            key={index}
          >
            <div className="flex items-center gap-4 bg-zinc-800 py-3 px-4 border border-cyan-200 rounded-t-xl">
              <item.icon className="text-blue-500 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">
                {item.Judge}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-6">
              <img
                className="w-48 h-48 object-cover rounded-lg border border-zinc-600"
                src={item.profilePic}
                alt={item.handle}
              />
              <div className="flex flex-col justify-between text-lg text-cyan-400 font-medium">
                <div>
                  <h3 className="mb-2">
                    <span className="text-orange-400 font-normal">Handle:</span>{" "}
                    <a
                      className="text-blue-400 underline"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.handle}
                    </a>
                  </h3>
                  <p>
                    <span className="text-white font-normal">
                      Current Rank:
                    </span>{" "}
                    {item.currRank}
                  </p>
                  <p>
                    <span className="text-white font-normal">
                      Maximum Rank:
                    </span>{" "}
                    {item.maxRank}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-white font-normal">
                      Current Rating:
                    </span>{" "}
                    {item.currentRating}
                  </p>
                  <p>
                    <span className="text-white font-normal">
                      Maximum Rating:
                    </span>{" "}
                    {item.maxRating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompetitiveProgramming;
