import Image from 'next/image';
import React from 'react';
import brochureImg from '../public/assets/projects/Brochure/cover_page.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import brochure1Img from '../public/assets/projects/Brochure/brochure_1.png';
import brochure2Img from '../public/assets/projects/Brochure/brochure_2.png';

const brochure = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={brochureImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gujarat Tourism</h2>
          <h3>Brochure</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Creating this brochure has been a personal triumph, a journey from uncertainty to accomplishment. 
            Initially daunted by the challenge, I found courage and support from my instructor, friends, and family, 
            transforming my nerves into confidence. Crafting these brochures became a labor of love in my native Gujarat, 
            drawing inspiration from my profound connection with the region. Within the pages, I&#8242;ve curated a guide to the 
            top 5 must-visit places, infused with insights on activities and experiences unique to Gujarat. Each element is a 
            testament to my newfound ability and passion for capturing the essence of this culturally rich destination.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={brochure1Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={brochure2Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4'>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default brochure;
