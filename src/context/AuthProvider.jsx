import { useState } from "react";
import { AuthContext } from "./AuthContext";
//This login is only for demonstration.
//no backend authentication is implemented.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "apple@user.com" && password === "password123") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
