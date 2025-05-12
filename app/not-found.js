import Link from 'next/link';

function Error() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        
        <div className="relative">
          <div className="h-1 bg-blue-600 w-24 md:w-48 mx-auto my-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Page Not Found</h2>
        </div>
        
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
      
      <div className="mt-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} NextShop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Error;
