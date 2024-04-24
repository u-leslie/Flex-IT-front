import React from 'react';
import '../globals.css'
import Card from './card';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import profile from '../../../public/assets/profile.png';
import rating from '../../../public/assets/rating.png';

function Testimonial() {
  return (
    <div className='bg-purple-side lg:h-full md:h-[1700px] w-full overflow-hidden'>
      <div className='lg:flex md:block pt-1 ml-16'>
        <div className="title">
          <h2 className='text-blue-light font-medium text-lg mt-9'>. Testimony .</h2>
          <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Testimonials from successful clients </h1>
          <p className='text-white font-white text-md lg:w-8/12 md:w-8/12 w-12/12 mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
        </div>

        <button className='py-2 h-12 px-8 lg:mt-24 md:mt-2 md:mb-10 my-5 text-white flex rounded-tr-xl rounded-bl-xl bg-blue-light lg:ml-[400px]'>View all
          <span>
            <ArrowRightIcon className='w-4 text-white my-2 mx-2'/>
          </span>
        </button>
      </div>

      <div className='lg:flex lg:w-[2300px] md:w-full gap-5 ml-10 marquee'>
        <Card
          rate={rating}
          photo={profile}
          name="John Doe"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
        <Card
          rate={rating}
          photo={profile}
          name="Lara Jones"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
        <Card
          rate={rating}
          photo={profile}
          name="Ally Soud"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
        <Card
          rate={rating}
          photo={profile}
          name="John Doe"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
        <Card
          rate={rating}
          photo={profile}
          name="Lara Jones"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
        <Card
          rate={rating}
          photo={profile}
          name="Ally Soud"
          desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        />
      </div>

      <div className='lg:w-full lg:bg-purple-default lg:h-40' style={{ clipPath: 'polygon(0% 0, 0% 80%, 100% 80%)' }}></div>
    </div>
  );
}

export default Testimonial;

