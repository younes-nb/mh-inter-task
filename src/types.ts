export interface Product {
  title: string;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  description: string;
  images: Image[];
  price: string;
  discount: string;
  code: string;
  store: string;
  tags: string[];
  properties: Property[];
  options: string[]
  isOriginal: boolean;
}

export interface Property {
  name: string;
  value: string;
}

export interface Image {
  image: string;
  thumb: string;
}