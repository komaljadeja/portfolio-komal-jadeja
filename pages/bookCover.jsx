import Image from 'next/image';
import React from 'react';
import bookImg from '../public/assets/projects/BOOK/cover_page.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import book1Img from '../public/assets/projects/BOOK/book_1.png';
import book2Img from '../public/assets/projects/BOOK/book_2.png';
import book3Img from '../public/assets/projects/BOOK/book_3.png';

const bookCover = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bookImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>A Girl And Her Panda</h2>
          <h3>Book Cover</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={book1Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={book2Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={book3Img} className='rounded-xl' alt='/' />
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

export default bookCover;
