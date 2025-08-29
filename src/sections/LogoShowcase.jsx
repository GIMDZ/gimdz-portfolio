import { logoIconsList } from '../constants';
import { useState } from 'react';

const LogoIcon = ({ icon }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="flex-none flex-center marquee-item relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={icon.imgPath} alt={icon.name} className="w-28 object-contain" />

      {showTooltip && (
        <div
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                        bg-gray-900 text-white text-sm px-4 py-2 rounded-md
                        whitespace-nowrap z-10 shadow-lg
                        before:content-[''] before:absolute before:top-full
                        before:left-1/2 before:transform before:-translate-x-1/2
                        before:border-4 before:border-transparent
                        before:border-t-gray-900"
        >
          {icon.name}
        </div>
      )}
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
