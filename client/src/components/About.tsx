import React from 'react'

const About = () => {
  return (
    <div className=' max-w-5xl mx-auto mb-52 p-2'>
      <div className=' flex flex-col md:flex-row gap-7'>
        <img className=' object-cover h-[400px] w-full md:w-[400px] rounded-md' src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className=' flex flex-col'>
          <h2 className=' uppercase mb-4 font-bold text-blue-600 text-lg'>About me</h2>
          <h1 className=' font-bold text-2xl'>A dedicated Full-stack Developer based in Amman, Jordan</h1>
          <p className=' mt-4 text-lg text-gray-500 leading-7'>As a Full-stack Developer, I posses an impressive arsenal of skills in HTML, CSS, Javascript, Typescript, react, tailwind, nodejs, Express, Mongodb, I excel designing and maintaining responsive websites that offer a smooth user experience, My expertise lies in craftring dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques, I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications</p>
        </div>
      </div>
    </div>
  )
}

export default About