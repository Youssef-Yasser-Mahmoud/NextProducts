import Nav from './components/Nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Static featured products data
  const featuredProducts = [
    {
      id: 1,
      title: 'Smartphone X Pro',
      description: 'Latest smartphone with advanced camera and long battery life',
      price: 899.99,
      image: '/file.svg',
      category: 'Electronics'
    },
    {
      id: 2,
      title: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery',
      price: 249.99,
      image: '/globe.svg',
      category: 'Audio'
    },
    {
      id: 3,
      title: 'Smart Watch Series 5',
      description: 'Track your fitness and stay connected with this advanced smartwatch',
      price: 349.99,
      image: '/window.svg',
      category: 'Wearables'
    },
  ];

  // Static categories
  const categories = [
    { name: 'Electronics', icon: '💻', count: 42 },
    { name: 'Clothing', icon: '👕', count: 56 },
    { name: 'Home & Kitchen', icon: '🏠', count: 38 },
    { name: 'Beauty', icon: '✨', count: 24 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Products</h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">Shop the latest trends and innovations with our curated collection of high-quality products.</p>
              <div className="flex space-x-4">
                <Link href="/products" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Shop Now
                </Link>
                <Link href="/about" className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <Image 
                  src="/next.svg" 
                  alt="Featured Product" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-4 bg-gray-100 flex justify-center">
                  <div className="relative w-40 h-40">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter to receive updates on new products, special offers, and more.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NextShop</h3>
              <p className="text-gray-400">Your one-stop shop for all your needs. Quality products at competitive prices.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-300">Products</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Shop Street</p>
                <p>Shopville, SH 12345</p>
                <p className="mt-2">Email: info@nextshop.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
