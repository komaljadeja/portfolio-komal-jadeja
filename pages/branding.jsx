import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import coverImg from '../public/assets/projects/Navya photography/cover_page.png'
import branding_5 from '../public/assets/projects/Navya photography/branding_5.png';
import branding_1 from '../public/assets/projects/Navya photography/branding_1.png';
import branding_2 from '../public/assets/projects/Navya photography/branding_2.png';
import branding_3 from '../public/assets/projects/Navya photography/branding_3.png';
import branding_4 from '../public/assets/projects/Navya photography/branding_4.png';

const branding = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={coverImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Navya Photography</h2>
          <h3>Branding</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I comprehensively addressed all aspects of the company in the brand guidelines.
            This includes details about the brand, typography, and color palette. 
            I specified the significance behind the logo and provided variations for different backgrounds. 
            The guidelines also encompass the store front design, a mood board, and details about promotional items. 
            My aim with this brand guideline is to encompass every facet of the brand and articulate its core values.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={branding_5} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={branding_4} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={branding_2} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={branding_3} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={branding_1} className='rounded-xl' alt='/' />
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

export default branding;
