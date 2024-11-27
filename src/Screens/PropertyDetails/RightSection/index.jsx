import React from 'react'

import { MdCall,MdOutlineMail } from "react-icons/md";
import person2 from '../../../assets/person2.jpg'
import person1 from '../../../assets/person1.jpg'
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import MapSection from '../MapSection';
import { FaLocationDot } from 'react-icons/fa6';

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
    <div className=''>
    {/* px-2 py-2 shadow-lg border-2 border-gray-300 rounded-lg */}
        <div className='flex gap-2 py-1 items-center'>
          <div className='w-[8px] h-[8px] rounded-2xl bg-green-400'>
            
          </div>
          <h2 className='text-green-400 font-semibold '>For Sale</h2>
        </div>
        <h2 className="text-5xl font-bold">$500,000</h2>
      {/* <div className=" flex gap-4 items-center py-2 mt-2 ">
        {features.map((ele,index)=>(
          <div className="flex gap-2 text-gray-600 items-center">
            <div className="py-2 rounded-xl ">
            {ele.icon}
            </div>
            <p className="text-lg font-semibold">{ele.name}</p>
          </div>
        ))}
    </div> */}
    <div className="flex gap-2 items-center text-gray-600 text-sm">
          {/* <FaLocationDot size={15}/> */}
          <p className="text-md">PH305 Plan in 173 Maverick by the Elevated Companies</p>
      </div>
    </div>
    

    {/* <MapSection/> */}


        <div className="bg-white shadow-xl w-full border-2 border-gray-300 py-2 mb-8 mt-3 px-4 rounded-xl space-y-4 ">
              <h1 className='text-2xl font-bold mb-4'>Property Agents </h1>

              
              <div className='py-3 px-4 w-full  shadow-md rounded-xl bg-gray-100 flex justify-between items-center'>
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
          {/* <MapSection/> */}

         
    </>
  )
}

export default RightSection