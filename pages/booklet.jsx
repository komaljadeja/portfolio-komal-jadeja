import Image from 'next/image';
import React from 'react';
import bookletImg from '../public/assets/projects/Booklet/cover_page.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import booklet1Img from '../public/assets/projects/Booklet/booklet_1.png';
import booklet2Img from '../public/assets/projects/Booklet/booklet_2.png';
import booklet3Img from '../public/assets/projects/Booklet/booklet_3.png';
import booklet4Img from '../public/assets/projects/Booklet/booklet_4.png';
import booklet5Img from '../public/assets/projects/Booklet/booklet_5.png';
import booklet6Img from '../public/assets/projects/Booklet/booklet_6.png';
import booklet7Img from '../public/assets/projects/Booklet/booklet_7.png';
import booklet8Img from '../public/assets/projects/Booklet/booklet_8.png';
import booklet9Img from '../public/assets/projects/Booklet/booklet_9.png';

const booklet = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bookletImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Discover The World</h2>
          <h3>Booklet</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Embark on a journey of discovery with our immersive booklet designed to capture the essence of travel. 
            In collaboration with Discover the World, this booklet unfolds into a comprehensive guide to 10 
            captivating experiences across Canada. Delving into our expertise and commitment, we present not just destinations, 
            but a promise of extraordinary adventures. This booklet is an invitation for people to explore the best places in Canada, 
            ensuring an enriching travel experience through the lens of our passion and dedication.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet1Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet2Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet3Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet4Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet5Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet6Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet7Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet8Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={booklet9Img} className='rounded-xl' alt='/' />
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

export default booklet;
