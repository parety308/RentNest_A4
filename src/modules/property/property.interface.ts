export interface ICreateProperty {
  title: string;
  description: string;
  location: string;
  price: number;
  images: string[];
  bedrooms?: number;
  bathrooms?: number;
  amenities: string[];
  categoryId: string;
}