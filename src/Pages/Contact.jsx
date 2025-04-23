import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaShareAlt,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: "My Address",
    details: ["Lucknow, Uttar Pradesh, India "],
    color: "green",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["pandeyanshul2004@gmail.com", "2200520100015@ietlucknow.ac.in"],
    color: "green",
  },
  {
    icon: FaPhoneAlt,
    title: "Contact",
    details: ["+91-8882322227"],
    color: "green",
  },
];

const socialIcons = [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/anshul-pandey-b5316824a/",
    color: "gray",
  },
  { icon: FaGithub, link: "https://github.com/27j4", color: "gray" },
  { icon: FaGoogle, link: "mailto:pandeyanshul2004@gmail.com", color: "gray" },
];


export default function ContactSection() {
  return (
    <section className="text-white px-6 py-10">
      <h2 className="text-xl tracking-widest font-semibold mb-6 border-b border-white/20 w-fit">
        CONTACT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-zinc-700 p-6 rounded-md flex gap-4 items-start  hover:scale-105 transition-transform duration-300"
            >
              <div className="text-green-400  p-3 rounded-full text-2xl">
                <Icon />
              </div>
              <div>
                <h3 className=" text-orange-400 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-md">
                  {item.details.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </p>
              </div>
            </div>
          );
        })}

        {/* Social Profiles */}
        <div className="bg-zinc-700 p-6 rounded-md flex gap-4 items-start hover:scale-105 transition-transform duration-300">
          <div className="text-green-400  p-3 rounded-full text-2xl">
            <FaShareAlt />
          </div>
          <div>
            <h3 className=" text-orange-400 text-lg font-semibold mb-3">
              Social Profiles
            </h3>
            <div className="flex gap-4">
              {socialIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
