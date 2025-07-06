import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}
//to access AuthContext easily instead of writing auth = 
//useContext(AuthContext);
