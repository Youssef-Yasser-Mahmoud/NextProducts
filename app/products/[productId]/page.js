/* eslint-disable @next/next/no-img-element */
'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Page() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  const { productId } = useParams();

  useEffect(() => {
    async function fetchingProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchingProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  // Handle case where product might not be found
  if (!product || !product.id) {
    return (
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-2xl font-bold mb-4'>Product Not Found</h1>
        <p className='mb-6'>The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link
          href='/products'
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300'
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className='flex'>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns='http://www.w3.org/2000/svg'
            className={`h-5 w-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
        <span className='ml-2 text-gray-600'>{product.rating?.toFixed(1) || '0.0'}</span>
      </div>
    );
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Breadcrumb */}
      <nav className='flex mb-8 text-sm'>
        <Link href='/' className='text-gray-500 hover:text-blue-600'>
          Home
        </Link>
        <span className='mx-2 text-gray-500'>/</span>
        <Link href='/products' className='text-gray-500 hover:text-blue-600'>
          Products
        </Link>
        <span className='mx-2 text-gray-500'>/</span>
        <span className='text-gray-900 font-medium'>{product.title}</span>
      </nav>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {/* Product Images */}
        <div className='space-y-4'>
          <div className='bg-white rounded-lg overflow-hidden border border-gray-200 aspect-square'>
            <img
              src={product.images?.[activeImage] || product.thumbnail}
              alt={product.title}
              className='w-full h-full object-contain'
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className='flex space-x-2 overflow-x-auto pb-2'>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} - view ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className='space-y-6'>
          <div>
            <div className='flex items-center'>
              <span className='px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full'>
                {product.category}
              </span>
              {product.stock > 0 ? (
                <span className='ml-3 px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full'>
                  In Stock
                </span>
              ) : (
                <span className='ml-3 px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full'>
                  Out of Stock
                </span>
              )}
            </div>
            <h1 className='text-3xl font-bold mt-2'>{product.title}</h1>
            <div className='flex items-center mt-2'>
              <span className='text-gray-600 mr-2'>Brand:</span>
              <span className='font-medium'>{product.brand}</span>
            </div>
          </div>

          <div className='flex items-center'>
            {renderStars(product.rating)}
            <span className='ml-4 text-sm text-blue-600'>{product.reviews?.length || 0} reviews</span>
          </div>

          <div className='border-t border-b border-gray-200 py-4'>
            <div className='flex items-baseline'>
              <span className='text-3xl font-bold'>${product.price?.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className='ml-3 text-lg text-gray-500 line-through'>
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
              )}
              {product.discountPercentage > 0 && (
                <span className='ml-3 px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full'>
                  {Math.round(product.discountPercentage)}% OFF
                </span>
              )}
            </div>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Description</h2>
            <p className='text-gray-700'>{product.description}</p>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {product.tags.map((tag, index) => (
                <span key={index} className='px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full'>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Add to Cart */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex border border-gray-300 rounded-lg overflow-hidden w-32'>
              <button className='px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700'>-</button>
              <input type='number' min='1' value='1' className='w-full text-center focus:outline-none' readOnly />
              <button className='px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700'>+</button>
            </div>
            <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300'>
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
            <div className='flex flex-col'>
              <span className='text-gray-600'>SKU:</span>
              <span className='font-medium'>{product.sku || 'N/A'}</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-600'>Availability:</span>
              <span className='font-medium'>
                {product.availabilityStatus || (product.stock > 0 ? 'In Stock' : 'Out of Stock')}
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-600'>Shipping:</span>
              <span className='font-medium'>{product.shippingInformation || 'Standard shipping'}</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-600'>Return Policy:</span>
              <span className='font-medium'>{product.returnPolicy || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className='mb-12'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-8'>
            <button className='border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'>
              Specifications
            </button>
            <button className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'>
              Reviews ({product.reviews?.length || 0})
            </button>
          </nav>
        </div>

        <div className='py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-medium mb-4'>Product Specifications</h3>
              <div className='space-y-3'>
                {product.dimensions && (
                  <div className='grid grid-cols-2 border-b border-gray-200 pb-2'>
                    <span className='text-gray-600'>Dimensions (W×H×D):</span>
                    <span>{`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}</span>
                  </div>
                )}
                {product.weight && (
                  <div className='grid grid-cols-2 border-b border-gray-200 pb-2'>
                    <span className='text-gray-600'>Weight:</span>
                    <span>{product.weight} g</span>
                  </div>
                )}
                {product.warrantyInformation && (
                  <div className='grid grid-cols-2 border-b border-gray-200 pb-2'>
                    <span className='text-gray-600'>Warranty:</span>
                    <span>{product.warrantyInformation}</span>
                  </div>
                )}
                {product.minimumOrderQuantity && (
                  <div className='grid grid-cols-2 border-b border-gray-200 pb-2'>
                    <span className='text-gray-600'>Minimum Order:</span>
                    <span>{product.minimumOrderQuantity} units</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className='text-lg font-medium mb-4'>Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <div className='space-y-4'>
                  {product.reviews.map((review, index) => (
                    <div key={index} className='border-b border-gray-200 pb-4 last:border-b-0'>
                      <div className='flex justify-between items-start'>
                        <div>
                          <p className='font-medium'>{review.reviewerName}</p>
                          <div className='flex text-yellow-400 mt-1'>
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill={i < review.rating ? 'currentColor' : 'none'}
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
                        </div>
                        <span className='text-sm text-gray-500'>{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      <p className='mt-2 text-gray-700'>{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-gray-500'>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Placeholder */}
      <div>
        <h2 className='text-2xl font-bold mb-6'>You May Also Like</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className='bg-gray-100 rounded-lg p-4 h-48 animate-pulse'>
              <div className='bg-gray-200 h-24 rounded-md mb-2'></div>
              <div className='bg-gray-200 h-4 rounded w-3/4 mb-2'></div>
              <div className='bg-gray-200 h-4 rounded w-1/2'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
