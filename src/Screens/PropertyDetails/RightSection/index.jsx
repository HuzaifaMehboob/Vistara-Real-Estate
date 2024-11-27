import React from 'react'

import { MdCall,MdOutlineMail } from "react-icons/md";
import person2 from '../../../assets/person2.jpg'
import person1 from '../../../assets/person1.jpg'
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import MapSection from '../MapSection';

const RightSection = () => {
    const features = [
        {
          icon: <IoBedOutline size={20}/>,
          name: "3 Beds",
        },
        {
          icon: <LuBath size={20}/>,
          name: '3 Baths',
        },
        {
          icon: <SlSizeFullscreen size={20}/>,
          name: '1375 Sqft',
        }
      ]
  return (
    <>
    <div className='px-4'>
        <h2 className="text-4xl font-semibold">Price: $500000</h2>
      <div className=" flex justify-between items-center  py-6">
        {features.map((ele,index)=>(
          <div className="flex gap-2 text-gray-600 items-center">
            <div className="p-2 rounded-xl bg-white">
            {ele.icon}
            </div>
            <p className="text-lg font-semibold">{ele.name}</p>
          </div>
        ))}
    </div>
    </div>

    <MapSection/>


        <div className="bg-white shadow-lg w-full py-3 px-4 rounded-xl space-y-2 ">
              <h1 className='text-2xl font-bold mb-4'>Property Agents </h1>

              
              <div className='py-3 px-4 w-full shadow-md rounded-xl bg-gray-100 flex justify-between items-center'>
                <div className='gap-4 flex  items-center  '>
                  <div className='h-12 w-12 rouned-2xl '>
                    <img src={person1} className='w-full h-full object-cover object-center rounded-3xl' />
                  </div>
                  <div className=''>
                    <h1>Amr ibn al-Jamuh</h1>
                    <p>RT Edgar - Boroondra</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                      <MdCall size={20}/>
                      <MdOutlineMail size={20} />
                  </div>
                  
                  
              </div>

              <div className='py-3 px-4 w-full shadow-md rounded-xl bg-gray-100 flex justify-between items-center'>
                <div className='gap-4 flex  items-center  '>
                  <div className='h-12 w-12 rouned-2xl '>
                    <img src={person2} className='w-full h-full object-cover object-center rounded-3xl' />
                  </div>
                  <div className=''>
                    <h1>Amr ibn al-Jamuh</h1>
                    <p>RT Edgar - Boroondra</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                      <MdCall size={20}/>
                      <MdOutlineMail size={20} />
                  </div>
                  
                  
              </div>
          </div>

         
    </>
  )
}

export default RightSection