import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const educationDetails = [
  {
    level: "College",
    icon: <FaUniversity className="text-blue-500" />,
    name: "Institute of Engineering and Technology, Lucknow",
    field: "B.Tech, Computer Science ",
    address: "Sitapur Road, Lucknow, Uttar Pradesh",
    year: "2022 - 2026",
    grade: "8.84 CGPA",
  },
  {
    level: "Senior Secondary (12th)",
    icon: <FaGraduationCap className="text-green-400" />,
    name: "Kamla Nehru Institute of Child Education - K.N.I.C.E.",
    field: "PCM (Physics, Chemistry, Mathematics)",
    address: "Lal Diggi, Sultanpur, Uttar Pradesh",
    year: "2019 - 2021",
    grade: "92%",
  },
  {
    level: "High School (10th)",
    icon: <FaSchool className="text-yellow-400" />,
    name: "Raj Montessori School, Semari",
    field: "Science",
    address: "Semari, Sultanpur, Uttar Pradesh",
    year: "2017 - 2019",
    grade: "85.33%",
  },
];

export default function EducationSection() {
  return (
    <section className=" text-white py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Education</h1>
      <div className="space-y-6 max-w-4xl mx-auto">
        {educationDetails.map((edu, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 bg-zinc-700 rounded-lg shadow-md"
          >
            <div className="text-4xl mt-1">{edu.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{edu.level}</h2>
              <p className="text-lg">{edu.name}</p>
              <p className="text-cyan-400">{edu.field}</p>
              <p className="text-sm text-gray-400">{edu.address}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="text-sm text-green-400 font-semibold">
                Grade: {edu.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
