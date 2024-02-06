import Image from 'next/image';
import Video from 'next-video'
import React from 'react';
import adsImg from '../public/assets/projects/socialMedia/cover_page.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import adv1Img from '../public/assets/projects/socialMedia/adv_1.png';
import adv2Img from '../public/assets/projects/socialMedia/adv_2.png';
import advVideo from 'https://ypwcm7ns84yjqktv.public.blob.vercel-storage.com/adv_video-fu2koHIkmUcUV9V5S2HEqm0rhcwfqB.mp4'

const advertisement = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={adsImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Fit Protein</h2>
          <h3>Advertisement</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Our social media advertising campaign for this company, centered around promoting protein powder, 
            is successfully concluded. Strategically targeting Facebook, Instagram, and TikTok, 
            we have developed two images and a compelling video, integrating the company&#8242;s logo for brand recognition. 
            The primary objective is to enhance the sales of protein powder through these multi-platform ads. 
            To ensure visual cohesion and brand identity, a consistent color palette has been applied across all three advertisements, 
            fostering a unified and impactful presence.
          </p>
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={adv1Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={adv2Img} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-4 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Video src={advVideo} accentColor='#ad757e' className='h-96' />
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

export default advertisement;
