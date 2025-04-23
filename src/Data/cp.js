import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import lcprprofile from "../assets/lcprprofile.png";
import gfgprofilepic from "../assets/gfgprofilepic.jpg";
import atprofile from "../assets/atprofile.jpg";

let handles = {
  codechef: "anshul_iet_22",
  codeforces: "Cannonbolt2704",
  leetcode: "ansh_iet_22",
  atcoder: "ansh_it_is",
  gfg: "ansh_iet_22",
};

// For Codechef Data -  https://codechef-api.vercel.app/handle/anshul_iet_22
let codeChefData = async () => {
  let response = await fetch(
    `https://codechef-api.vercel.app/handle/${handles.codechef}`
  );
  let data = await response.json();
  return data;
};

// For Codeforces Data - https://codeforces.com/api/user.info?handles=Cannonbolt2704&checkHistoricHandles=false

let codeforcesData = async () => {
  let response = await fetch(
    `https://codeforces.com/api/user.info?handles=${handles.codeforces}&checkHistoricHandles=false`
  );
  let data = await response.json();

  return data;
};

// For GFG Data - https://geeks-for-geeks-api.vercel.app/ansh_iet_22
let gfgData = async () => {
  let response = await fetch(
    `https://geeks-for-geeks-api.vercel.app/${handles.gfg}`
  );
  let data = await response.json();
  return data;
};

// For Leetcode Data - https://leetcode-api-faisalshohag.vercel.app/yourLeetcodeUsername
let leetcodeData = async () => {
  let response = await fetch(
    `https://leetcode-api-faisalshohag.vercel.app/${handles.leetcode}`
  );
  let data = await response.json();
  return data;
};

let cf = await codeforcesData(),
  cc = await codeChefData();

let allStats = [
  {
    Judge: "Codeforces",
    icon: SiCodeforces,
    profilePic: cf.result[0].titlePhoto,
    link: "https://codeforces.com/profile/Cannonbolt2704",
    handle: cf.result[0].handle,
    currRank: cf.result[0].rank,
    maxRank: cf.result[0].maxRank,
    currentRating: cf.result[0].rating,
    maxRating: cf.result[0].maxRating,
    color: "blue",
  },
  {
    Judge: "Codechef",
    profilePic: cc.profile,
    icon: SiCodechef,
    link: "https://www.codechef.com/users/anshul_iet_22",
    handle: handles.codechef,
    currRank: cc.stars,
    maxRank: "5-🌟",
    currentRating: cc.currentRating,
    maxRating: cc.highestRating,
    color: "red",
  },
  {
    Judge: "Leetcode",
    profilePic: lcprprofile,
    icon: SiLeetcode,
    link: "https://leetcode.com/u/ansh_iet_22/",
    handle: handles.leetcode,
    currRank: "Guardian",
    maxRank: "Guardian",
    currentRating: 2282,
    maxRating: 2282,
    color: "yellow",
  },
  {
    Judge: "Atcoder",
    profilePic: atprofile,
    icon: FaCode,
    link: "https://atcoder.jp/users/ansh_it_is",
    handle: handles.atcoder,
    currRank: "Kyan",
    maxRank: "Kyan",
    currentRating: 1225,
    maxRating: 1225,
    color: "white",
  },
  {
    Judge: "Geeks for Geeks",
    profilePic: gfgprofilepic,
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/ansh_iet_22/",
    handle: handles.gfg,
    currRank: "5-🌟",
    maxRank: "5-🌟",
    currentRating: 2107,
    maxRating: 2105,
    color: "green",
  },
];

export { allStats };
