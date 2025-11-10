const categories = [
  {
    title: 'Women',
    image: 'https://images.unsplash.com/photo-1758273239402-d0db6ceeb260?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWxheGVkJTIwTGluZW4lMjBTaGlydHxlbnwwfDB8fHwxNzYyNzU0NTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Men',
    image: 'https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXb21lbnxlbnwwfDB8fHwxNzYyNzExMjY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1758273239402-d0db6ceeb260?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWxheGVkJTIwTGluZW4lMjBTaGlydHxlbnwwfDB8fHwxNzYyNzU0NTMwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Essentials',
    image: 'https://images.unsplash.com/photo-1643960987246-3d728870f530?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3JlZCUyMFRyb3VzZXJzfGVufDB8MHx8fDE3NjI3NTQ1MzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Categories() {
  return (
    <section id="shop" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <a key={c.title} href="#" className="group relative overflow-hidden rounded-2xl bg-gray-100">
              <img src={c.image} alt={c.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium">{c.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
