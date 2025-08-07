import {
  faPython,
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  faLinux,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBolt,
  faServer,
  faDatabase,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export const iconMap = {
  Django: { icon: faPython, color: "text-green-700" },
  FastAPI: { icon: faBolt, color: "text-blue-500" },
  Express: { icon: faServer, color: "text-gray-400" },
  TypeScript: { icon: faJs, color: "text-blue-400" },
  React: { icon: faReact, color: "text-blue-500" },
  SQL: { icon: faDatabase, color: "text-blue-700" },
  Git: { icon: faGitAlt, color: "text-orange-500" },
  "Node.js": { icon: faNodeJs, color: "text-green-600" },
  "Tailwind CSS": { icon: faCss3Alt, color: "text-teal-400" },
  Docker: { icon: faDocker, color: "text-blue-400" },
  Linux: { icon: faLinux, color: "text-white" },
  Ollama: { icon: faRobot, color: "text-gray-500" },
};
