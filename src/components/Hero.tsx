import React from 'react';
import type { Resume } from '../types';

interface HeroProps {
    data: Resume;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-8 vh-100">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                {data.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-6">
                {data.title}
            </p>
            <div className="max-w-2xl mx-auto mb-8">
                <p className="text-lg text-gray-400 leading-relaxed">
                    {data.summary}
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
                <a
                    href={`mailto:${data.contact.email}`}
                    className="px-6 py-2 border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                    {data.contact.email}
                </a>
                <a
                    href={data.contact.social[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="/resume.pdf"
                    download="Neslyn_Resume.pdf"
                    className="px-6 py-2 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};
