
export interface CarVariant {
  name: string;
  price: number;
}

export interface CarModel {
  name: string;
  imageUrl: string;
  variants: CarVariant[];
}
