import React from "react";

function Hero() {
  return (
    <section className="hero px-4 md:px-3 lg:px-20 m-0 mt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse z-20">
        <div className="md:w-1/2">
          <img
            src="./images/illustration-intro.svg"
            className="w-72 md:w-80 lg:w-[440px] text-center mx-auto md:me-0  "
            alt=""
          />
        </div>
        <div className="content text-center md:text-left md:w-1/2 ">
          <h1 className="text-4xl md:text-[45px] xl:text-[60px] md:leading-tight font-bold text-[#273153]">
            Bring Everyone together to build better products.
          </h1>
          <p className="text-[#9095A7] my-3">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button
            type="btn"
            className="m-auto px-4 py-2 my-3 bg-[#F25F3A] text-white rounded-full shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* <img
        src="./images/bg-tablet-pattern.svg"
        className="absolute -top-10 -right-20 lg:-top-28 lg:-right-48 -z-10"
        alt=""
      />
      <img
        src="./images/bg-tablet-pattern.svg"
        className="absolute bottom-1 -right-52 -z-10 hidden"
        alt=""
      /> */}
    </section>
  );
}

export default Hero;
