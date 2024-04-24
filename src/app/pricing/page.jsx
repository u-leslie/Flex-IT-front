import React from 'react'
import Card from './card'
import {CheckBadgeIcon} from "@heroicons/react/24/solid"

function Pricing() {
  return (
    <div className='bg-purple-side lg:h-full md:h-[760px] h-[1500px] w-full'>
    <div className=' lg:block md:block pt-1 lg:ml-16 md:ml-8'>
        <div className="title ml-10">
      <h2 className='text-blue-light font-medium text-lg mt-9'>. Pricing .</h2>
      <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Prices of our Tech services</h1>
     <p className='text-white font-white text-md lg:w-8/12 md:w-8/12 w-12/12  mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
    </div>
     <div className="cards grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 w-11/12 ml-5 ">
      <Card
      title="Intro"
      price="$19"
      desc="lorem ipsum dolor sit amet, consectetur adipis"
      icon={<CheckBadgeIcon/>}
      info1="lorem ipsum dolor"
      info2="lorem ipsum dolor"
      info3="lorem ipsum dolor"
      info4="lorem ipsum dolor"
      />
      <Card
      title="Popular"
      price="$39"
      desc="lorem ipsum dolor sit amet, consectetur adipis"
      icon={<CheckBadgeIcon/>}
      info1="lorem ipsum dolor"
      info2="lorem ipsum dolor"
      info3="lorem ipsum dolor"
      info4="lorem ipsum dolor"
      color="blue-default"
      />
      <Card
      title="Enterprise"
      price="$32"
      desc="lorem ipsum dolor sit amet, consectetur adipis"
      icon={<CheckBadgeIcon/>}
      info1="lorem ipsum dolor"
      info2="lorem ipsum dolor"
      info3="lorem ipsum dolor"
      info4="lorem ipsum dolor"
      />
     </div>
    </div>
 
    <div className='lg:w-full lg:bg-purple-default lg:h-40 ' style={{
        clipPath: 'polygon(100% 0, 0% 80%, 100% 80%)',
      }}></div>
   
   
  </div>
  )
}

export default Pricing
