import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';

const NavLink = ({ children }) => (
  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="text-xl font-extrabold tracking-tight">
            VogueLine
          </a>
        </div>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink>New Arrivals</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Accessories</NavLink>
          <NavLink>Sale</NavLink>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center px-3 py-2 rounded-full bg-gray-100 focus-within:ring-2 focus-within:ring-black/10">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 bg-transparent outline-none text-sm placeholder:text-gray-500"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[80%] bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <NavLink>New Arrivals</NavLink>
              <NavLink>Women</NavLink>
              <NavLink>Men</NavLink>
              <NavLink>Accessories</NavLink>
              <NavLink>Sale</NavLink>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
