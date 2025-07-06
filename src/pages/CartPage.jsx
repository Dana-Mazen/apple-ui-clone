import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items } = useCart(); //to get cart items, we want items only from {items, addItem,toast}
 const total = items.reduce((sum, item) => sum + item.price, 0);//start sum at 0
  if (!items.length)//reduce goes through arr and adds price
    return (//if items are 0 then nothing in cart
      <div className="pt-56 text-center">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty.</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          Browse products →
        </Link>
      </div>
    );

  return (
    <div className="pt-56 sm:pt-52 md:pt-48 pb-20 px-4 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Your Cart</h2>
      {items.map((p, i) => (//i is unique key of index for react, p is product
        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
          <img src={p.img} alt={p.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-grow">
            <p className="font-semibold">{p.name}</p>
            <p className="text-gray-600">${p.price}</p>
          </div>
        </div>
      ))}
       <div className="flex justify-between items-center border-t pt-4 text-xl font-semibold">
        <span>Total:</span>
        <span>${total}</span>
      </div>
        <button
        onClick={() => alert("Thanks for shopping!")}
        className="w-full py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition duration-300"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
