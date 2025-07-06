import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

 function ProductCard({ id, name, img, rating, price}) {
  const { addItem } = useCart();
  
  return (
     <Link to={`/product/${id}`} className="block">
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>

      <p className="text-lg font-semibold mb-2 text-center">{name}</p>

      {/*stars */}
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
        ))}
      </div>

      <p className="text-xl font-bold mb-2">${price}</p>

      <button onClick={(e) => {
         e.preventDefault();
    e.stopPropagation();//to prevent link nav for this button only
    addItem({ id, name, img, rating, price} );
  }} className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h2l3 9h10l3-9H5l-3 9zM5 21a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
        Add to Cart
      </button>
    </div></Link>
  );
}
export default ProductCard;
