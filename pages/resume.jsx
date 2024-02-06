import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Komalba | Resume</title>
        <meta
          name='description'
          content='I’m a passionate graphic designer. Within my designs I value simplicity, symmetry and detail.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Komalba Jadeja</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/komalba-jadeja-459667212/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Accomplished Graphic Designer and Brand Specialist with 1+ years of proven in-house design experience.
          Proficient in crafting compelling marketing collateral, curating impactful social media content, and optimizing
          Google Ads. Expertise in Adobe Creative Suite, dedicated to precision in marketing copy and brand consistency. A
          collaborative team player committed to elevating brand identity and delivering visually captivating solutions in line
          with strategic marketing objectives.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Adobe Creative Suite</span>
            <span className='px-2'>|</span>Photoshop
            <span className='px-2'>|</span> Illustrator
            <span className='px-2'>|</span>InDesign
            <span className='px-2'>|</span>PremierPro
            <span className='px-2'>|</span>Lightroom
            <span className='px-2'>|</span>Dreamweaver
            <span className='px-2'>|</span>Aftereffect
            <span className='px-2'>|</span>Figma
          </p>
          <p className='py-2'>
            <span className='font-bold'>Others</span>
            <span className='px-2'>|</span>Figma
            <span className='px-2'>|</span>Canva
            <span className='px-2'>|</span>Typography
            <span className='px-2'>|</span>Colour Theory
            <span className='px-2'>|</span>Layout Design
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              NoGrowth
            </span>
            <span className='px-2'>|</span>Toronto, ON
          </p>
          <p className='py-1 italic'>Graphic Designer (July 2023 - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Produced 100+ designs for diverse marketing collaterals, elevating engagement and brand visibility by 30%.
            </li>
            <li>
              Collaborated in a team of 5 designers, successfully managing 15+ concurrent projects, consistently
              exceeding client expectations.
            </li>
            <li>
              Efficiently managed a $10,000 monthly budget for design software and resources, optimizing spending by
              20% through strategic procurement.
            </li>
            <li>
              Achieved a 95% client satisfaction rate by consistently delivering high-quality designs within stringent
              deadlines.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Communication Test Design Inc.
            </span>
            <span className='px-2'>|</span>Mississauga, ON
          </p>
          <p className='py-1 italic'>Repair Technician (Dec 2018 - July 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Conducted routine maintenance and calibration, reducing equipment downtime by 15%.
            </li>
            <li>
              Designed and implemented rigorous testing procedures, improving product reliability by 20%.
            </li>
            <li>
              Collaborated across departments, fostering a cohesive work environment and accelerating problem
              resolution timelines.
            </li>
            <li>
              Maintained detailed records of test results, enhancing communication and decision-making processes.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Ingenico Group
            </span>
            <span className='px-2'>|</span>Mississauga, ON
          </p>
          <p className='py-1 italic'>Repair Technician (Aug 2017 - Dec 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Conducted in-depth diagnostics and repairs, consistently exceeding repair quotas by 20%.
            </li>
            <li>
              Implemented streamlined repair processes, reducing turnaround time by 25% and enhancing depot
              efficiency.
            </li>
            <li>
              Provided direct customer support, achieving a 95% customer satisfaction rating.
            </li>
            <li>
              Managed inventory effectively, minimizing waste and ensuring component availability for repairs.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>

        {/* Education */}
        <div className='pt-6 pb-3'>
          <p className='italic'>
            <span className='font-bold'>Diploma in Graphic Design Technology</span>
            <span className='px-2'>|</span>CDI College, Edmonton
          </p>
          <p className='py-1 italic'>2023</p>
        </div>

        <div className='pt-3 pb-6'>
          <p className='italic'>
            <span className='font-bold'>Bachelor's Degree in Instrumentation and Control Engineering</span>
            <span className='px-2'>|</span>Government Engineering College, India
          </p>
          <p className='py-1 italic'>2017</p>
        </div>
      </div>
    </>
  );
};

export default resume;
