import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AllProducts from './pages/allProducts';
import About from './pages/about';
import Contact from './pages/contact';
import NotFound from "./pages/NotFound"; 
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartProvider";
import { AuthProvider } from "./context/AuthProvider"; 
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <AuthProvider>
     <CartProvider>
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar />
       <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </main>
    </div>
    </Router></CartProvider></AuthProvider>
  )
}

export default App;
