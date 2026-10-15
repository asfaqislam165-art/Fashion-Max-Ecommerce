import React from 'react' 
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
      
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <Link to="#" className="text-3xl font-bold text-teal-600 flex items-center gap-2">
                <i className="fa-solid fa-user-tie"></i> Fashion Max
              </Link>
      
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Your Style, Your Choice, Your Fashion.
                <br />
                Trendy Fashion for Men, Women & Kids.
                <br />
                Discover your perfect look with Fashion Max.
              </p>
            </div>
      
            <ul className="mt-8 flex flex-wrap justify-start gap-6 sm:mt-0 sm:justify-end">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"
                  className="text-gray-700 transition hover:text-teal-600">
                  Facebook
                </a>
              </li>
      
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="text-gray-700 transition hover:text-teal-600">
                  Instagram
                </a>
              </li>
      
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer"
                  className="text-gray-700 transition hover:text-teal-600">
                  X
                </a>
              </li>
      
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer"
                  className="text-gray-700 transition hover:text-teal-600">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
      
          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
      
            <div>
              <p className="font-medium text-gray-900">Shop</p>
      
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Men's Collection
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Women's Collection
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Kids' Collection
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    New Arrivals
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
      
            <div>
              <p className="font-medium text-gray-900">Company</p>
      
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    About Us
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Our Collections
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Contact Us
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Login / My Account
                  </Link>
                </li>
              </ul>
            </div>
      
            <div>
              <p className="font-medium text-gray-900">Customer Service</p>
      
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Shopping Cart
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Shipping & Delivery
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Returns & Exchanges
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    FAQs
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
      
            <div>
              <p className="font-medium text-gray-900">Legal</p>
      
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Terms & Conditions
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Privacy Policy
                  </Link>
                </li>
      
                <li>
                  <Link to="#" className="text-gray-700 transition hover:text-teal-600">
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
      
          </div>
      
          <p className="border-t border-gray-100 pt-6 text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fashion Max. All rights reserved.
          </p>
      
        </div>
      </footer>
    </div>
  )
}

export default Contact