import React from "react";

function Testimonials() {
  return (
    <div className="px-4 md:px-3 lg:px-20 flex flex-col items-center ">
      <h1 className="text-4xl text-[#273153] font-bold mb-20">
        What they've said
      </h1>
      <div className="cards gap-10 flex flex-col md:flex-row items-center justify-center w-full text-center">
        <div className="card flex flex-col md:-w-1/3 flex-1 basis-0 bg-gray-100 items-center space-y-6 p-6">
          <img
            src="./images/avatar-anisha.png"
            className="w-16 h-16 mx-auto -mt-14"
            alt=""
          />
          <h3 className="font-semibold">Anisha Li</h3>
          <p className="text-[#9095A7] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus error ut ullam qui quam quasi, expedita ad quia nobis,
            aliquid molestiae odit modi inventore vitae laboriosam accusamus
            consectetur explicabo!
          </p>
        </div>
        <div className="card flex flex-col md:-w-1/3 flex-1 basis-0 bg-gray-100 items-center space-y-6 p-6">
          <img
            src="./images/avatar-ali.png"
            className="w-16 h-16 mx-auto -mt-14"
            alt=""
          />
          <h3 className="font-semibold">Ali Li</h3>
          <p className="text-[#9095A7] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus error ut ullam qui quam quasi, expedita ad quia nobis,
            aliquid molestiae odit modi inventore vitae laboriosam accusamus
            consectetur explicabo!
          </p>
        </div>
        <div className="card flex flex-col md:-w-1/3 flex-1 basis-0 bg-gray-100 items-center space-y-6 p-6">
          <img
            src="./images/avatar-shanai.png"
            className="w-16 h-16 mx-auto -mt-14"
            alt=""
          />
          <h3 className="font-semibold">Shanai Li</h3>
          <p className="text-[#9095A7] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus error ut ullam qui quam quasi, expedita ad quia nobis,
            aliquid molestiae odit modi inventore vitae laboriosam accusamus
            consectetur explicabo!
          </p>
        </div>
        <div className="card flex flex-col md:-w-1/3 flex-1 basis-0 bg-gray-100 items-center space-y-6 p-6">
          <img
            src="./images/avatar-richard.png"
            className="w-16 h-16 mx-auto -mt-14"
            alt=""
          />
          <h3 className="font-semibold">Richard Li</h3>
          <p className="text-[#9095A7] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            temporibus error ut ullam qui quam quasi, expedita ad quia nobis,
            aliquid molestiae odit modi inventore vitae laboriosam accusamus
            consectetur explicabo!
          </p>
        </div>
      </div>
      <button
        type="btn"
        className="mx-auto mt-10 px-4 py-2 my-3 bg-[#F25F3A] text-white rounded-full shadow-lg font-bold hover:bg-[#fa8f75] hover:text-white transition duration-300 ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
}

export default Testimonials;
