function Themes(){
    return(

  <div className="container mx-auto lg:min-w-80 lg:h-96 mt-16 flex justify-center">
    <div className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 relative w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
    
      <div className="absolute inset-0">
        <img 
          src="/assets/themes.jpg" 
          alt="Background" 
          className="rounded-2xl object-cover w-full h-full opacity-90 filter brightness-50"
        ></img>
      </div>
     
      <div id="themes" className="relative z-10 text-center text-white">
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-5 mb-2">Apple Watch Series 2 Theme</h2>
        <p className="text-white text-lg lg:mb-8 mb-6">Experience innovation on your wrist with the Apple Watch. Stay connected, track your fitness, and enjoy seamless convenience—all in a sleek, stylish design.</p>
      
        <div className="grid grid-cols-2 lg:pt-5 md:grid-cols-4 gap-4">
         
          <div className="flex flex-col items-center">
            <div 
              className="p-3 lg:p-8 bg-white text-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z"/>
              </svg>
              
            </div>
            <p className="text-sm lg:text-lg lg:mt-4 mt-2">Water proof</p>
          </div>
         
          <div className="flex flex-col items-center">
            <div 
              className="p-3 lg:p-8 bg-white text-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="7" width="18" height="10" rx="2" ry="2"></rect>
                <line x1="22" y1="10" x2="22" y2="14"></line>
              </svg>
              
            </div>
            <p className="text-sm lg:mt-4 lg:text-lg mt-2">Battery life</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div 
              className="p-3 lg:p-8 bg-white text-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="13" r="9"></circle>
                <polyline points="12 9 12 13 15 15"></polyline>
                <line x1="5" y1="3" x2="2" y2="6"></line>
                <line x1="19" y1="3" x2="22" y2="6"></line>
              </svg>
              
            </div>
            <p className="text-sm lg:text-lg lg:mt-4 mt-2">Alarm</p>
          </div>
        
          <div className="flex flex-col items-center">
            <div 
              className="p-3 lg:p-8 bg-white text-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className="w-6 h-6">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M4 12h2m16 0h-2M12 4V2m0 20v-2m-7.07-7.07l-1.42 1.42m14.14 0l1.42-1.42"></path>
              </svg>
            </div>
            <p className="text-sm lg:text-lg lg:mt-4 mt-2">Weather</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Themes;