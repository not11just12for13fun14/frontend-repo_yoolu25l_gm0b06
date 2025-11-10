import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Structured Blazer',
    price: 129,
    image: 'https://images.unsplash.com/photo-1633655442168-c6ef0ed2f984?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJ1Y3R1cmVkJTIwQmxhemVyfGVufDB8MHx8fDE3NjI3NTQ1MzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.7,
  },
  {
    id: 2,
    title: 'Relaxed Linen Shirt',
    price: 79,
    image: 'https://images.unsplash.com/photo-1758273239402-d0db6ceeb260?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWxheGVkJTIwTGluZW4lMjBTaGlydHxlbnwwfDB8fHwxNzYyNzU0NTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Tailored Trousers',
    price: 99,
    image: 'https://images.unsplash.com/photo-1643960987246-3d728870f530?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3JlZCUyMFRyb3VzZXJzfGVufDB8MHx8fDE3NjI3NTQ1MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Minimal Leather Bag',
    price: 149,
    image: 'https://images.unsplash.com/photo-1758273239402-d0db6ceeb260?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWxheGVkJTIwTGluZW4lMjBTaGlydHxlbnwwfDB8fHwxNzYyNzU0NTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    rating: 4.8,
  },
];

function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm px-4 py-2 rounded-full bg-black text-white">Quick Add</button>
      </div>
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="font-medium">{product.title}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
          </div>
        </div>
        <span className="font-semibold">${product.price}</span>
      </div>
    </div>
  );
}

export default function FeaturedGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured</h2>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Shop all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
