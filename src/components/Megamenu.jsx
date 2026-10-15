import React from 'react';
import { Link } from 'react-router-dom';

const Megamenu = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 top-70px z-50 w-full border border-gray-200 bg-white p-4 shadow-lg sm:p-6">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">


        <div className="p-4">
          <h3 className="mb-4 border-b pb-2 text-lg font-bold text-gray-900">
            Men
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/shirt" className="hover:text-emerald-600 transition">
                Shirts
              </Link>
            </li>
            <li>
              <Link to="/pant" className="hover:text-emerald-600 transition">
                Pants
              </Link>
            </li>
            <li>
              <Link to="/shoes" className="hover:text-emerald-600 transition">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="/watch" className="hover:text-emerald-600 transition">
                Watch
              </Link>
            </li>
            <li>
              <Link to="/sunglass" className="hover:text-emerald-600 transition">
                Sunglass
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="p-4">
          <h3 className="mb-4 border-b pb-2 text-lg font-bold text-gray-900">
            Women
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/top" className="hover:text-emerald-600 transition">
                Top
              </Link>
            </li>
            <li>
              <Link to="/bottom" className="hover:text-emerald-600 transition">
                Bottom
              </Link>
            </li>
            <li>
              <Link to="/shoestwo" className="hover:text-emerald-600 transition">
                Shoes
              </Link>
            </li>
            <li>
              <Link to="/earrings" className="hover:text-emerald-600 transition">
                Earrings
              </Link>
            </li>
            <li>
              <Link to="/bag" className="hover:text-emerald-600 transition">
                Bag
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="p-4 sm:col-span-2 md:col-span-1">
          <h3 className="mb-4 border-b pb-2 text-lg font-bold text-gray-900">
            Kids
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/shorts" className="hover:text-emerald-600 transition">
                Baby Suit
              </Link>
            </li>
            <li>
              <Link to="/suit" className="hover:text-emerald-600 transition">
                Baby Shorts
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Megamenu;