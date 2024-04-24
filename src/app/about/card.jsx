import React from 'react';


const Card = ({ icon, title, description}) => {
  return (
    <div className="rounded">        
    <div className="text-3xl mt-4 bg-blue-light bg-opacity-40 rounded-lg p-2 text-blue-light float-left">{icon}</div>
      <div className="px-6 py-4 ml-8 ">
        <div className="font-bold text-xl text-white mb-2">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>    
    </div>
  );
};

export default Card;
