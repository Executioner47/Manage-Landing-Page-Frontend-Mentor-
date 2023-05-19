import React from "react";

function CTA_Session() {
  return (
    <div className="bg-[#F25F3A] text-white py-20 mt-10 px-4 md:px-3 lg:px-20 flex md:flex-row flex-col justify-between items-center">
      <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
        Simplify how your team <br />
        works today.
      </h1>
      <button
        type="btn"
        className="px-7 py-2 my-3 bg-white text-[#F25F3A] rounded-full shadow-xl font-bold hover:bg-[#fa8f75] hover:text-white transition duration-300 ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
}

export default CTA_Session;
