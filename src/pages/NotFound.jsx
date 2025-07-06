function NotFound(){
    return(
  <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Go Home
          </a>
        </div>
      </main></div>
    );
}
export default NotFound;