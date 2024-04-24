import Image from 'next/image'
import port2 from '../../../public/assets/port2.jpeg'

function Portfolio() {
  return (
    <div className='bg-purple-side lg:h-full md:h-[1000px] h-[1000px] w-full'>
    <div className="title ml-16 md:pt-10 lg:pt-32 pt-10">
        <h2 className='text-blue-light font-medium text-lg '>. Portfolio .</h2>
        <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Recent products and works </h1>
       <p className='text-white font-white text-md lg:w-6/12 md:w-6/12 w-12/12  mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
      </div> 
      <div className="all lg:flex ml-16">
        <div className="text">
        <p className='text-white font-white text-md lg:w-10/12 md:w-10/12 w-10/12  mt-3 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta saepe, nam illo iure quaerat odio velit voluptas distinctio, natus ab sequi facilis nostrum adipisci cumque voluptates. Distinctio amet asperiores quam?</p>
        <p className='text-white font-white text-md lg:w-10/12 md:w-10/12 w-10/12  mt-3 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta saepe, nam illo iure quaerat odio velit voluptas distinctio, natus ab sequi facilis nostrum adipisci cumque voluptates. Distinctio amet asperiores quam?</p>
        <button className='h-10 lg:w-4/12 md:w-4/12 w-10/12 rounded-3xl my-4 bg-blue-light mx-2 text-white font-bold'>View all works</button>
        </div>
        <div className="grid lg:grid-cols-2 md:w-10/12 md:grid-cols-2 grid-cols-2 w-10/12 mr-32 gap-4">
        <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
         <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
           <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
         <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
      </div>
      </div>
      <div className='lg:w-full lg:bg-purple-default lg:h-40 ' style={{
        clipPath: 'polygon(0% 0, 0% 80%, 100% 80%)',
      }}></div>
    
  </div> 
  )
}

export default Portfolio
