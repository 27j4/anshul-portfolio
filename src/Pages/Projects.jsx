import React from "react";

const Project = () => {
  const projects = [
    {
      name: "Scatch",
      description:
        "Scatch is a web-based application built using modern web technologies. It's designed to provide users with an interactive experience.",
      link: "https://github.com/27j4/scatch",
      date: "January 2025 - January 2025",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Cloudinary",
        "Multer",
        "Mongoose",
      ],
      tools: ["VS Code", "Postman"],
      contributors: ["Anshul Pandey", "Amit Pandey"],
    },
    {
      name: "Goww-Carry",
      description:
        "Developed a responsive MERN stack e-commerce platform with product browsing, detailed views, and secure ordering using JWT-based authentication and bcryptjs password encryption",
      link: "https://github.com/27j4/GrowwCarry",
      date: "March 2025 - April 2025",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
        "Cloudinary",
        "Multer",
        "Mongoose",
      ],
      tools: ["VS Code", "Postman", "MongoDB Atlas"],
      contributors: ["Anshul Pandey", "Amit Pandey", "Ankit Sahu"],
    },
  ];

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="border-b pb-6">
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <p className="text-gray-400 mb-3">
              <strong>Date: </strong>
              {project.date}
            </p>
            <p className="text-gray-400 mb-3">
              <strong>Tech Stack: </strong>
              {project.techStack.join(", ")}
            </p>
            <p className="text-gray-400 mb-3">
              <strong>Tools: </strong>
              {project.tools.join(", ")}
            </p>
            <p className="text-gray-400 mb-3">
              <strong>Contributors: </strong>
              {project.contributors.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
