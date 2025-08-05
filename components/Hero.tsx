
import React from 'react';
import { SALES_NAME } from '../constants';

export const Hero: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.suzuki-bandung.com/wp-content/uploads/2025/08/suzuki-bandung-banner-new-giias-2025-width-ink.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Promo Terbaik Suzuki Bandung
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
          Dapatkan Penawaran Spesial dari Sales Consultant Resmi - <span className="font-bold text-blue-300">{SALES_NAME}</span>
        </p>
        <button
          onClick={scrollToProducts}
          className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-xl"
        >
          Lihat Daftar Harga
        </button>
      </div>
    </section>
  );
};
