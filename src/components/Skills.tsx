import React from 'react';
import type { Resume } from '../types';
import { Section } from './Section';

interface SkillsProps {
    data: Resume['skills'];
}

interface SkillCategoryProps {
    title: string;
    skills: string[];
    colorClass: string;
    className?: string; // Allow overriding layout classes
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, colorClass, className = "" }) => (
    <div className={className}>
        <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${colorClass}`}></span> {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-gray-200 shadow-sm rounded-full text-sm text-gray-700 cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export const Skills: React.FC<SkillsProps> = ({ data }) => {
    return (
        <Section title="Technical Skills" id="skills" className="bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory
                    title="Languages"
                    skills={data.languages}
                    colorClass="bg-blue-400"
                />
                <SkillCategory
                    title="Frameworks"
                    skills={data.frameworks}
                    colorClass="bg-teal-400"
                />
                <SkillCategory
                    title="Tools & Technologies"
                    skills={data.technologies}
                    colorClass="bg-indigo-400"
                    className="md:col-span-2"
                />
            </div>
        </Section>
    );
};
