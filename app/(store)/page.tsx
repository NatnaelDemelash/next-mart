import ProductView from "@/components/ProductView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div>
      <h1>Home Page</h1>

      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <ProductView products={products} />
      </div>
    </div>
  );
}
