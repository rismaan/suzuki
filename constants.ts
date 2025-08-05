import { CarModel } from './types';

export const SALES_NAME = "Risman";
export const SALES_PHOTO_URL = 'data:image/jpeg;base64,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';
export const WHATSAPP_NUMBER = "6285156496822";
export const WHATSAPP_NUMBER_DISPLAY = "0851-5649-6822";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo ${SALES_NAME}, saya tertarik dengan promo mobil Suzuki.`)}`;

export const CAR_DATA: CarModel[] = [
   {
    name: "Suzuki Fronx",
    imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2Fdetails%2Fdesktop%2Faksesorinewbannerdesktopvers_1748336857088.png&w=3840&q=75",
    variants: [
      { name: "GL MT", price: 261800000 },
      { name: "GL AT", price: 273800000 },
      { name: "GX MT", price: 278800000 },
      { name: "GX AT", price: 296600000 },
      { name: "SGX", price: 322600000 },
      { name: "SGX 2TONE", price: 324600000 },
    ],
  },
  {
    name: "Suzuki XL7 Hybrid",
    imageUrl: "https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg",
    variants: [
      { name: "ZETA MT", price: 269900000 },
      { name: "ZETA AT", price: 281100000 },
      { name: "BETA MT HYBRID", price: 292200000 },
      { name: "BETA AT HYBRID", price: 303100000 },
      { name: "ALPHA MT HYBRID", price: 302300000 },
      { name: "ALPHA MT HYBRID 2TONE", price: 304300000 },
      { name: "ALPHA AT HYBRID", price: 313200000 },
      { name: "ALPHA AT HYBRID 2TONE", price: 315300000 },
    ],
  },
  {
    name: "All New Ertiga",
    imageUrl: "https://hargasuzukibaru.com/wp-content/uploads/2023/04/Harga-All-New-Ertiga.jpg",
    variants: [
      { name: "GA", price: 241750000 },
      { name: "MC GL MT", price: 265350000 },
      { name: "MC GL AT", price: 276400000 },
      { name: "MC GX MT", price: 282000000 },
      { name: "MC GX AT", price: 293000000 },
      { name: "CRUISE MT", price: 294800000 },
      { name: "CRUISE MT 2TONE", price: 296800000 },
      { name: "CRUISE AT", price: 305700000 },
      { name: "CRUISE AT 2TONE", price: 307700000 },
    ],
  },
  {
    name: "Suzuki Grand Vitara",
    imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2Fthree-six-zero%2Fexterior%2Fdesktop%2Fvitaradesktopvers_1730194211065.png&w=3840&q=75",
    variants: [
      { name: "GX AT", price: 403200000 },
      { name: "GX AT 2TONE", price: 406100000 },
    ],
  },
  {
    name: "Suzuki Jimny 3 Door",
    imageUrl: "https://imgcdn.oto.com/large/gallery/exterior/37/782/suzuki-jimny-front-angle-low-view-177244.jpg",
    variants: [
      { name: "MT", price: 511500000 },
      { name: "AT", price: 524000000 },
      { name: "MT 2TONE", price: 514850000 },
      { name: "AT 2TONE", price: 527300000 },
    ],
  },
  {
    name: "Suzuki Jimny 5 Door",
    imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2Fthree-six-zero%2Fexterior%2Fdesktop%2Fbanneraksesoridesktopvers_1730454265559.png&w=3840&q=75",
    variants: [
      { name: "MT", price: 496100000 },
      { name: "AT", price: 508700000 },
      { name: "MT 2TONE", price: 499350000 },
      { name: "AT 2TONE", price: 511900000 },
      { name: "AT WHITE RHINO", price: 522300000 },
    ],
  },
  {
    name: "Suzuki S-Presso",
    imageUrl: "https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg",
    variants: [
      { name: "MT", price: 176600000 },
      { name: "AT", price: 186600000 },
    ],
  },
  {
    name: "Suzuki New Carry PU",
    imageUrl: "https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg",
    variants: [
      { name: "Flat Deck", price: 175500000 },
      { name: "Flat Deck AC PS", price: 183500000 },
      { name: "Wide Deck", price: 176600000 },
      { name: "Wide Deck AC PS", price: 184400000 },
    ],
  },
  {
    name: "Suzuki APV",
    imageUrl: "https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2Fimages%2FBANNERAVP(1928x1004)_1723520690715.webp&w=3840&q=75",
    variants: [
      { name: "GE PS MT AB", price: 228200000 },
      { name: "GL MT AB", price: 236400000 },
      { name: "GX MT AB", price: 250500000 },
      { name: "SGX MT AB", price: 253900000 },
    ],
  },
 
];