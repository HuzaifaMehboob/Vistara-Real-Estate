import React from 'react';
import v_1 from '../../assets/v-1.png'
import v_2 from '../../assets/v-2.png'
import v_3 from '../../assets/v-3.png'
import v_4 from '../../assets/v-4.png'
import v_5 from '../../assets/v-5.png'
import v_6 from '../../assets/v-6.png'

const logos = [
  v_1,v_2,v_3,v_4,v_5,v_6
];

const LogoRow = () => {
  return (
    <div className="w-full bg-gray-50 py-5 overflow-hidden">
      {/* Container that scrolls */}
      <div className="flex space-x-8 animate-scroll">
        {/* Map over the logos twice to create a seamless scrolling effect */}
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="grayscale opacity-60" />
        ))}
      </div>
    </div>
  );
};

export default LogoRow;
