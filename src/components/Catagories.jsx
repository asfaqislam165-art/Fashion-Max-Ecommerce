import React from 'react'
import { Link } from 'react-router-dom'

const Catagories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        
        {/* Women Collection Card */}
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
        
        {/* Man Collection Card */}
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
              <Link to="/shirt">
                <button className="btn btn-primary"><i className="fa-solid fa-eye"></i> See All</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Kid Collection Card */}
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
    </div>
  )
}

export default Catagories