import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function Hero() {
     const { user } = useAuth(); 
  return (
     <div className="px-4 sm:px-8 lg:px-16 max-w-screen-xl mx-auto">
  <div id="series" className="container mx-auto mt-48 p-4">
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
    
      <div className="lg:w-1/2 w-full text-center pt-4 lg:text-left lg:pr-8">
        <h1 className="text-4xl lg:text-8xl font-bold text-black mb-4">
          Apple Watch Series 2
        </h1>
        <h2 className="text-gray-600 text-4xl mb-6 lg:pt-5">
          The ultimate device
for a healthy life.
        </h2>
        <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:pt-10">
            <Link to={user ? "/products" : "/login"}>
          <button className="bg-blue-500 text-lg font-bold hover:bg-blue-600 text-white px-8 py-4 rounded-full">
            Purchase Now
          </button></Link>
          <Link to="/about">
          <button className="bg-gray-200 text-lg font-bold hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-full">
            Learn More
          </button></Link>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
        <img src="/assets/watchHero.png
        " alt="apple watch" className="rounded-lg max-w-full h-auto"></img>
      </div>
    </div>
  </div></div>
  );
}

export default Hero;