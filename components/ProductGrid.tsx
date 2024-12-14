import { Product } from "@/types/sanity.types";
import React from "react";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      productGrid
    </div>
  );
};

export default ProductGrid;
