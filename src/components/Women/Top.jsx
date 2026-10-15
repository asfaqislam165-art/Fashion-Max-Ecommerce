import React from 'react'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'

const Top = () => {
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
        Women Collections
      </button>
      <ul className="dropdown-menu bg-primary">
        <li><Link className="dropdown-item text-light" to="/top">Top</Link></li>
              <li><Link className="dropdown-item text-light" to="/bottom">Bottom</Link></li>
              <li><Link className="dropdown-item text-light" to="/shoestwo">Shoes</Link></li>
              <li><Link className="dropdown-item text-light" to="/bag">Bag</Link></li>
               <li><Link className="dropdown-item text-light" to="/earrings">Earrings</Link></li>
        
      </ul>
          </div><br />
          
    
    
          <h1 className="text-center flex items-center justify-center mt-3"><i className="text-blue-500">All Top Collections For Women </i></h1>
          
    
    
        
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 justify-items-center">
          
       
          
          <div className="card bg-base-100 w-80 shadow-sm mb-8">
    <figure>
      <img
        src="src\Images\Female\Top\1.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\2.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\3.jpeg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\4.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\5.jpeg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\6.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\7.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\8.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\9.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\10.jpeg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\20.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\11.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\12.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\13.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\14.jpg"
        alt="Shoes" />
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
      <img
        src="src\Images\Female\Top\15.jpg"
        alt="Shoes" />
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
          
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          
          <div className="card bg-base-100 w-80 shadow-sm ">
    <figure>
      <img
        src="src\Images\Female\Top\16.jpg"
        alt="Shoes" />
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
          
    
    
    
    
    
          <div className="card bg-base-100 w-80 shadow-sm">
    <figure>
      <img
        src="src\Images\Female\Top\17.jpg"
        alt="Shoes" />
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
          
    
    
    
    
    
          <div className="card bg-base-100 w-80 shadow-sm">
    <figure>
      <img
        src="src\Images\Female\Top\18.jpg"
        alt="Shoes" />
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
          
    
    
    
    
    
          <div className="card bg-base-100 w-80 shadow-sm">
    <figure>
      <img
        src="src\Images\Female\Top\19.jpg"
        alt="Shoes" />
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
                <Link to="/top">
                  <button className="join-item btn text-white border-white">1</button>
                </Link>
                
                <Link to="/bottom">
                  <button className="join-item btn btn-active text-white border-white">2</button>
                </Link>
        
                <Link to="/shoestwo">
                  <button className="join-item btn text-white border-white">3</button>
                </Link>
                
                <Link to="/bag">
                  <button className="join-item btn text-white border-white">4</button>
                </Link>
        
                <Link to="/earrings">
                    <button className="join-item btn text-white border-white">5</button>
                </Link>
            </div>
          </div>
    
          
    
          </div>
  )
}

export default Top