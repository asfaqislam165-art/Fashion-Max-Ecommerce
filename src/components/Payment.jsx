import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
      <form
        action="#"
        className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 mt-8 p-6 shadow-md"
      >
        <h4 className="text-center font-bold text-lg text-gray-800">
          <i className="fa-solid fa-money-bill-1"></i> Complete Your Payment
        </h4>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="name">
            <i className="fa-solid fa-file-signature"></i> Name
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="email">
            <i className="fa-solid fa-envelope"></i> Email
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="phone">
            <i className="fa-solid fa-phone-volume"></i> Phone
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="phone"
            type="text"
            placeholder="Your Phone"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="district">
            <i className="fa-solid fa-location-dot"></i> District
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="district"
            type="text"
            placeholder="Your District"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="subdistrict">
            <i className="fa-solid fa-location-dot"></i> Sub District
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="subdistrict"
            type="text"
            placeholder="Your Subdisctrict"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="place">
            <i className="fa-solid fa-location-dot"></i> Place/Village/Ward
          </label>
          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
            id="place"
            type="text"
            placeholder="Your place"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-1 w-full resize-none rounded-lg border border-gray-300 bg-white p-2.5 focus:border-indigo-500 focus:outline-none"
            id="message"
            rows="4"
            placeholder="If you want say any extra"
          ></textarea>
        </div>

        <Link to="/congrats" className="block w-full">
          <button
            className="w-full block rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
            type="submit"
          >
            <i className="fa-solid fa-check"></i> Submit
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Payment