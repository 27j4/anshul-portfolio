import React from "react";
import icpcBanner from "../assets/icpcBanner.png";
import icpcpic1 from "../assets/icpcpic1.jpg";
import icpcpic2 from "../assets/icpcpic2.jpg";
import icpcpic3 from "../assets/icpcpic3.jpg";

function ICPC() {
  return (
    <>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto mb-12 p-6 rounded-xl shadow-lg text-white border border-zinc-700">
        <h2 className="text-2xl font-bold mb-4 text-center text-cyan-300">
          ICPC - International Collegiate Programming Contest
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <img
            src={icpcBanner}
            alt="ICPC logo"
            className="w-full lg:w-1/3 rounded-lg border border-cyan-400"
          />
          <div className="text-lg leading-relaxed">
            <p>
              The{" "}
              <a
                className="text-blue-400 font-semibold"
                href="https://icpc.global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                International Collegiate Programming Contest (ICPC)
              </a>{" "}
              is one of the world’s most prestigious competitive programming
              contests for university students. It challenges teams of three to
              solve complex algorithmic problems within a limited time, testing
              their coding skills, teamwork, and problem-solving abilities under
              pressure on a global stage.
            </p>
            <p className="mt-4">
              I qualified for both the{" "}
              <span className="text-orange-300 font-medium">Amritapuri</span>{" "}
              and <span className="text-orange-300 font-medium">Chennai</span>{" "}
              regionals in ICPC 2024. Notably, I secured an{" "}
              <span className="text-green-400 font-bold">
                All India Rank of 59
              </span>{" "}
              in the Chennai regional.
            </p>
            <p className="mt-2">
              You can view my public ICPC profile{" "}
              <a
                className="text-blue-400 underline"
                href="https://icpc.global/ICPCID/QPI0BT4EOVER"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={icpcpic1}
            alt="ICPC event 1"
            className="rounded-lg border border-cyan-300 shadow-md"
          />
          <img
            src={icpcpic2}
            alt="ICPC event 2"
            className="rounded-lg border border-cyan-300 shadow-md"
          />
          <img
            src={icpcpic3}
            alt="ICPC event 3"
            className="rounded-lg border border-cyan-300 shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export default ICPC;
