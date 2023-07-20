import React from "react";
import Blog from "../components/Blog";
import Works from "../components/Works";

function Content() {
  return (
    <>
      <div className="content">
        <div className="mt-2 md:mt-4 md:px-[150px] ">
          <div className="mx-auto w-full">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 text-white py-10">
              <Blog />
              <Works />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
