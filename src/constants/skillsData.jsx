import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-400" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-cyan-400" />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-blue-800 text-4xl" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-cyan-500 text-4xl" />,
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-red-500 text-4xl" />,
  },
  {
    name: "React JS",
    icon: <FaReact className="text-cyan-400" />,
  },
];
