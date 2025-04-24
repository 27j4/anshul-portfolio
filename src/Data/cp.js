// src/lib/statsData.js

import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import lcprprofile from "../assets/lcprprofile.png";
import gfgprofilepic from "../assets/gfgprofilepic.jpg";
import atprofile from "../assets/atprofile.jpg";

const handles = {
  codechef: "anshul_iet_22",
  codeforces: "Cannonbolt2704",
  leetcode: "ansh_iet_22",
  atcoder: "ansh_it_is",
  gfg: "ansh_iet_22",
};

// Async fetch functions
const codeChefData = async () => {
  const res = await fetch(
    `https://codechef-api.vercel.app/handle/${handles.codechef}`
  );
  return await res.json();
};

const codeforcesData = async () => {
  const res = await fetch(
    `https://codeforces.com/api/user.info?handles=${handles.codeforces}&checkHistoricHandles=false`
  );
  return await res.json();
};

const initStats = async () => {
  const [cf, cc] = await Promise.all([codeforcesData(), codeChefData()]);

  return [
    {
      Judge: "Codeforces",
      icon: SiCodeforces,
      profilePic: cf.result[0].titlePhoto,
      link: `https://codeforces.com/profile/${cf.result[0].handle}`,
      handle: cf.result[0].handle,
      currRank: cf.result[0].rank,
      maxRank: cf.result[0].maxRank,
      currentRating: cf.result[0].rating,
      maxRating: cf.result[0].maxRating,
      color: "blue",
    },
    {
      Judge: "Codechef",
      icon: SiCodechef,
      profilePic: cc.profile,
      link: `https://www.codechef.com/users/${handles.codechef}`,
      handle: handles.codechef,
      currRank: cc.stars,
      maxRank: "5-🌟",
      currentRating: cc.currentRating,
      maxRating: cc.highestRating,
      color: "red",
    },
    {
      Judge: "Leetcode",
      icon: SiLeetcode,
      profilePic: lcprprofile,
      link: `https://leetcode.com/u/${handles.leetcode}/`,
      handle: handles.leetcode,
      currRank: "Guardian",
      maxRank: "Guardian",
      currentRating: 2282,
      maxRating: 2282,
      color: "yellow",
    },
    {
      Judge: "Atcoder",
      icon: FaCode,
      profilePic: atprofile,
      link: `https://atcoder.jp/users/${handles.atcoder}`,
      handle: handles.atcoder,
      currRank: "Kyan",
      maxRank: "Kyan",
      currentRating: 1225,
      maxRating: 1225,
      color: "white",
    },
    {
      Judge: "Geeks for Geeks",
      icon: SiGeeksforgeeks,
      profilePic: gfgprofilepic,
      link: `https://www.geeksforgeeks.org/user/${handles.gfg}/`,
      handle: handles.gfg,
      currRank: "5-🌟",
      maxRank: "5-🌟",
      currentRating: 2107,
      maxRating: 2105,
      color: "green",
    },
  ];
};

export { initStats };
