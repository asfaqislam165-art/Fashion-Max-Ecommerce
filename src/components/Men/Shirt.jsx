import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Shirt = () => {
  const handleAddToCart = (name, price) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = { name, price };
    const updatedCart = [...existingCart, newItem];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert(`${name} has been added to your cart!`);
  };
  
  return (
    <div>

      <br />
      <div className="btn-group mx-5">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Man Collections
        </button>
        <ul className="dropdown-menu bg-primary">
          <li><Link className="dropdown-item text-light" to="/shirt">Shirt</Link></li>
          <li><Link className="dropdown-item text-light" to="/pant">Pant</Link></li>
          <li><Link className="dropdown-item text-light" to="/shoes">Shoes</Link></li>
          <li><Link className="dropdown-item text-light" to="/sunglass">Sunglass</Link></li>
          <li><Link className="dropdown-item text-light" to="/watch">Watch</Link></li>
        </ul>
      </div><br />

      <h1 className="text-center flex items-center justify-center mt-3"><i className="text-blue-500">All Shirt Collections For Men </i></h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 justify-items-center">

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">Red </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m20.jpeg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m3.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div> 

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m4.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m5.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m6.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m7.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m8.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m9.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m10.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m11.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m12.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m13.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m14.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m15.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m16.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m17.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m18.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Red</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm mb-8">
          <figure>
            <img src="src\Images\Shirt\m19.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Blue</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <p><i className="fa-solid fa-tags"></i> Price : $40</p>
            <select>
              <option>Size: S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="card-actions justify-end ">
              <button 
                onClick={() => handleAddToCart("Red Shirt", 40)} 
                className="btn btn-primary"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to cart
              </button>
            </div>
          </div>
        </div><br />
      </div>

  
      <div className="flex justify-center my-6">
        <div className="join bg-blue-500 border-2 border-red-500 rounded">
          <Link to="/shirt">
            <button className="join-item btn text-white border-white">1</button>
          </Link>
          
          <Link to="/pant">
            <button className="join-item btn btn-active text-white border-white">2</button>
          </Link>
          
          <Link to="/shoes">
            <button className="join-item btn text-white border-white">3</button>
          </Link>
          
          <Link to="/watch">
            <button className="join-item btn text-white border-white">4</button>
          </Link>

          <Link to="/sunglass">
            <button className="join-item btn text-white border-white">5</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Shirt