import { Mail, MapPin } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className=' max-w-5xl p-4 mx-auto mt-52'>
      <div className=' flex flex-col gap-2'>
        <h2 className=' uppercase font-bold text-blue-600 text-lg'>Contact</h2>
        <h1 className='font-bold text-2xl'>Don't be shy! hit me up!</h1>
      </div>
      <div className=' flex flex-col sm:flex-row text-center justify-center sm:justify-start gap-28 max-w-4xl mx-auto mt-14'>
        <div className=' flex flex-col sm:flex-row gap-5 items-center'>
          <MapPin size={36} strokeWidth={1.75} className=' text-blue-600' />
          <div className=' flex flex-col'>
            <h1 className=' font-bold text-lg'>Location</h1>
            <span className=' text-gray-500 text-lg'>Amman, Jordan</span>
          </div>
        </div>
        <div className=' flex flex-col sm:flex-row text-center gap-5 items-center'>
          <Mail size={36} strokeWidth={1.75} className=' text-blue-500' />
          <div className=' flex flex-col'>
            <h1 className=' font-bold text-lg'>Mail</h1>
            <span className=' text-gray-500 text-lg'>abdallah.july05@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact