import React from 'react';
import type { Experience as ExperienceType } from '../types';
import { Section } from './Section';
import { Logo } from './Logo';

interface ExperienceProps {
    data: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
    return (
        <Section title="Work Experience" id="experience">
            <div className="space-y-8">
                {data.map((job, index) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            {job.logo ? (
                                <Logo logo={job.logo} organization={job.company} />
                            ) : (
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl shrink-0">
                                    {job.company.charAt(0)}
                                </div>
                            )}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
                                <p className="text-gray-600 font-medium">{job.role}</p>
                                <span className="font-mono text-sm text-gray-500 block mb-1 block sm:hidden">
                                    {job.startDate} – {job.endDate}
                                </span>
                            </div>
                        </div>

                        <div className="mt-2 md:mt-0 text-right hidden sm:block">
                            <span className="font-mono text-sm text-gray-500 block mb-1">
                                {job.startDate} – {job.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
