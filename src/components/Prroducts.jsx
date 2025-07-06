import ProductCard from "./ProductCard";

import { Link } from "react-router-dom"; 
export default function Products({ items }) {
  return (
    <>
      <h2 id="products" className="text-center text-4xl lg:text-7xl font-bold mt-16">
        Apple-Watch Products
      </h2>
      <h3 className="text-center text-2xl lg:text-3xl text-gray-700 mt-5 mb-6">
        Purchasing an Apple Watch is a great investment…
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-4 lg:p-8">
        {items.map((p) => (
          <ProductCard key={p.id} {...p} />//unique key needed to update DOM , ..p is spread operator to get all properties
        ))}
      </div>

      <div className="text-center p-4">
        <Link to="/products">
        <button className="px-4 py-2 text-xl font-bold hover:scale-110 transition">
          Discover More
        </button></Link>
      </div>
    </>
  );
}
