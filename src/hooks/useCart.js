import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  return useContext(CartContext);
}
//to use cart = useCart instead of cart= useContext(CartContext)