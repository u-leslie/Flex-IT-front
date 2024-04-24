
import React from 'react'
import home from '../../../public/assets/home2.png'
import Image from 'next/image';

function Contact() {
  return (
    <div className='bg-purple-side lg:w-full lg:'>
    <div className=' flex lg:ml-16 md:ml-16 ml-8'>
         <div className="title">
      <h2 className='text-blue-light font-medium text-lg mt-9'>. Contact us .</h2>
      <h1 className='text-white font-semibold text-4xl w-8/12'>Drop us a line on any <span className='text-blue-light underline'>query</span> </h1>
     <p className='text-white font-white text-md w-8/12 mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
    </div>
    </div>
 
<div className='w-12/12 flex'>
<div className="image lg:block hidden">
    <Image
          src={home}
          width={700}
          height={500}
          alt="image"
          className='lg:mr-20 md:mr-56 '
        />
    </div>
  <div className="lg:ml-16 md:ml-16 ml-8">
<form action="post">
<p className='text-white font-white text-md w-8/12 mt-3 mb-5'>Fill this form</p>
  <input type="text" className='w-80 h-10 bg-purple-side border border-blue-light rounded text-white pl-2' placeholder='Email' />
  <input type="text" className='w-80 h-10 bg-purple-side border border-blue-light rounded text-white pl-2 mt-6 md:ml-10 lg:ml-0' placeholder='Password' />
  <button className='py-2 h-10 w-80 px-8 lg:mt-6 justify-center  md:mt-8 mt-5 mb-16 text-white flex  rounded-tr-xl rounded-bl-xl bg-blue-light'>Get in touch </button>  
</form>
  </div>
   
</div>
  
   
  </div>
  )
}

export default Contact
