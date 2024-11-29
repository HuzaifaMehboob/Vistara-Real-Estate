import React,{useState} from "react";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuBath } from "react-icons/lu";
import MapSection from "../MapSection";
import { FaLocationDot } from "react-icons/fa6";
import DetailsCard from "../DetailCard";

const PropertyDescription = () => {

  const [type,setType] = useState("detail")
  // Facilities Data
  const facilities = [
    { icon: "🛏️", label: "Maids Room" },
    { icon: "❄️", label: "Central A/C" },
    { icon: "🧹", label: "Maid Service" },
    { icon: "🏢", label: "Balcony" },
    { icon: "🏊", label: "Private Pool" },
    { icon: "🛡️", label: "Security" },
    { icon: "🛁", label: "Private Jacuzzi" },
    { icon: "🏋️", label: "Shared Gym" },
    { icon: "💆", label: "Shared Spa" },
    { icon: "🚗", label: "Covered Parking" },
  ];

  const features = [
    {
      icon: <IoBedOutline size={30}/>,
      name: "3 Beds",
    },
    {
      icon: <LuBath size={25}/>,
      name: '3 Baths',
    },
    {
      icon: <SlSizeFullscreen size={25}/>,
      name: '1375 Sqft',
    }
  ]

  return (
    <div className=" py-2 mt-4 px-3 md:px-0  bg-transparent  border-t-2 border-gray-400 ">
      <div className='flex gap-2 py-1 items-center block md:hidden lg:hidden'>
          <div className='w-[8px] h-[8px] rounded-2xl bg-green-400'>
            
          </div>
          <h2 className='text-green-400 font-semibold '>For Sale</h2>
        </div>
        <h2 className="text-5xl font-bold block md:hidden lg:hidden">$500,000</h2>
      
    <div className="flex gap-2 items-center text-gray-600 text-sm my-2 block md:hidden lg:hidden">
          {/* <FaLocationDot size={15}/> */}
          <p className="text-md">PH305 Plan in 173 Maverick by the Elevated Companies</p>
      </div>
      

      <div className="mb-3 mt-3 ">
        <p className="text-3xl mb-1 font-bold hidden md:block lg:block">PH305 Plan in 173 Maverick by the Elevated Companies</p>
        <div className="flex gap-2 items-center text-gray-600 text-sm">
          <FaLocationDot />
          <p className="text-lg">Las Vegas, NY</p>
        </div>
      </div>
      

      <div className=" flex gap-5 md:gap-10 lg:gap-10 w-full md:w-[65%] items-center py-2 ">
        {features.map((ele,index)=>(
          <div className="flex gap-2 text-gray-600 items-center">
            <div className="py-2 rounded-xl ">
            {ele.icon}
            </div>
            <p className="text-lg font-semibold">{ele.name}</p>
          </div>
        ))}
    </div>

    <div className="py-2 bg-black px-2 mb-6 mt-2 space-x-2 rounded-lg">
      <button className={`${type==="detail" ? "text-black bg-white" : "text-white bg-transparent"} py-2 px-4  rounded-xl`} onClick={()=>setType("detail")}>Overview</button>
      <button className={`${type==="features" ? "text-black bg-white" : "text-white bg-transparent"} py-2 px-4   rounded-xl`} onClick={()=>setType("features")}>Features</button>
      <button className={`${type==="map" ? "text-black bg-white" : "text-white bg-transparent"} py-2 px-4  rounded-xl`} onClick={()=>setType("map")}>Location & Nearby</button>
    </div>

    <h2 className="text-2xl  font-bold mb-4 ">Details</h2>

      <div className="bg-red-100">
        <DetailsCard/>
      </div>

      {/* Property Description */}
      <div className="mt-8 border-t-2 border-gray-400 py-5">
      <h2 className="text-2xl  font-bold mb-4 ">Description</h2>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Property are proud to present this unique six (6) bedroom triplex
        Penthouse in Raffles Residences, Palm Jumeirah... A ultra-luxury family
        home which comes fully furnished, ready and waiting for you to enjoy.
        The Penthouse has a palatial theme which will surround you with the
        affluence and grandeur you can expect from Raffles. For sizable bedrooms
        including a regal master suite in addition to a maids and drivers room,
        a large open plan living / dining area and outdoor terrace and pool make
        this the perfect family home.
      </p>

      {/* Features List */}
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Fully Furnished</li>
        <li>Ready & Vacant</li>
        <li>Pool & Jacuzzi</li>
        <li>Large Terrace</li>
        <li>Private Garage</li>
      </ul>

      {/* Exclusive Services */}
      <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
        Exclusive à la carte services at your disposal include: Personal Chef,
        Private Security, Personal Shopper, Raffles Butler, Housekeeping,
        Hairdressing & Beauty services, and much more. You will also have a host
        of first-class hotel facilities at your disposal.
      </p>

      {/* Contact Information */}
      <p className="text-gray-600 mb-2">
        For more information, please contact{" "}
        <span className="font-semibold">Bilal Mazar</span>, our area specialist
        today on{" "}
        <a href="tel:+971585986198" className="text-blue-500">
          +971 585 986 198
        </a>.
      </p>

      {/* Footer */}
      <div className="text-gray-600 space-y-2">
        <p>
          <strong>Property</strong>
        </p>
        <p>RERA ORN: 97</p>
        <p>Address: Marina Plaza, 20th Floor, Dubai Marina</p>
        <p>Office phone no: 123456789</p>
        <p>
          Email:{" "}
          <a
            href="mailto:customercare@property.com"
            className="text-blue-500"
          >
            customercare@property.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.property.com"
            className="text-blue-500"
          >
            www.property.com
          </a>
        </p>
      </div>
      </div>
      {/* Facilities & Amenities Section */}
      <div className="mt-8 border-b-2 border-t-2 border-gray-300 py-5">
        <h3 className="text-xl font-semibold mb-4">Facilities & Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span role="img" aria-label={facility.label}>
                {facility.icon}
              </span>
              <span>{facility.label}</span>
            </div>
          ))}
        </div>
      </div>
      <MapSection/>
    </div>
  );
};

export default PropertyDescription;
