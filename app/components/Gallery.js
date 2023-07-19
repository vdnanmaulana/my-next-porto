import React from "react";

function Gallery() {
  return (
    <>
      <div className="gallery mx-10 mb-10">
        <div className="flex flex-row overflow-x-auto py-5 px-5 space-x-10 text-white justify-center">
          <img
            className="rounded-[16px] w-[300px] h-[300px] rotate-3 object-cover"
            src="/images/img1.jpg"
          />
          <img
            className="rounded-[16px] w-[300px] h-[300px] rotate-[-5deg] object-cover"
            src="/images/img2.jpg"
          />
          <img
            className="rounded-[16px] w-[300px] h-[300px] rotate-[2deg] object-cover"
            src="/images/img3.jpg"
          />
          <img
            className="rounded-[16px] w-[300px] h-[300px] rotate-[-3deg] object-cover"
            src="/images/img4.jpg"
          />
          <img
            className="rounded-[16px] w-[300px] h-[300px] rotate-[7deg] object-cover"
            src="/images/img5.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
