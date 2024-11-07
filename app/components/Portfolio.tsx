import React from 'react'
import {PORTFOLIO} from "../constants"
import Image from "next/image";

const Portfolio = () => {
  return (
   
      <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]">
        <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
          PORTFOLIO
        </div>
        <ul className='mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 m-auto w-[95%]'>
            {
              PORTFOLIO.map((portfolio)=>(
                <PortfolioItem
                key={portfolio.title}
                ImgURL={portfolio.ImgURL}
                title={portfolio.title}
                description={portfolio.description}
                />
  
              ))
            }
        </ul>
      </section>
    
  )
}

export default Portfolio


type PortfolioItem ={
  title:string;
  ImgURL:string;
  description:string;
}

const PortfolioItem = ({title,ImgURL,description} : PortfolioItem) =>{
  return (
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
    <div className='group-hover:scale-110 transition-all duration-1000'>
      <div>
        <Image src={ImgURL} alt="map" width={444} height={444}/>
      </div>

      <div className='px-6 py-4'>
      <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
      <p className='regular-16 text-gray-30 mb-4'>{description}</p>
     

     <div className='flex gap-1'>
      <button
            className="flexCenter gap-2 rounded-full border btn_dark_rounded"
            type= "button"
          >
            <label className="font-[500] whitespace-nowrap cursor-pointer">
              Read more
            </label>
          <Image src='/more.svg' alt="read more" width={16} height={16} />
          </button>

          <button
            className="flexCenter gap-2 rounded-full border btn_white_rounded"
            type= "button"
          >
            <label className="font-[500] whitespace-nowrap cursor-pointer">
             View code
            </label>
          <Image src='/github.svg' alt="github" width={16} height={16} />
          </button> 
      </div>
      </div>

    </div>
    </li>
  )
}