import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from '../public/assets/projects/LOGO/cover_page.png';
import photographyImg from '../public/assets/projects/Navya photography/cover_page.png'
import bookImg from '../public/assets/projects/BOOK/cover_page.png'
import bookletImg from '../public/assets/projects/Booklet/cover_page.png'
import brochureImg  from '../public/assets/projects/Brochure/cover_page.png'
import adsImg from '../public/assets/projects/socialMedia/cover_page.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#ad757e]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Logofolio'
            backgroundImg={logoImg}
            projectUrl='/logo'
            tech='Logo'
          />
          <ProjectItem
            title='Navya Photography'
            backgroundImg={photographyImg}
            projectUrl='/branding'
            tech='Branding'

          />
          <ProjectItem
            title='A Girl And Her Panda'
            backgroundImg={bookImg}
            projectUrl='/bookCover'
            tech='Book Cover'

          />
          <ProjectItem
            title='Fit Protein'
            backgroundImg={adsImg}
            projectUrl='/advertisement'
            tech='Advertisement'

          />
           <ProjectItem
            title='Discover The World'
            backgroundImg={bookletImg}
            projectUrl='/booklet'
            tech='Booklet'

          />
          <ProjectItem
            title='Gujarat Tourism'
            backgroundImg={brochureImg}
            projectUrl='/brochure'
            tech='Brochure'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
