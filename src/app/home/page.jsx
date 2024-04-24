import React from 'react';
import home from '../../../public/assets/home2.png';
import Image from 'next/image';
import {PlayIcon} from '@heroicons/react/24/solid'

function Home() {
  return (
    <div className="relative h-screen">
      <div className="bg-blue-default w-full h-full absolute top-0 left-0"></div>
      <div
        className="bg-purple-default lg:w-[900px] h-full absolute top-0 right-0"
        style={{
          clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
        }}
      ></div>
      <div className='text-start absolute mt-20 ml-10 md:mt-56 lg:mt-40 lg:ml-20 md:ml-24'>
      <h1 className='text-white font-bold lg:text-5xl md:text-5xl text-2xl w-11/12 lg:w-8/12 md:w-11/12'>Providing the Best services and IT <span className='underline text-blue-light'>solutions</span> </h1>
      <p className='text-white font-small text-md mt-10 w-10/12 lg:w-7/12 md:w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit voluptates error illum ullam eveniet dignissimos alias sint</p>
     <div className='flex gap-6'>
      <button className='py-2 px-8 text-blue-light mt-6  border-2 rounded-tr-xl rounded-bl-xl border-blue-light'>Start now</button>
      <div className='bg-blue-light w-10 h-10 rounded-3xl border-opacity-70 border-4 mt-6'>
  <PlayIcon className='text-white w-6 pt-2 pl-2 '/>
  
</div>
      </div>

      </div>
      <div className="absolute top-0 right-0 lg:mt-0 md:mt-64 mt-40">
        <Image
          src={home}
          width={800}
          height={800}
          alt="image"
          className='mt-48 mr-20'
        />
      </div>
    </div>
  );
}

export default Home;

