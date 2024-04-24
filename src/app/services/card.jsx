import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/outline'

const Card = ({ icon, title, description, readMoreLink }) => {
  return (
    <div className="w-10/12 rounded overflow-hidden  border border-blue-light m-4">
      <div className="px-6 py-4">
        <div className="text-3xl mb-4 text-blue-light">{icon}</div>
        <div className="font-bold text-xl text-white mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>    
      <div className="px-2 py-2 flex">
        <a
          href={readMoreLink}
          className="text-blue-light font-bold py-2 px-4 rounded-full"
        >
          Read More
        </a>
        <ArrowRightIcon className='w-4 text-blue-light'/>
      </div>
    </div>
  );
};

export default Card;
