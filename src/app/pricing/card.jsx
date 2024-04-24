import React from 'react';
import {ArrowRightIcon} from '@heroicons/react/24/outline'


const Card = ({ title,price, desc,icon,info1,info2,info3,info4,color,coloB,coloT}) => {
  return (
    <div className={`w-10/12 rounded overflow-hidden bg-${color} text-${coloT}  border border-4 border-blue-default shadow-xl m-4`}>
      <div className="px-2 pt-10 ml-8 ">
        <div className="font-bold text-xl text-white mb-2">{title}</div>
        <div className="font-bold text-3xl text-blue-light mb-2 ">{price} <span className='text-lg font-medium text-white '>/month</span> </div>
        <p className="text-white text-base">{desc}</p>
        <div className="icon flex gap-x-2 mt-4">
        <div className="text-white w-6 h-6">{icon}</div>
        <div className="font-semibold text-sm text-white mb-2">{info1}</div>
        </div>  
        <div className="icon flex gap-x-2 mt-2">
        <div className="text-white w-6 h-6">{icon}</div>
        <div className="font-semibold text-sm text-white mb-2">{info2}</div>
        </div>
        <div className="icon flex gap-x-2 mt-2">
        <div className="text-white w-6 h-6">{icon}</div>
        <div className="font-semibold text-sm text-white mb-2">{info3}</div>
        </div>
        <div className="icon flex gap-x-2 mt-2">
        <div className="text-white w-6 h-6">{icon}</div>
        <div className="font-semibold text-sm text-white">{info4}</div>
        </div>
      </div> 
      <button className='h-10 text-white w-8/12 bg-blue-light rounded-3xl font-bold text- my-4  mx-12'>Choose plan</button>
    </div>
  );
};

export default Card;
