import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartCount(savedCart.length);
    };

    updateCartCount();

    const interval = setInterval(updateCartCount, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="bg-emerald-100 w-full py-3 shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

         
          <Link
            className="flex items-center gap-2 font-bold text-xl text-emerald-800 focus:opacity-80"
            to="/"
            aria-label="Brand"
          >
            <i className="fa-solid fa-user-tie"></i> Fashion Max
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-6 text-gray-700 font-medium">

            <li>
              <Link
                className="hover:text-emerald-700 transition"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:text-emerald-700 transition" to="/catagories">
                Catagories
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 hover:text-emerald-700 transition focus:outline-none"
                aria-expanded={isOpen}
              >
                All Collections
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>

            <li>
              <Link className="flex items-center gap-1.5 relative hover:text-emerald-700 transition" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i> Cart

                {cartCount > 0 && (
                  <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-1">
                    <span className="w-2 h-2 bg-emerald-200 rounded-full animate-ping"></span>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            <li>
              <Link className="hover:text-emerald-700 transition" to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link className="hover:text-emerald-700 transition" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-emerald-700 transition" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;