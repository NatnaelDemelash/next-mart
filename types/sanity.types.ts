export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  // Add other product fields as needed
}

export interface Category {
  _id: string;
  name: string;
  // Add other category fields as needed
}
