
import React from 'react';
import { CAR_DATA } from '../constants';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Daftar Harga Terbaru</h2>
          <p className="mt-4 text-lg text-gray-400">Harga On The Road (OTR) Bandung & Sekitarnya</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {CAR_DATA.map((car) => (
            <ProductCard key={car.name} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};
