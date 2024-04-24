import React from 'react';
import Image from 'next/image';

const Card = ({ rate, photo, name, desc }) => {
  return (
    <div className="w-10/12 rounded overflow-hidden  border border-blue-light m-4">
      <div className="px-6 py-4">
        <div className='w-12/12 h-10'> 
          <Image
          src={rate}
          alt="image"
          height="120"
          className='lg:ml-40 md:ml-40 ml-32'
        />
        </div>
     
      <Image
          src={photo}
          alt="image"
          className='w-12 h-12 rounded-3xl'
        />
        <div className="font-bold text-xl text-white mb-2">{name}</div>
        <p className="text-white text-base">{desc}</p>
      </div>    
    </div>
  );
};

export default Card;
