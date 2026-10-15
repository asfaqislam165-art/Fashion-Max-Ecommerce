import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="col-span-1">
            <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl">
              Why Choose Fashion Max?
            </h2>

            <p className="mt-4 text-lg text-pretty text-gray-700">
              Fashion Max brings you the latest fashion trends with stylish,
              comfortable, and affordable clothing for men, women, and kids.
              Our goal is to make every shopping experience simple and enjoyable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Quality Products
                </h3>
                <p className="mt-1 text-gray-700">
                  Discover fashionable clothing designed for comfort and style.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 6v12m-4-9h6a2 2 0 1 1 0 4H10a2 2 0 1 0 0 4h6" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Affordable Fashion
                </h3>
                <p className="mt-1 text-gray-700">
                  Enjoy trendy styles at prices that fit your budget.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-gray-100 p-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5"
                  stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.5 7.5m0 0h14.25l-1.5 8.25H7.25L5.5 7.5Zm1.75 8.25-1 2.25h12.75M9 21h.008v.008H9V21Zm8 0h.008v.008H17V21Z" />
                </svg>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Easy Shopping Experience
                </h3>
                <p className="mt-1 text-gray-700">
                  Find your favorite styles and shop with ease at Fashion Max.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mb-16">
        <section className="overflow-hidden bg-gray-50 rounded-lg sm:grid sm:grid-cols-2">
          <div className="flex items-center p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                About Fashion Max
              </h2>

              <p className="mt-4 text-gray-600 md:text-lg">
                Your destination for modern fashion and everyday style.
                We bring you the latest trends in men's, women's, and
                kids' clothing to help you express your unique style.
              </p>

              <p className="mt-4 text-gray-600">
                Our mission is to make fashion stylish, comfortable, and
                affordable for everyone. Discover your favorite looks and
                make every moment fashionable with Fashion Max.
              </p>

              <div className="mt-6 md:mt-8">
                <Link
                  to="/"
                  className="inline-block rounded-sm bg-blue-600 px-8 py-3
                  text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>

          <img
            alt="Fashion Max clothing collection"
            src="src/Images/About/1.webp"
            className="h-64 w-full object-cover sm:h-full sm:min-h-450px"
          />
        </section>
      </div>

    </div>
  )
}

export default About