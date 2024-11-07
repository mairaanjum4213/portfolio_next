import React from 'react'
import {TESTIMONIAL} from "../constants"
import Image from "next/image";

const Testimonial = () => {
  return (
   
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
    <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">
      Testimonial
    </div>
    <ul className='mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3 m-auto w-[95%]'>
        {
          TESTIMONIAL.map((testimonial)=>(
            <TestimonialItem
            key={testimonial.title}
            ImgURL={testimonial.ImgURL}
            title={testimonial.title}
            description={testimonial.description}
            />

          ))
        }
    </ul>
  </section>
  
)
}

export default Testimonial


type TestimonialItem ={
  title:string;
  ImgURL:string;
  description:string;
}

const TestimonialItem = ({title,ImgURL,description} : TestimonialItem) =>{
  return (
    <li className='relative flex w-full flex-1 flex-col p-6'>
    <div className='absolute -top-8'>
      <Image src={ImgURL} alt="user" width={66} height={66} className='rounded-full shadow-xl border-4 border-white'/>
    </div>

    <div className='absolute -top-8 right-0'>
    <Image src='/quote.svg' alt="quote" width={44} height={44}/>
    </div>

      <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
      <p className='regular-16 text-gray-30 mb-4'>{description}</p>
     
    </li>
  )
}
