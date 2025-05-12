'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-blue-600">NextShop</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href='/'
              className={`font-medium transition-colors duration-200 ${pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              href='/products'
              className={`font-medium transition-colors duration-200 ${pathname === '/products' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Products
            </Link>
            <Link 
              href='/about'
              className={`font-medium transition-colors duration-200 ${pathname === '/about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3 py-3">
              <Link 
                href='/'
                className={`px-3 py-2 rounded-md ${pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href='/products'
                className={`px-3 py-2 rounded-md ${pathname === '/products' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href='/about'
                className={`px-3 py-2 rounded-md ${pathname === '/about' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
