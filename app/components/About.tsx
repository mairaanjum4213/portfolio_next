import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
        About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto">
          <p className="mb-8">
            <span className="font-extrabold">Lorem ipsum</span>
            {" "} dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button
            className="flexCenter gap-2 rounded-full border btn_dark_rounded"
            type="button"
          >
            <label className="font-[500] whitespace-nowrap cursor-pointer">
              Read more
            </label>
            <Image src="/more.svg" alt="read more" width={16} height={16} />
          </button>
        </div>
        <div className="flex-1 flexCenter">
          <Image
            src="/about.png"
            alt="about"
            width={333}
            height={333}
            className="w-auto rounded-full shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
