import React from "react";

function Blog() {
  return (
    <>
      <div className="blog-content flex flex-col">
        {/* Content */}
        <a
          href="/"
          className="content-card transition duration-300 ease-in-out px-5 py-5 hover:bg-zinc-800/50 backdrop-blur-lg rounded-xl mx-5 my-5 md:mr-10"
        >
          <div className="flex flex-row items-center">
            <span className="border-l-4 h-6 border-gray-500"></span>
            <p className="mx-2 text-gray-400 text-sm font-semibold">
              December, 2023
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-5 font-semibold">Hello world</h2>
            <p className="mt-3 text-gray-400">
              Most companies try to stay ahead of the curve when it comes to
              visual design, but for Planetaria we needed to create a brand that
              would still inspire us 100 years from now when humanity has spread
              across our entire solar system.
            </p>
            <p className="mt-3 text-sm text-blue-300 font-semibold">
              Read me more &rarr;
            </p>
          </div>
        </a>
        {/* Content2  */}
        <a
          href="/"
          className="content-card transition duration-300 ease-in-out px-5 py-5 hover:bg-zinc-800/50 backdrop-blur-lg rounded-xl mx-5 my-5 md:mr-10"
        >
          <div className="flex flex-row items-center">
            <span className="border-l-4 h-6 border-gray-500"></span>
            <p className="mx-2 text-gray-400 text-sm font-semibold">
              December, 2023
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="mt-5 font-semibold">Hello world</h2>
            <p className="mt-3 text-gray-400">
              Most companies try to stay ahead of the curve when it comes to
              visual design, but for Planetaria we needed to create a brand that
              would still inspire us 100 years from now when humanity has spread
              across our entire solar system.
            </p>
            <p className="mt-3 text-sm text-blue-300 font-semibold">
              Read me more &rarr;
            </p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Blog;
