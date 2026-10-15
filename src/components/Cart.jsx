import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  let runningTotal = 0;

  return (
    <div>
      <div className="overflow-x-auto p-4 sm:p-10 max-w-3xl w-full border-2 mx-auto mt-18 rounded-lg shadow-sm">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Number</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-red-500">Cart is empty</td>
              </tr>
            ) : (
              cartItems.map((item, index) => {
                runningTotal += item.price;
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.name}</td>
                    <td>
                      ${item.price}{" "}
                      <button onClick={() => handleRemove(index)} className="ml-2 text-red-500 hover:text-red-700">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                    <td>${runningTotal}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <br /><br />

      <i><h2 className="font-semibold text-center text-blue-500">Your ItemList & Total Price</h2></i>
      <br /><br />

      <Link to="/payment">
        <button className="mx-auto text-white flex justify-center items-center bg-blue-500 w-30 h-10 rounded hover:bg-blue-600 transition">
          <i className="fa-solid fa-spinner mr-2"></i> Payment
        </button>
      </Link><br />

      <h5 className="text-center text-gray-600 px-4">After Payment You will find your product in 24 hour in Bangladesh any place</h5>
    </div>
  )
}

export default Cart