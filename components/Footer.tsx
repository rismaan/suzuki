
import React from 'react';
import { SALES_NAME, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="font-bold text-lg text-white">Promo Suzuki Bandung</p>
        <p className="mt-2">Sales Consultant: {SALES_NAME}</p>
        <p className="mt-1">
          WhatsApp: <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">{WHATSAPP_NUMBER_DISPLAY}</a>
        </p>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} Promo Suzuki Bandung. All rights reserved.</p>
      </div>
    </footer>
  );
};
