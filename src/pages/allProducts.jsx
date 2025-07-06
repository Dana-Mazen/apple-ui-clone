
import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["all", "watch", "phone", "airpods", "tablet"];
const ratings = ["all", 5, 4, 3];

export default function AllProducts() {
  //filter state original
  const [category, setCategory] = useState("all");
  const [minRating, setMinRating] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  //logic
  const filtered = productsData.filter((p) => {
    const catOK = category === "all" || p.category === category;
    const ratingOK = minRating === "all" || p.rating >= minRating;
    const priceOK =
      (minPrice === "" || p.price >= Number(minPrice)) &&
      (maxPrice === "" || p.price <= Number(maxPrice));
    return catOK && ratingOK && priceOK;
  });

  return (
    <div className="pt-56 lg:pt-40 md:pt-56 sm:pt-60 pb-24 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>

      {/*filter gui*/}
      <div className="mb-10 flex flex-wrap gap-4 items-end justify-center">
        {/* based on category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}{/*adds rest of string to upper */}
              </option>
            ))}
          </select>
        </div>

        {/* on rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Min Rating</label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="p-2 border rounded"
          >
            {ratings.map((r) => (
              <option key={r} value={r}>
                {r === "all" ? "All" : `${r}+`}{/*to show All or 5+,...*/}
              </option>
            ))}
          </select>
        </div>

        {/* on price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price $ (min)</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="any"
            className="w-24 p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price $ (max)</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="any"
            className="w-24 p-2 border rounded"
          />
        </div>

        {/*clear */}
        <button
          onClick={() => {
            setCategory("all");
            setMinRating("all");
            setMinPrice("");
            setMaxPrice("");
          }}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Clear
        </button>
      </div>

      {/*products shown*/} {/*conditional rendering*/}
      {filtered.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products match your criteria.</p>
      )}
    </div>
  );
}
