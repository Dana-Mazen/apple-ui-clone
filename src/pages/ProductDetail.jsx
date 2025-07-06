
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import useCart from "../hooks/useCart";

const ProductDetail = () => {
    const { addItem } = useCart(); 
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="pt-32 text-center">Product not found.</p>;

  return (
    <div className="pt-56 sm:pt-52 md:pt-48 pb-32 sm:pb-32 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/*img */}
      <img
        src={product.largerImage}
        alt={product.name}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 rounded-xl object-cover shadow-md"
      />

      {/*details */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>

        <div className="flex justify-center lg:justify-start items-center gap-2">
          <span className="text-yellow-500 text-xl">{'★'.repeat(product.rating)}</span>
          <span className="text-gray-500">{product.rating}/5</span>
        </div>

        <p className="text-gray-700 text-base sm:text-lg">{product.description}</p>

        <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>

        <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
          <button  onClick={() => addItem(product)} className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition">
            Add to Cart
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-gray-400 text-gray-600 rounded-full hover:bg-gray-200 transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
