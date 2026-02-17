import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 text-center border-t border-gray-800 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-teal-900 to-blue-900 opacity-50"></div>
            <p>© {new Date().getFullYear()} Neslyn Chellaiah Pious Maria Jose. All rights reserved.</p>
        </footer>
    );
};
