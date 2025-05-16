import Link from 'next/link';
import Nav from './components/Nav';

// This function runs at build time
export async function generateStaticParams() {
  return [];
}

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Nav />
      <main className='container mx-auto px-4 py-12'>
        <section className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>Welcome to Our Store</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Discover amazing products at unbeatable prices</p>
        </section>

        <section className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='bg-white p-8 rounded-xl shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Quality Products</h2>
            <p className='text-gray-600'>We offer only the highest quality products from trusted brands.</p>
          </div>

          <div className='bg-white p-8 rounded-xl shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Fast Shipping</h2>
            <p className='text-gray-600'>Get your products delivered quickly and securely.</p>
          </div>

          <div className='bg-white p-8 rounded-xl shadow-md'>
            <h2 className='text-2xl font-semibold mb-4 text-gray-800'>24/7 Support</h2>
            <p className='text-gray-600'>Our customer service team is always here to help you.</p>
          </div>
        </section>

        <div className='text-center mt-12'>
          <Link href='/products'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300'>
              Browse Products
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
