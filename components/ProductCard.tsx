import React from 'react';
import { CarModel } from '../types';
import { SALES_NAME, WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  car: CarModel;
}

const formatCurrency = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const ProductCard: React.FC<ProductCardProps> = ({ car }) => {
  const createWhatsAppLink = (variantName: string) => {
    const message = `Halo ${SALES_NAME}, saya tertarik dengan promo ${car.name} ${variantName}. Mohon informasinya.`;
    return `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col">
      <img src={car.imageUrl} alt={car.name} className="w-full h-56 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4">{car.name}</h3>
        <div className="flex-grow space-y-3">
          {car.variants.map((variant) => (
            <div key={variant.name} className="flex justify-between items-center bg-gray-700/50 p-3 rounded-md">
              <div>
                <p className="text-base font-semibold text-gray-200">{variant.name}</p>
                <p className="text-sm text-blue-400 font-bold">{formatCurrency(variant.price)}</p>
              </div>
              <a
                href={createWhatsAppLink(variant.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 px-3 rounded-full flex items-center space-x-1.5 transition-transform transform hover:scale-105 whitespace-nowrap"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Tanya Promo</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
