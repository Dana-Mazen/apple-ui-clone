import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();//get login function from authContext
  const navigate = useNavigate();//router helper
//local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//runs when form submitted
  const handleLogin = (e) => { 
    e.preventDefault();//prevent browser from reloading
    const success = login(email, password);//calls AuthProvider.login
    if (success) {

      navigate("/products");
    } else {
      setError("Invalid Apple ID or password.");
    }
  };

  return (
    <div className="pt-56 lg:pt-40 md:pt-56 sm:pt-64 min-h-screen px-4 flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6">Sign in with Apple ID</h2>
      <form
        onSubmit={handleLogin} 
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow"
      >
        {error && (
          <p className="text-red-600 text-sm mb-4 font-medium">{error}</p>
        )}
        <input
          type="email"
          placeholder="Apple ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}//value user just typed
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          required
        />
        <div className="text-center text-sm mb-6">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Apple ID or password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
        >
          Sign In
        </button>
         <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="w-full bg-white border border-gray-400 text-gray-800 py-3 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        >
          <img
            src="https://toppng.com/uploads/preview/google-logo-png-hd-11659866438lpwuqaonqq.png"
            alt="Google logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </form>
        <div className="mt-8 text-sm text-gray-600 space-x-4">
        <a href="#" className="hover:underline">Create Apple ID</a>
        <span>|</span>
        <a href="#" className="hover:underline">Privacy</a>
        <span>|</span>
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>
    </div>
  );
}
