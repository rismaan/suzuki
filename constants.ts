import { CarModel } from './types';

export const SALES_NAME = "Risman";
export const SALES_PHOTO_URL = 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/061a94016ea22bc80d2b04fcf9bdbad6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=47fc25c9&x-expires=1754575200&x-signature=KbGG1mQI1%2BUUjwaKJm8KjjYL4Fc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2';
export const WHATSAPP_NUMBER = "6285156496822";
export const WHATSAPP_NUMBER_DISPLAY = "0851-5649-6822";
export const WHATSAPP_LINK = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(`Halo ${SALES_NAME}, saya tertarik dengan promo mobil Suzuki.`)}`;

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
