
import React from 'react';
import { SALES_NAME, WHATSAPP_LINK } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-blue-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          <span className="text-blue-400">Suzuki</span> Bandung
          <span className="block text-sm font-normal text-gray-400">Sales: {SALES_NAME}</span>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105"
        >
          <i className="fab fa-whatsapp"></i>
          <span>Hubungi Kami</span>
        </a>
      </div>
    </header>
  );
};
