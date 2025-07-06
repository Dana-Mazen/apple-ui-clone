function Footer(){
    return(
     <footer className="w-full bg-gray-300 text-white py-12">
    <div className="w-full px-6">

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="text-xl text-gray-900 font-semibold mb-4">Apple</h3>
          <ul>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Store</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Mac</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">iPad</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">iPhone</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Watch</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl text-gray-900 font-semibold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Apple Music</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Apple TV+</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">iCloud</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">App Store</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl text-gray-900 font-semibold mb-4">Account</h3>
          <ul>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Sign in</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Create Apple ID</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Apple Store Account</a></li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl text-gray-900 font-semibold mb-4">About</h3>
          <ul>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Newsroom</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Apple Leadership</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Apple Values</a></li>
            <li><a href="#" className="text-gray-700 hover:underline hover:text-white">Jobs</a></li>
          </ul>
        </div>
      </div>
        <p className="text-gray-900" >&copy; 2024 Apple Inc. All rights reserved.</p>
      </div>
  </footer>
    );
}
export default Footer;