import React from 'react';
import type { Education as EducationType } from '../types';
import { Section } from './Section';
import { Logo } from './Logo';

interface EducationProps {
    data: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
    return (
        <Section title="Education" id="education" className="bg-gray-50">
            <div className="space-y-6">
                {data.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4">
                            {edu.logo ? (
                                <Logo logo={edu.logo} organization={edu.institution} />
                            ) : (
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                    {edu.institution.charAt(0)}
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{edu.institution}</h3>
                                <p className="text-gray-600">{edu.degree}</p>
                            </div>
                        </div>

                        <div className="mt-2 md:mt-0">
                            <span className="font-mono text-sm text-gray-500">
                                {edu.endDate}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
