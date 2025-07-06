import { useSwipeable } from 'react-swipeable';
import { useEffect, useState } from "react";
const images = [
  "/assets/carousel1.jpg",
  "/assets/carousel2.jpg",
  "/assets/carousel3.jpg",
  "/assets/carousel4.jpg"
];
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  //slide every 5 secs
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []); //done when component mounts

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
const handlers = useSwipeable({
  onSwipedLeft: nextSlide,
  onSwipedRight: prevSlide,
  preventScrollOnSwipe: true,//no vertical scroll
  trackMouse: true, //allows swipe with mouse
});

  return (
    <div className="relative w-full overflow-hidden">
      <div  {...handlers} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover h-[220px] sm:h-[320px] md:h-[420px] lg:h-[560px] xl:h-[640px] flex-shrink-0"
          />
        ))}
      </div>

     <button
  onClick={prevSlide}
  className="hidden md:flex absolute top-1/2 left-4 transform -translate-y-1/2 
             bg-gray-100 hover:bg-gray-300 bg-opacity-70 hover:bg-opacity-100
             text-gray-800 hover:text-black
             rounded-full w-10 h-10 items-center justify-center 
             shadow-md transition duration-300 z-20"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  onClick={nextSlide}
  className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 
             bg-gray-100 hover:bg-gray-300 bg-opacity-70 hover:bg-opacity-100
             text-gray-800 hover:text-black
             rounded-full w-10 h-10 items-center justify-center 
             shadow-md transition duration-300 z-20"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

      {/*dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-white" : "bg-gray-400"} transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
