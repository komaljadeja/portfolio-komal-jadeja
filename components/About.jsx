import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about image.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#ad757e]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am an accomplished graphic designer with a demonstrated proficiency in translating conceptual ideas into visually compelling designs. 
            With a robust foundation in design principles and a keen eye for aesthetic detail, I bring a wealth of experience and expertise to every project.
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in leveraging industry-standard design software to create captivating visuals across various mediums, 
            ranging from print to digital platforms. Adept at understanding client requirements and market trends, 
            I have honed the ability to develop brand identities that resonate with target audiences. 
            My strategic approach involves a meticulous analysis of project objectives, ensuring that the design not only meets but exceeds expectations. 
            I have a comprehensive understanding of colour theory, typography, and layout, allowing me to craft designs that communicate messages effectively.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
