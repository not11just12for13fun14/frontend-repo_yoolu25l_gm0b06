import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0u0X9X8Q7kS4W1fW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-black text-white px-3 py-1 text-xs uppercase tracking-widest">New Drop</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
              Elevate Your Everyday Style
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Discover our curated collection of modern silhouettes, premium fabrics, and timeless essentials for every wardrobe.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition">Shop Collection</a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 hover:border-gray-900 font-medium transition">Explore Lookbook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
    </section>
  );
}
