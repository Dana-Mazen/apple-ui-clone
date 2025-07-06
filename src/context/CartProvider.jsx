import { useState } from "react";
import { CartContext } from "../context/CartContext";
//useSate creates and updates the component
//cartContext is object created using createContext to allow 
//any child comp. to access shared cart using useContext
export function CartProvider ({ children }){//wraps around app<-children
  const [items, setItems] = useState([]);//array holds products in cart
  const [toast, setToast] = useState(null);//temporary string 

  const addItem = (product) => {
    setItems((prev) => [...prev, product]);//prev is current cart and adds new product
    //to show toast
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(null), 3000);//clears after 3 secs
  };

  return (
    <CartContext.Provider value={{ items, addItem, toast }}>
      {children}
      {/*toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade">
          {toast}
        </div>
      )}
    </CartContext.Provider>
  );
};
