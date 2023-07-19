import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="flex justify-center mt-10 left-[90px] right-[90px]">
        <div className="flex flex-row items-center">
          <ul className="flex flex-row border-gray-500 border-2 space-x-8 px-8 py-4 bg-zinc-800 rounded-full">
            <li className="text-white transition duration-200 hover:text-[#2DD4BF]">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-white transition duration-200 hover:text-[#2DD4BF]">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-white transition duration-200 hover:text-[#2DD4BF]">
              <Link href={"/"}>Projects</Link>
            </li>
            <li className="text-white transition duration-200 hover:text-[#2DD4BF]">
              <Link href={"/"}>Uses</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
