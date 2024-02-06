import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logoImg from '../public/assets/projects/LOGO/cover_page.png';
import partyImg from '../public/assets/projects/LOGO/logo_1.png';
import singleImg from '../public/assets/projects/LOGO/logo_2.png';
import lipstickImg from '../public/assets/projects/LOGO/logo_3.png';
import sonicstarImg from '../public/assets/projects/LOGO/logo_4.png';
import singlesolImg from '../public/assets/projects/LOGO/logo_5.png';
import photographyImg from '../public/assets/projects/LOGO/logo_6.png';
import tradeImg from '../public/assets/projects/LOGO/logo_7.png';

const logo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={logoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Logofolio</h2>
          <h3>Logo</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          I specialize in creating impactful logos that serve as visual cornerstones for brands, 
          effectively communicating their identity and values. Through a meticulous blend of creativity and strategic thinking, 
          I craft logos that resonate with target audiences and leave a lasting impression. 
          My approach involves in-depth research into the brand&#8242;s ethos, 
          translating it into a unique visual language that not only stands out but also aligns seamlessly with the brand&#8242;s narrative.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={singleImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={lipstickImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={partyImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={sonicstarImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={singlesolImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={photographyImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={tradeImg} className='rounded-xl' alt='/' />
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

export default logo;
