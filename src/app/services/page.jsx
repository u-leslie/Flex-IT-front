import React from 'react'
import Card from './card';
import {CommandLineIcon,GlobeAltIcon,UserCircleIcon,MagnifyingGlassIcon,WrenchScrewdriverIcon,ArrowRightIcon} from '@heroicons/react/24/outline'
function Services() {
  return (
    <div className='bg-purple-side lg:h-full md:h-[1100px] h-[2300px] w-full'>
      <div className=' lg:flex md:flex pt-1 ml-16'>
           <div className="title">
        <h2 className='text-blue-light font-medium text-lg mt-9'>. Services .</h2>
        <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Services we offer </h1>
       <p className='text-white font-white text-md lg:w-8/12 md:w-8/12 w-12/12  mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
      </div>
      
        <button className='py-2 h-12 px-8 lg:mt-24 md:mt-24 my-5 text-white flex  rounded-tr-xl rounded-bl-xl bg-blue-light lg:ml-[400px]'>See all services 
      <span>
      <ArrowRightIcon className='w-4 text-white my-2 mx-2'/>
        </span>
        </button>  
      </div>
   

      <div className='cards grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ml-10'>
         <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="Web development"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<GlobeAltIcon className='w-7'/>} 
        title="Digital Marketing"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="SaaS Program"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<UserCircleIcon className='w-7'/>} 
        title="Apps Development"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<MagnifyingGlassIcon className='w-7'/>} 
        title="SeoS Services"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<WrenchScrewdriverIcon className='w-7'/>} 
        title="Data Analysis"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
   
      </div>
      <div className='lg:w-full lg:bg-purple-default lg:h-40 ' style={{
        clipPath: 'polygon(0% 0, 0% 80%, 100% 80%)',
      }}></div>
     
    </div>
  )
}

export default Services
