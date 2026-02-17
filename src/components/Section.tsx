import React from 'react';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "", id }) => {
    return (
        <section id={id} className={`py-12 md:py-16 ${className}`}>
            <div className="container mx-auto px-4 max-w-4xl">
                {title && (
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 relative inline-block">
                        {title}
                        <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};
