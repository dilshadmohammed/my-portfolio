import { useState } from "react";
import projects from "../data/projects.json";

function Projects() {
const [currentPage, setCurrentPage] = useState(1);

const projectsPerPage = 3;
const startIdx = (currentPage - 1) * projectsPerPage;
const endIdx = startIdx + projectsPerPage;
const paginatedProjects = projects.slice(startIdx, endIdx);
const totalPages = Math.ceil(projects.length / projectsPerPage);

return (
    <>
        <div
            className={`grid gap-8 justify-center ${
                paginatedProjects.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : paginatedProjects.length === 2
                        ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                        : paginatedProjects.length === 3
                            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            }`}
        >
            {paginatedProjects.map((project, idx) => (
                <div
                    key={project.title + idx}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                    <div className="grid grid-rows-[auto_1fr] h-full">
                        {/* Card Content */}
                        <div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Code + Demo Links */}
                        <div className="flex gap-3 px-6 pb-6 items-end">
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-github"></i>
                                Code
                            </a>
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                >
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* Dynamic Pagination */}
        <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
                {/* Previous Button */}
                <button
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${currentPage === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                {/* Next Button */}
                <button
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-all duration-300"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    </>
);
}
export default Projects;