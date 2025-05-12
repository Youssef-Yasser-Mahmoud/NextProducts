/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchingProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const result = await res.json();
        setProducts(result.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchingProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen bg-gray-50'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Nav />
      
      <div className='container mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-center mb-2 text-gray-800'>Our Products</h1>
        <p className='text-center text-gray-600 mb-10 max-w-2xl mx-auto'>Discover our curated collection of premium products designed to enhance your lifestyle.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
            >
              <div className='relative pb-[70%] overflow-hidden bg-gray-100 group'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-3 right-3'>
                  <span className='bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full'>
                    {product.category}
                  </span>
                </div>
                {product.discountPercentage > 0 && (
                  <div className='absolute top-3 left-3'>
                    <span className='bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full'>
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  </div>
                )}
              </div>

              <div className='p-5'>
                <h2 className='text-xl font-semibold line-clamp-1 text-gray-800 mb-2'>{product.title}</h2>
                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{product.description}</p>

                <div className='flex justify-between items-center mb-4'>
                  <div className='flex items-center'>
                    <span className='text-xl font-bold text-gray-900'>${product.price.toFixed(2)}</span>
                    {product.discountPercentage > 0 && (
                      <span className='text-sm text-gray-500 line-through ml-2'>
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className='flex items-center bg-gray-50 px-2 py-1 rounded-lg'>
                    <div className='flex text-yellow-400 mr-1'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-4 w-4'
                          fill={i < Math.round(product.rating) ? 'currentColor' : 'none'}
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                          />
                        </svg>
                      ))}
                    </div>
                    <span className='text-sm font-medium text-gray-700'>{product.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className='flex justify-between items-center'>
                  <span
                    className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${product.stock > 20 ? 'bg-green-100 text-green-800' : product.stock > 0 ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {product.stock > 20 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                  </span>
                  
                  <Link href={`/products/${product.id}`}>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center'>
                      View
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
