import React from "react";
import Link from "next/link";

function hero() {
  return (
    <>
      <div className="hero">
        <div className=" text-white py-28 px-10 md:px-[150px] mx-auto md:mx-0">
          <img
            src="/images/nan.jpg"
            className="justify-center h-[100px] rounded-full mx-auto md:mx-0"
          />
          <h1 className="text-center text-2xl md:text-4xl mt-6 font-semibold md:mx-0 md:text-left">
            Junior web developer
          </h1>
          <p className="text-center mt-4 leading-8 md:w-2/3 md:text-left">
            Hello. I’m a Junior Web Developer. I currently learning web
            development like Laravel, CodeIgniter, and a solid understanding of
            React.
          </p>
          <div className=" flex flex-row mt-5 space-x-4 justify-center md:justify-normal">
            <Link
              className="hover:text-blue-500 transition duration-200"
              href={"https://twitter.com/adnanmaulana__"}
              target="_blank"
            >
              <i class="bx bxl-twitter text-3xl"></i>
            </Link>
            <Link
              className="hover:text-pink-500 transition duration-200"
              href={"https://instagram.com/pixelmind__"}
              target="_blank"
            >
              <i class="bx bxl-instagram text-3xl"></i>
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-200"
              href={"https://github.com/vdnanmaulana"}
              target="_blank"
            >
              <i class="bx bxl-github text-3xl"></i>
            </Link>
            <Link
              className="hover:text-pink-500 transition duration-200"
              href={"https://dribbble.com/adnanmaulana"}
              target="_blank"
            >
              <i class="bx bxl-dribbble text-3xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
