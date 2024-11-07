"use client";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <main className="max-container padding-container flex flex-col flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row">
      <span className="max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full shadow-lg blur-[7rem] -z-10"></span>
      {/* Left */}
      <div className="relative z-20 flex flex-1 flex-col pt-16">
        <h4 className="bold-20">Hello,</h4>
        <h1 className="bold-48 lg:bold-64 relative">I'm a John Doe</h1>
        <h2 className="bold-28 lg:bold-32 text-[1.8rem] capitalize">
          A{" "}
          <span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Programmer",
                "Youtuber!",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="regular-16 max-w-[555px] my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-18 lg:bold-20">
            1100+{" "}
            <span className="regular-16 lg:regular-20">Excellent Reviews</span>
          </p>
        </div>
        <div className="flexStart gap-1 pt-6">
          <button
            className="flexCenter gap-2 rounded-full border btn_dark_rounded"
            type= "button"
          >
            <label className="font-[500] whitespace-nowrap cursor-pointer">
              Download CV
            </label>
          <Image src='/download.svg' alt="download" width={16} height={16} />
          </button>

          <button
            className="flexCenter gap-2 rounded-full border btn_white_rounded"
            type= "button"
          >
            <label className="font-[500] whitespace-nowrap cursor-pointer">
             Contact me
            </label>
          <Image src='/arrow-right.svg' alt="arrow-right" width={16} height={16} />
          </button> 
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 xl:flexEnd">
        <Image src='/bg.png' alt='bg' width={488} height={488} className="w-auto"/>

      </div>

    </main>
  );
};

export default Hero;
