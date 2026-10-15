import React from 'react'
import { Link } from 'react-router-dom'

const Congrats = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-blue-500">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">Congratulations</h1>
            <p className="py-6 text-white">
              Congratulations on choosing Fashion Max! 🎉 Discover the latest fashion trends, explore your favorite styles, and enjoy a wonderful shopping experience with us. Thank you for being part of Fashion Max!
            </p>
            
            <Link to="/">
              <button className="bg-blue-800 hover:bg-blue-900 transition text-white rounded w-32 h-12 border border-white flex items-center justify-center mx-auto gap-2">
                Back <i className="fa-solid fa-house"></i> Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Congrats