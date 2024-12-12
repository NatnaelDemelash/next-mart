import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default function Home() {
  const products = getAllProducts();
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
