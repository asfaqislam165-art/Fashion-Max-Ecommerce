import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(src/Images/Home/1.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="text-blue-500 font-bold">
            <h1><i className="fa-solid fa-user-tie"></i> Fashion Max</h1>
            <h4 className="mb-6">
              Fashion for Every Age, Every Mood <br />
            </h4><br />
            <Link to="/catagories">
              <button className="btn btn-primary"><i className="fa-solid fa-user-tie"></i> Choose Product </button>
            </Link>
          </div>
        </div>
      </div>

      <br /><br />
      
      
      <div className="text-center flex item-center justify-center overflow-hidden">
        <span className="text-rotate text-5xl sm:text-7xl">
          <span className="justify-items-center text-blue-500">
            <span><i>Fashion</i></span>{" "}
            <span><i>Max</i></span>{" "}
            <span><i>Fashion</i></span>{" "}
            <span><i>Max</i></span>{" "}
            <span><i>Fashion</i></span>{" "}
            <span><i>Max </i></span>
          </span>
        </span>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          
         
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="src\Images\Collection\Female.jpg"
                alt="Women Collection"
                className="rounded-xl object-cover h-64 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Women All Collection</h2>
              <p>Discover stylish women’s fashion designed to keep you elegant, confident, and trendy every day.</p>
              <div className="card-actions mt-4">
                <Link to="/top">
                  <button className="btn btn-primary"><i className="fa-solid fa-eye"></i> See All</button>
                </Link>
              </div>
            </div>
          </div>
          
          
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src="src/Images/Collection/male.jpg"
                alt="Man Collection"
                className="rounded-xl object-cover h-64 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Man All Collection</h2>
              <p>Explore modern men’s fashion designed for comfort, confidence, and everyday style.</p> 
              <div className="card-actions mt-4">
                <Link to="/Shirt">
                  <button className="btn btn-primary"><i className="fa-solid fa-eye"></i> See All</button>
                </Link>
              </div>
            </div>
          </div>

       
          <div className="card bg-base-100 w-96 shadow-sm md:col-span-2 lg:col-span-1">
            <figure className="px-10 pt-10">
              <img
                src="src\Images\Collection\child.jpg"
                alt="Kid Collection"
                className="rounded-xl object-cover h-64 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Kid All Collection</h2>
              <p>Discover adorable kids’ fashion with comfy, playful, and stylish outfits for every little adventure.</p>
              <div className="card-actions mt-4">
                <Link to="/suit">
                  <button className="btn btn-primary"><i className="fa-solid fa-eye"></i> See All</button>
                </Link>
              </div> 
            </div>
          </div>

        </div>
      </div><br /><br />
    
     
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
        <video
          src="src/Video/Fashion Max .mp4"
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="auto"
          className="w-full h-auto max-h-450px object-contain rounded-xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <br /><br />

      
      <footer className="bg-emerald-100">
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

          <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">

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

          <p className="border-t border-gray-200 pt-6 text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fashion Max. All rights reserved.
          </p>

        </div>
      </footer>
    </div>
  )
}

export default Home