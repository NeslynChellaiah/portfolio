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
                {data.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => project.link && window.open(project.link, '_blank')}
                        className={`group relative bg-white border border-gray-100 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${project.link ? 'cursor-pointer' : ''}`}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        <div className="flex justify-between items-start mb-4 mt-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-500 transition-colors">
                                {project.name}
                            </h3>
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
                ))}
            </div>
        </Section>
    );
};
