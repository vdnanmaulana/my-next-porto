import React from "react";

function Works() {
  return (
    <>
      <div className="works mx-10 md:mx-0 lg:pl-16 xl:pl-24 mt-5">
        <div className="cv-download border border-2 border-zinc-500/50 p-4 rounded-2xl ">
          <div className="flex flex-row items-center">
            <i class="px-2 py-2 bg-zinc-800 rounded-lg bx bx-briefcase text-xl"></i>
            <p className="ml-4 font-semibold">Works</p>
          </div>
          <div className="mt-4 flex items-center">
            <img className="h-12 w-12" src="/images/fb.svg" />
            <div className="mx-2 flex flex-col gap-x-2 w-full">
              <h1 className="text-sm font-medium">Facebook</h1>
              <div className="flex justify-between">
                <h2 className="text-xs">Developer</h2>
                <h2 className="text-xs">2021 - Present</h2>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-6 down-cv-button ">
            <a
              href="/"
              className="flex block justify-center px-2 py-2 rounded-lg bg-zinc-800/50 items-center text-sm
              hover:bg-zinc-700/50 transition duration-200"
            >
              Download CV&nbsp;<i class="bx bxs-download"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
