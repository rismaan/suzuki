import React from 'react';
import { WHATSAPP_LINK, SALES_NAME, SALES_PHOTO_URL } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-2 md:right-4 z-50 group cursor-pointer"
      aria-label={`Chat with ${SALES_NAME} on WhatsApp`}
    >
      <div className="relative w-36 sm:w-40 text-center transition-all duration-300 ease-out group-hover:-translate-y-2">
        {/* Chat Bubble on hover */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs bg-white text-gray-900 px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="font-bold text-sm">Ada yang bisa dibantu?</p>
          <p className="text-xs">Chat dengan {SALES_NAME} di WA!</p>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 bg-white transform rotate-45 -mb-1.5"></div>
        </div>

        {/* Salesman Image */}
        <img
          src={SALES_PHOTO_URL}
          alt={SALES_NAME}
          className="h-44 sm:h-48 w-auto mx-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        />

        {/* CTA Button part */}
        <div className="relative mt-[-24px] bg-green-500 text-white font-bold py-2.5 px-4 rounded-full shadow-lg flex items-center justify-center space-x-2 transition-transform transform group-hover:scale-105">
          <i className="fab fa-whatsapp"></i>
          <span>Chat</span>
        </div>
      </div>
    </a>
  );
};
