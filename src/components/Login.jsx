import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-screen flex items-center justify-center px-4 py-4"
      style={{
        backgroundImage: "url('src/Images/Login/5.webp')",
      }}
    >
      <form
        action="#"
        className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 border-4 border-red-800 shadow-lg"
      >
        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="name">
            Name
          </label>

          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="email">
            Email
          </label>

          <input
            className="mt-1 w-full rounded-lg p-2.5 border border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <button
          className="w-full block rounded-lg border-4 border-red-800 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;