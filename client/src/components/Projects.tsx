import React from 'react'

const Projects = () => {
  return (
    <div className=' max-w-5xl mx-auto mt-52'>
      <h2 className=' uppercase mb-2 font-bold text-blue-600 text-lg'>Portfolio</h2>
      <h1 className='font-bold text-2xl'>Each project is a unique piece of development</h1>
      <div className=' flex gap-10 max-w-4xl mx-auto mt-24'>
        <img className=' flex-1 object-cover h-[350px] w-[450px] rounded-sm' src="../../web1.PNG" alt="" />
        <div className=' flex flex-col items-center text-center flex-1'>
          <h1 className=' uppercase font-bold text-xl'>
            Real Estate Website
          </h1>
          <p className=' mt-8 text-lg text-center leading-8 text-gray-500'>
            Modern real estate hub. Upload, filter,and search seamlessly. Enjoy personalized accounts with login and sign out. Crafted with the latest full-stack tech, it's not just a website—it's your key to elegant and innovative home exploration.
          </p>
          <div className=' flex gap-5 font-bold text-xl mt-8'>
            <span>React</span>
            <span>Nodejs</span>
            <span>Express</span>
            <span>Mongodb</span>
            <span>Redux </span>
          </div>
          <div className=' flex gap-5 font-bold text-xl mt-8 '>
            <a className='hover:underline hover:text-blue-500' href="https://github.com/julyperfect07/mern-estate">Code</a>
            <a className='hover:underline hover:text-blue-500' href="https://mern-estate-kmsn.onrender.com/">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects