import React from 'react';
import type { Project } from '../types';
import { Section } from './Section';

interface ProjectsProps {
    data: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
    return (
        <Section title="Projects" id="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.map((project, index) => {
                    const isInteractive = project.link && project.link !== project.github;
                    return (
                        <div
                            key={index}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                            className={`group relative bg-white border border-gray-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${project.link ? 'cursor-pointer' : ''}`}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="flex justify-between items-center mb-4 mt-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-500 transition-colors">
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-900 transition-colors"
                                            title="View Code"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    )}
                                    <span className={`px-3 py-1 bg-white border border-gray-200 shadow-sm rounded-full text-sm text-gray-700 ${isInteractive ? 'hover:bg-gray-50 hover:border-gray-300 transition-colors' : ''}`}>
                                        {project.type}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {project.description[0]} {/* Showing first point as summary for brevity */}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.slice(0, 5).map((tech, i) => ( // Limit tags for clean look
                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 5 && (
                                    <span className="px-2 py-1 bg-gray-50 text-gray-400 text-xs rounded-md font-medium">
                                        +{project.technologies.length - 5}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
