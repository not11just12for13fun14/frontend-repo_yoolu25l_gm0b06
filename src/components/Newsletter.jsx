import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black text-white p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Join our insider list</h3>
            <p className="mt-2 text-white/80 max-w-xl">Be the first to know about limited drops, private sales, and seasonal stories. No spam, ever.</p>
          </div>
          <form className="w-full md:w-auto flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white rounded-full pl-3 pr-1 py-1 w-full md:w-96">
              <Mail className="w-4 h-4 text-gray-500" />
              <input type="email" required placeholder="Enter your email" className="flex-1 bg-transparent text-gray-900 placeholder:text-gray-500 outline-none px-2 py-2" />
              <button type="submit" className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:opacity-90">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
